import { PostgrestError } from "@supabase/supabase-js";
import { supabase } from "../../libs/supabase";
import { User } from "@/types/model";



export interface CheckUserByEmailProps {
  email: string;
  social_type: "google" | "kakao" | "naver";
}

export const checkUserByEmail = async ({
  email,
  social_type,
}: CheckUserByEmailProps)  => {
  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("email", email)
    .eq("social_type", social_type);
  //처리하는 곳에서 에러를 처리하기 위해서 error를 반환
  if (error) {
    return {error};
  }

  return {data}
};

export const createUser = async ({email, social_type} : CheckUserByEmailProps): Promise<{error: PostgrestError} | {data: Pick<User, "id">[]}>  => {
    const { data, error } = await supabase
        .from("user")
        .insert([{ email: email, social_type: social_type }])
        .select("id");
    //처리하는 곳에서 에러를 처리하기 위해서 error를 반환
    if (error) {
        return {error};
    }
    
    return {data}
}