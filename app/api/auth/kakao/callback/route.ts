import { NextRequest, NextResponse } from "next/server";

// 사용자가 카카오 로그인 요청후 카카오 서버에서 인가코드를 보내주는 곳

export async function GET(request: NextRequest) {
  // 인가코드를 받아옴
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return NextResponse.json({ error: "code not found" });
  }

  // 카카오 서버에 인가코드를 보내서 토큰을 받아오는 과정
  const kakaoTokenResponse = await fetch(
    `https://kauth.kakao.com/oauth/token`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.KAKAO_REST_API_KEY as string,
        redirect_uri: process.env.KAKAO_REDIRECT_URI as string,
        code: code,
      }),
    },
  );
  if (!kakaoTokenResponse.ok) {
    return NextResponse.json({ error: "kakao token request failed" });
  }
  const kakaoToken = await kakaoTokenResponse.json();

  // 엑세스 토큰
  const kakaoAccessToken = kakaoToken.access_token;

  // 카카오 서버에 액세스 토큰을 보내서 사용자 정보를 받아오는 과정
  const userEmailResponse = await fetch("https://kapi.kakao.com/v2/user/me", {
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `Bearer ${kakaoAccessToken}`,
    },
  });
  if(!userEmailResponse.ok){
    return NextResponse.json({error: "kakao user email request failed"})
  }
  // 사용자 정보를 받아옴
  const userEmail = await userEmailResponse.json();

  return NextResponse.json({ data: userEmail });
}
