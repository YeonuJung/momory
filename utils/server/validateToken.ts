import { verifyAccessToken } from "@/libs/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function validateToken() {
    const cookieStore = cookies();
    const access_token = cookieStore.get("access_token");
    // 로그인이 되어있지 않다면 랜딩 페이지로 리다이렉트
    if (!access_token) {
      redirect(`/?error=auth&access_token=none`);
    }
    const verifiedAccessToken = await verifyAccessToken(access_token.value);
    // 액세스 토큰이 유효하지 않다면 랜딩 페이지로 리다이렉트
    if (!verifiedAccessToken.ok) {
      redirect(`/?error=auth&access_token=invalid`);
    }
    // 유저 아이디를 가져옴(verify가 성공했으므로 user_id는 존재함)
    return verifiedAccessToken.payload?.user_id as number;
  
}
