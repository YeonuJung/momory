import { supabase } from "@/libs/supabase";

// 모모리에 남겨진 메모리를 가져오는 쿼리
// 1. 메모리 테이블에서 해당 모모리의 uuid를 가진 메모리를 모두 가져온다.
interface GetMemoryParams {
  momory_uuid: string;
  cursor?: string;
}
export const getMemory = async ({momory_uuid, cursor}: GetMemoryParams ) => {
  let query = supabase.from('memory').select("*", {count: 'exact'}).eq("momory_uuid", momory_uuid ).order('id', {ascending: false}).limit(9)
  if(cursor){
    query = query.lt('id', cursor);
  }
 
  const {data, error, count} = await query;
  const nextCursor = data?.[data.length - 1]?.id

  return {data, error, count, nextCursor}
  
};

// 모모리에 메모리를 남기는 쿼리
// 사진을 눌렀을 때 무엇을 확인해야 하는가?
// 1. 사진 ID를 통해 해당 사진을 등록한 사람의 비밀번호를 가져온다.
// 2. 가져온 비밀번호와 해당 사진을 클릭한 사람의 비밀번호를 비교한다.
// 3. 비밀번호가 일치하면 해당 사진을 보여준다.
// 4. 비밀번호가 일치하지 않으면 권한이 없다고 표시한다.