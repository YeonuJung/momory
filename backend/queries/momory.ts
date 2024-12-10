import { CheckMomoryParams, CreateMomoryParams, ReadMomoryParams } from "@/types/query";
import { supabase } from "../../libs/supabase";

// 모모리를 생성하는 쿼리
export const createMomory = async ({user_id, momoryNickname, encryptedPassword}: CreateMomoryParams) => {
  const { data, error } = await supabase
    .from("momory")
    .insert([{user_id: user_id, password: encryptedPassword, nickname: momoryNickname}])
    .select();

  return {data, error};
}


// 모모리가 존재하는지 확인하는 쿼리
export const checkMomory = async ({user_id}: CheckMomoryParams) => {
  const { data, error } = await supabase
    .from("momory")
    .select("uuid")
    .eq("user_id", user_id)

  return {data, error};
}

// 모모리 정보를 가져오는 쿼리
export const readMomory = async ({momory_uuid}: ReadMomoryParams) => {
  const {data, error} = await supabase.from('momory').select("*").eq("uuid", momory_uuid);

  return {data, error}
}