import { checkMomory } from "@/backend/queries/momory";
import { checkUserByEmail, createUser } from "@/backend/queries/user";
import { signAccessToken, signRefreshToken } from "@/libs/jwt";
import { redirectWithError } from "@/utils/server/redirectWithError";
import { NextRequest, NextResponse } from "next/server";

// 사용자가 카카오 로그인 요청후 카카오 서버에서 인가코드를 보내주는 곳
export async function GET(request: NextRequest) {
  // 인가코드를 받아옴
  const code = request.nextUrl.searchParams.get("code")!;
  // state가 있으면 리다이렉트 uri를 받아오기
  const momory_redirect_uri = request.nextUrl.searchParams.get("state");
  if (!code) {
    return redirectWithError(request, "auth", "kakao_auth");
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
    return redirectWithError(request, "auth", "kakao_auth");
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
    return redirectWithError(request, "auth", "kakao_auth");
  }
  // 유저 이메일 추출
  const {
    kakao_account: { email },
  } = await userEmailResponse.json();

  // 기존에 가입된 유저인지 확인(이메일과 소셜타입으로 구분)
  const { data: isUserExists, error: isUserExistsError } =
    await checkUserByEmail({
      email: email,
      social_type: "kakao",
    });

  if (isUserExistsError) {
    return redirectWithError(request, "server", "server_error");
  }
  // 기존에 가입된 유저라면 모모리 체크한 후 토큰을 바로 발급
  if (isUserExists && isUserExists.length > 0) {
    const user_id = isUserExists[0].id;
    // 모모리가 있는지 확인
    const { data: isMomoryExist, error: isMomoryExistError } =
      await checkMomory({ user_id });
    if (isMomoryExistError) {
      return redirectWithError(request, "server", "server_error");
    }
    // 엑세스 토큰과 리프레시 토큰을 발급
    // 모모리가 있으면 모모리 uuid를 같이 발급
    const momory_uuid =
      isMomoryExist && isMomoryExist.length > 0
        ? isMomoryExist[0].uuid
        : undefined;
    const [accessToken, refreshToken] = await Promise.all([
      signAccessToken({ user_id, momory_uuid }),
      signRefreshToken({ user_id, momory_uuid }),
    ]);

    // 리다이렉트 uri가 있으면 해당 uri 모모리로 리다이렉트 없으면 아래 주석
    // 모모리가 있으면 모모리 페이지로 리다이렉트, 없으면 모모리 생성 페이지로 리다이렉트
    const redirect_uri = momory_redirect_uri
      ? decodeURIComponent(momory_redirect_uri)
      : isMomoryExist && isMomoryExist.length > 0
        ? `/momory/${isMomoryExist[0].uuid}`
        : "/create-momory";

    const response = NextResponse.redirect(new URL(redirect_uri, request.url));

    response.cookies.set("access_token", accessToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30 + 60 * 60,
    });
    response.cookies.set("refresh_token", refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30 + 60 * 60,
    });
    return response;
  }
  // 기존에 가입된 유저가 아니라면 새로 등록 후 토큰 발급
  const { data: insertData, error: insertDataError } = await createUser({
    email: email,
    social_type: "kakao",
  });

  if (insertDataError) {
    return redirectWithError(request, "server", "server_error");
  }

  if (!insertData || insertData.length === 0) {
    return redirectWithError(request, "server", "server_error");
  }
  // 엑세스 토큰과 리프레시 토큰을 발급
  const [accessToken, refreshToken] = await Promise.all([
    signAccessToken({ user_id: insertData?.[0].id }),
    signRefreshToken({ user_id: insertData?.[0].id }),
  ]);

  const redirect_uri = momory_redirect_uri
    ? decodeURIComponent(momory_redirect_uri)
    : "/create-momory";
  const response = NextResponse.redirect(new URL(redirect_uri, request.url));

  response.cookies.set("access_token", accessToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30 + 60 * 60,
  });
  response.cookies.set("refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30 + 60 * 60,
  });
  return response;
}
