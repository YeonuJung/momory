import { supabase } from "@/libs/supabase";

// 모모리에 남겨진 메모리를 가져오는 쿼리
// 1. 메모리 테이블에서 해당 모모리의 uuid를 가진 메모리를 모두 가져온다.
// 2. 커서 기반으로 가져온다. (맨 처음 서버사이드 에서 내려줄 때는 커서없이 첫페이지 고정으로)
// 3. 뿐만 아니라 커서가 없는 경우 첫 페이지라는 것을 알 수 있다.
interface GetMemoryParams {
  momory_uuid: string;
  cursor?: string;
}
export const readMemory = async ({ momory_uuid, cursor }: GetMemoryParams) => {
  let query = supabase
    .from("memory")
    .select("*", { count: "exact" })
    .eq("momory_uuid", momory_uuid)
    .order("id", { ascending: true })
    .limit(9);
  const isFirstPage = !cursor;
  if (cursor) {
    query = query.gt("id", cursor);
  }

  const { data, error, count } = await query;

  if (error) {
    return { data: null, error };
  }

  if (data && data.length === 0) {
    return { data, error: null, count: 0 };
  }
  const prevCursor = !isFirstPage ? data?.[0].id : null;
  const nextCursor = data?.[data.length - 1]?.id;

  return { data, error, count, nextCursor, prevCursor };
};

export const uploadAndCreateMemory = async ({
  photo,
  momory_uuid,
  user_id,
  nickname,
  filter,
  message,
}: {
  photo: File;
  momory_uuid: string;
  user_id: number;
  nickname: string;
  filter: string;
  message: string;
}) => {
  // 1. 이미지 업로드
  // 파일 경로 방식: 20210901/uuid/현재시간 (수파베이스는 파일이름에 한글 지원하지 않음)
  // 날짜별로 구분, uuid로 구분, 현재시간으로 혹시나 겹칠 수 있는 파일이름 구분
  // 업데이트 불가, 삭제 후 재업로드 해도 경로가 바뀌기 때문에 캐시를 길게 잡음
  const now = new Date();
  const formattedDate = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const fileName = `${formattedDate}/${momory_uuid}/${now.getTime()}.${photo.name.split(".").pop()}`;
  const { data: imageData, error: uploadError } = await supabase.storage
    .from("memories")
    .upload(fileName, photo, {
      cacheControl: "31536000",
    });
  // 업로드 실패시 에러 반환(어차피 db에 저장실패해도 업로드 된 이미지는 삭제해야함)
  if (uploadError) {
    return { data: imageData, error: uploadError };
  }

  // 3. DB에 메모리 저장(앞서 받은 이미지 경로를 함께 저장)
  const { data, error: insertError } = await supabase
    .from("memory")
    .insert([
      {
        momory_uuid,
        user_id,
        image_path: imageData.path,
        nickname,
        filter,
        message,
      },
    ])
    .select();

  // DB 저장 실패시 업로드된 이미지 삭제(이미지는 업로드 성공했으므로 삭제해야함)
  // 스토리지 이미지 삭제는 cronjob 같은 거 이용해서 구현하면 유저입장에서는 처리가 빠르다고 느낄 수 있을 듯.
  if (insertError) {
    return { data: null, error: insertError };
  }

  return { data, error: insertError };
};

// 메모리를 삭제하는 쿼리
// 1. 메모리 테이블에서 해당 메모리의 id를 가진 메모리를 삭제한다.
export const deleteMemory = async ({
  memory_id,
  image_path,
}: {
  memory_id: number;
  image_path: string;
}) => {
  const { error } = await supabase.from("memory").delete().eq("id", memory_id);
  if (error) {
    return { data: null, error };
  }
  // 2. 스토리지에서 해당 이미지 삭제
  // 만약 실패하더라도 이미 메모리 테이블에서는 제거된 상태이기 때문에 따로 처리해주어야 함.
  // 그래서 에러가 발생해도 data는 성공적으로 반환하고, 에러처리용 테이블에 에러내용 삽입.
  // 스토리지 이미지 삭제는 cronjob 같은 거 이용해서 구현하면 유저입장에서는 처리가 빠르다고 느낄 수 있을 듯.
  const { error: storageError } = await supabase.storage
    .from("memories")
    .remove([image_path]);
    console.log(storageError);
  
  return { data: ["Successfully Deleted"], error };
};
