import { api } from "@/libs/axios";
import { verifyAccessToken } from "@/libs/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface ValidateTokenProps {
  momory_uuid?: string
}
export async function validateToken({momory_uuid}: ValidateTokenProps = {}) {
    const cookieStore = cookies();
    const access_token = cookieStore.get("access_token");
    // 모모리 uuid가 존재하고 액세스 토큰이 없다면?
    // 로그인 시키고 다시 접근하려 했던 모모리 페이지로 리다이렉트
    // 이는 또한 모모리에 초대받은 유저를 위한 처리
    if(momory_uuid && !access_token){
      redirect(`/?redirect_uri=/momory/${momory_uuid}`)
    }
    // 로그인이 되어있지 않다면 랜딩 페이지로 리다이렉트
    if (!access_token) {
     redirect(`/?auth_error=unauthorized`);
    }
    const verifiedAccessToken = await verifyAccessToken(access_token.value);
    // 액세스 토큰이 유효하지 않다면 랜딩 페이지로 리다이렉트
    if (!verifiedAccessToken.ok) {
      redirect(`/?auth_error=unauthorized`);
    }
    // 유저 아이디를 가져옴(verify가 성공했으므로 user_id는 존재함)
    return {user_id: verifiedAccessToken.payload?.user_id as number, momory_uuid: verifiedAccessToken.payload?.momory_uuid as string}
  
}
