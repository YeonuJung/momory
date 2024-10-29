import { checkUserByEmail, createUser } from "@/backend/query/user";
import { signAccessToken, signRefreshToken } from "@/backend/utils/jwt-utils";
import { NextRequest, NextResponse } from "next/server";
// 사용자가 네이버 로그인 요청후 네이버 서버에서 인가코드를 보내주는 곳
export async function GET(request: NextRequest) {
  // 인가코드를 받아옴
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return NextResponse.json(
      { error: "Authorization code is required" },
      { status: 400 },
    );
  }
  // 네이버 서버에 인가코드를 보내서 토큰을 받아오는 과정
  const naverTokenResponse = await fetch(
    `https://nid.naver.com/oauth2.0/token`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.NAVER_CLIENT_ID as string,
        client_secret: process.env.NAVER_CLIENT_SECRET as string,
        code: code,
        state: "test",
      }),
    },
  );
  if (!naverTokenResponse.ok) {
    return NextResponse.json({ error: "naver token request failed" });
  }
  // 네이버 서버에서 받아온 액세스토큰을 추출
  const { access_token } = await naverTokenResponse.json();

  // 네이버 서버에 액세스 토큰을 보내서 사용자 정보를 받아오는 과정
  const userEmailResponse = await fetch("https://openapi.naver.com/v1/nid/me", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (!userEmailResponse.ok) {
    return NextResponse.json({ error: "naver user email request failed" });
  }
  // 유저 이메일 추출
  const {
    response: { email },
  } = await userEmailResponse.json();

  // 기존에 가입된 유저인지 확인(이메일과 소셜타입으로 구분)
  const isUserExists = await checkUserByEmail({
    email: email,
    social_type: "naver",
  });

  if (isUserExists instanceof Error) {
    return NextResponse.json({ error: isUserExists }, { status: 500 });
  }
  // 기존에 가입된 유저라면 토큰을 바로 발급
  if (isUserExists.length > 0) {
    // 엑세스 토큰과 리프레시 토큰을 발급
    const accessToken = signAccessToken(isUserExists[0].id);
    const refreshToken = signRefreshToken(isUserExists[0].id);

    const response = NextResponse.redirect(`${process.env.JWT_REDIRECT_URI}`);

    response.cookies.set("access_token", accessToken, {
      httpOnly: false,
    });
    response.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      path: "/api/refresh",
      maxAge: 60 * 60 * 24 * 30,
    });
    return response;
  }
  // 기존에 가입된 유저가 아니라면 새로 등록 후 토큰 발급
  const insertData = await createUser({ email: email, social_type: "naver" });

  if (insertData instanceof Error) {
    return NextResponse.json({ error: insertData }, { status: 500 });
  }

  // 엑세스 토큰과 리프레시 토큰을 발급
  const accessToken = signAccessToken(insertData[0].id);
  const refreshToken = signRefreshToken(insertData[0].id);

  const response = NextResponse.redirect(`${process.env.JWT_REDIRECT_URI}`);

  response.cookies.set("access_token", accessToken, {
    httpOnly: false,
  });
  response.cookies.set("refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    path: "/api",
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}