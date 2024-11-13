import { supabase } from "../../libs/supabase";


export const checkMomory = async (id : number) => {
  const { data, error } = await supabase
    .from("momory")
    .select("*")
    .eq("id", id);
  if (error) {
    return error;
  }
  return data;
}