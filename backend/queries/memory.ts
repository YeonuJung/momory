import { supabase } from "@/libs/supabase";

// 모모리에 남겨진 메모리를 가져오는 쿼리
// 1. 메모리 테이블에서 해당 모모리의 uuid를 가진 메모리를 모두 가져온다.
interface GetMemoryParams {
  momory_uuid: string;
  cursor?: string;
}
export const readMemory = async ({momory_uuid, cursor}: GetMemoryParams ) => {
  let query = supabase.from('memory').select("*", {count: 'exact'}).eq("momory_uuid", momory_uuid ).order('id', {ascending: false}).limit(9)
  if(cursor){
    query = query.lt('id', cursor);
  }
 
  const {data, error, count} = await query;
  const nextCursor = data?.[data.length - 1]?.id

  return {data, error, count, nextCursor}
  
};


// export const uploadMemory = async({momory_uuid, }: {momory_uuid: string, content: string}) => {
//   // 버킷에 이미지를 업로드하고 이미지의 url을 반환한다.
// 어떻게 저장하고 어떤 값을 넣을지는 고민해봐야함
// }

export const createMemory = async ({momory_uuid, user_id, image_path, nickname, filter, message}: {momory_uuid: string, user_id: number, image_path: string, nickname: string, filter: string, message: string}) => {
  // 메모리를 생성하는 쿼리
  const {data, error} = await supabase.from('memory').insert([{momory_uuid, user_id, image_path, nickname, filter, message}]).select();
  return {data, error}
}
// 메모리를 삭제하는 쿼리
// 1. 메모리 테이블에서 해당 메모리의 id를 가진 메모리를 삭제한다.
export const deleteMemory= async ({memory_id}: {memory_id: number}) => {
  const {data, error} = await supabase.from('memory').delete().eq('id', memory_id);
  return {data, error}
  // 여기에 추가로 버킷에 있는 이미지도 삭제해야함
}