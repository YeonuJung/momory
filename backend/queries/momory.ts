import { supabase } from "../../libs/supabase";

interface CreateMomoryParams {
  user_id: number;
  nickname: string;
  password: string;
}
// 모모리를 생성하는 쿼리
export const createMomory = async ({user_id, nickname, password}: CreateMomoryParams) => {
  const { data, error } = await supabase
    .from("momory")
    .insert([{user_id: user_id, password: password, nickname: nickname}])
    .select();
  
  return {data, error};
}
// 모모리가 존재하는지 확인하는 쿼리
// head true를 통해 최적화, count값을 boolean 값으로 반환
// 토큰의 페이로드에 모모리 uuid가 존재하기 때문에 이를 사용한다고 가정하면 필요없는 쿼리
export const checkMomory = async ({momory_uuid}: {momory_uuid: string}) => {
  const { count, error } = await supabase
    .from("momory")
    .select("uuid", { count: "exact", head: true })
    .eq("uuid", momory_uuid)
 
  return {data: {exist: (count?? 0) > 0}, error};
}
// 모모리 닉네임 및 비밀번호를 가져오는 쿼리
export const readMomory = async ({momory_uuid}: {momory_uuid: string}) => {
  const {data, error} = await supabase.from('momory').select("*").eq("uuid", momory_uuid);
  
  return {data, error}
}