import { PostgrestError } from "@supabase/supabase-js";
import { supabase } from "../../libs/supabase";
import { Momory } from "@/types/model";

interface CreateMomoryProps {
  user_id: number;
  nickname: string;
  password: string;
}
export const createMomory = async ({user_id, nickname, password}: CreateMomoryProps): Promise<{error: PostgrestError} | {data: Momory[]}> => {
  const { data, error } = await supabase
    .from("momory")
    .insert([{user_id: user_id, password: password, nickname: nickname}])
    .select();
  if (error) {
    return {error};
  }
  return {data};
}

export const checkMomory = async (id : number): Promise<{error: PostgrestError} | {data: Momory[]}> => {
  const { data, error } = await supabase
    .from("momory")
    .select("*")
    .eq("id", id);
  if (error) {
    return {error};
  }
  return {data};
}