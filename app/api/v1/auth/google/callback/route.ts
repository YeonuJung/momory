import { checkUserByEmail, createUser } from "@/backend/queries/user";
import { signAccessToken, signRefreshToken } from "@/libs/jwt";
import { redirectWithError } from "@/utils/server/redirectWithError";
import { NextRequest, NextResponse } from "next/server";

// 사용자가 구글 로그인 요청후 구글 서버에서 인가코드를 보내주는 곳
export async function GET(request: NextRequest) {
  // 인가코드를 받아옴
  const code = request.nextUrl.searchParams.get("code");
  
  if(!code){
    return redirectWithError(request, 'auth', 'kakao_auth')
  }
  // 구글 서버에 인가코드를 보내서 토큰을 받아오는 과정
  const googleTokenResponse = await fetch(
    "https://oauth2.googleapis.com/token",
    {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID as string,
        client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: process.env.GOOGLE_REDIRECT_URI as string,
      }),
    },
  );
  if (!googleTokenResponse.ok) {
    return redirectWithError(request, 'auth', 'google_auth')
  }
  // 구글 서버에서 받아온 액세스토큰을 추출
  const { access_token } = await googleTokenResponse.json();

  // 구글 서버에 액세스 토큰을 보내서 사용자 정보를 받아오는 과정
  const userEmailResponse = await fetch(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );
  if (!userEmailResponse.ok) {
    return redirectWithError(request, 'auth', 'google_auth')
  }
  // 유저 이메일 추출
  const { email } = await userEmailResponse.json();

  // 기존에 가입된 유저인지 확인(이메일과 소셜타입으로 구분)
  const isUserExists = await checkUserByEmail({
    email: email,
    social_type: "google",
  });

  if ("error" in isUserExists) {
    return redirectWithError(request, 'server', 'server_error')
  }
  // 기존에 가입된 유저라면 토큰을 바로 발급
  if (isUserExists.data.length > 0) {
    // 엑세스 토큰과 리프레시 토큰을 발급
    const [accessToken, refreshToken] = await Promise.all([signAccessToken({user_id: isUserExists.data[0].id}),signRefreshToken(isUserExists.data[0].id)])

    const response = NextResponse.redirect(new URL("/", request.url));

    response.cookies.set("access_token", accessToken, {
      httpOnly: true,
      sameSite: "strict",
      path: "/api/v1",
      maxAge: (60 * 60 * 24 * 30) + (60 * 60),
    });
    response.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      path: "/api/v1/refresh",
      maxAge: (60 * 60 * 24 * 30) + (60 * 60),
    });
    return response;
  }
  // 기존에 가입된 유저가 아니라면 새로 등록 후 토큰 발급
  const insertData = await createUser({ email: email, social_type: "google" });

  if ("error" in insertData) {
    return redirectWithError(request, 'server', 'server_error')
  }

  // 엑세스 토큰과 리프레시 토큰을 발급
  const [accessToken, refreshToken] = await Promise.all([signAccessToken({user_id: isUserExists.data[0].id}),signRefreshToken(isUserExists.data[0].id)])

  const response = NextResponse.redirect(new URL("/", request.url));

  response.cookies.set("access_token", accessToken, {
    httpOnly: true,
    sameSite: "strict",
    path: "/api/v1",
    maxAge: (60 * 60 * 24 * 30) + (60 * 60),
  });
  response.cookies.set("refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    path: "/api/v1/refresh",
    maxAge: (60 * 60 * 24 * 30) + (60 * 60),
  });
  return response;
}
