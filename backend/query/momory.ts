import { supabase } from "../utils/supabase-utils";


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