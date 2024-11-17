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
// 
export const checkMomory = async (id : number) => {
  const { count, error } = await supabase
    .from("momory")
    .select("id", { count: "exact"})
    .eq("id", id)
    .limit(1)
 
  return {exist: (count?? 0) > 0, error};
}