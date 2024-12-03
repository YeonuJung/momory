import { verifyAccessToken } from "@/libs/jwt";
import { cookies } from "next/headers";
import { redirectToLogin } from "./redirectToLogin";

interface ValidateTokenProps {
  momory_uuid?: string;
}
export async function validateToken({ momory_uuid }: ValidateTokenProps = {}) {
  const cookieStore = cookies();
  const access_token = cookieStore.get("access_token");
  const refresh_token = cookieStore.get("refresh_token");
 
  // 로그인이 되어있지 않다면 랜딩 페이지로 리다이렉트
  if (!access_token) {
    // 모모리 uuid가 존재하는 경우 로그인 시키고 다시 접근하려 했던 모모리 페이지로 리다이렉트
    // 이는 또한 모모리에 초대받은 유저를 위한 처리
    return redirectToLogin(momory_uuid);
    
  }
  const verifiedAccessToken = await verifyAccessToken(access_token.value);
  // 액세스 토큰이 만료된 경우
  if (
    !verifiedAccessToken.ok &&
    verifiedAccessToken.error === "ERR_JWT_EXPIRED"
  ) {
    // 리프레쉬 토큰이 없는 경우 랜딩 페이지로 리다이렉트
    if (!refresh_token) {
      return redirectToLogin(momory_uuid);
      
    }
    // 리프레쉬 토큰이 있을 경우 리프레쉬 토큰으로 액세스 토큰 재발급
    const response = await fetch("https://momory.kr/api/v1/refresh", {
      method: "GET",
      headers: {
        cookie: `refresh_token=${refresh_token.value}`,
      },
      cache: "no-store"
    });
    // 리프레쉬 토큰이 유효하지 않을 때 랜딩 페이지로 리다이렉트
    if (response.status === 401) {
      return redirectToLogin(momory_uuid);
      
    }
    // 새로운 액세스 토큰을 응답에서 가져오기
    const data = await response.json()
    // 새로운 액세스 토큰이 없을 때 랜딩 페이지로 리다이렉트
    if (!data.access_token) {
      return redirectToLogin(momory_uuid);
      
    }
    // 새로운 액세스 토큰이 유효한지 확인
    // 페이로드에 있는 값이 필요하기 때문에 굳이 verifyAccessToken을 사용
    const newVerifiedAccessToken = await verifyAccessToken(
      data.access_token,
    );
    // 새로운 액세스 토큰이 유효하지 않을 때 랜딩 페이지로 리다이렉트
    if (!newVerifiedAccessToken.ok) {
      return redirectToLogin(momory_uuid);
      
    }
    // 새로운 액세스 토큰이 유효하다면 유저 아이디와 모모리 uuid를 가져와서 리턴
    return {
      user_id: newVerifiedAccessToken.payload?.user_id as number,
      momory_uuid: newVerifiedAccessToken.payload?.momory_uuid as string | undefined,
    };
  }
  // 액세스 토큰이 유효하지 않다면 랜딩 페이지로 리다이렉트
  if (!verifiedAccessToken.ok) {
   return redirectToLogin(momory_uuid);
  }
  // 액세스 토큰이 유효하다면 유저 아이디와 모모리 uuid를 가져와서 리턴
  // verify가 성공했으므로 user_id는 무조건 존재함
  return {
    user_id: verifiedAccessToken.payload?.user_id as number,
    momory_uuid: verifiedAccessToken.payload?.momory_uuid as string | undefined,
  };
}
