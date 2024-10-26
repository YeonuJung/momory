import { signAccessToken, signRefreshToken } from "@/backend/utils/jwt-utils";
import { createClient } from "@/backend/utils/supabase-utils";
import { NextRequest, NextResponse } from "next/server";

// 사용자가 카카오 로그인 요청후 카카오 서버에서 인가코드를 보내주는 곳
export async function GET(request: NextRequest) {
  const supabase = createClient();
  // 인가코드를 받아옴
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return NextResponse.json(
      { error: "Authorization code is required" },
      { status: 400 },
    );
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
  // 카카오 서버에서 받아온 액세스토큰을 추출
  const { access_token } = await kakaoTokenResponse.json();

  // 카카오 서버에 액세스 토큰을 보내서 사용자 정보를 받아오는 과정
  const userEmailResponse = await fetch("https://kapi.kakao.com/v2/user/me", {
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (!userEmailResponse.ok) {
    return NextResponse.json({ error: "kakao user email request failed" });
  }
  // 유저 이메일 추출
  const {
    kakao_account: { email },
  } = await userEmailResponse.json();

  // 기존에 가입된 유저인지 확인(이메일과 소셜타입으로 구분)
  const { data, error } = await supabase
    .from("user")
    .select("*")
    .eq("email", email)
    .eq("social_type", "kakao");

  if (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
  // 기존에 가입된 유저라면 토큰을 바로 발급
  if (data && data?.length > 0) {
    // 엑세스 토큰과 리프레시 토큰을 발급
    const accessToken = signAccessToken(data[0].id);
    const refreshToken = signRefreshToken(data[0].id);

    return NextResponse.json({ accessToken, refreshToken });
  }
  // 기존에 가입된 유저가 아니라면 새로 등록 후 토큰 발급
  const { data: insertData, error: insertError } = await supabase
    .from("user")
    .insert([{ email: email, social_type: "kakao" }])
    .select("id");

  if (insertError) {
    return NextResponse.json({ error: insertError }, { status: 500 });
  }

  // 엑세스 토큰과 리프레시 토큰을 발급
  const accessToken = signAccessToken(insertData[0].id);
  const refreshToken = signRefreshToken(insertData[0].id);
  return NextResponse.json({ accessToken, refreshToken });
}
