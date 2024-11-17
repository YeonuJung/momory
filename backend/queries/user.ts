import { supabase } from "../../libs/supabase";



export interface CheckUserByEmailParams {
  email: string;
  social_type: "google" | "kakao" | "naver";
}

export const checkUserByEmail = async ({
  email,
  social_type,
}: CheckUserByEmailParams)  => {
  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("email", email)
    .eq("social_type", social_type);


  return {data, error}
};

export const createUser = async ({email, social_type} : CheckUserByEmailParams)  => {
    const { data, error } = await supabase
        .from("user")
        .insert([{ email: email, social_type: social_type }])
        .select("id");
  
    
    return {data, error}
}