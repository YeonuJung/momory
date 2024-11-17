import { NextResponse } from "next/server";

// 유저가 로그인 버튼을 누르면 카카오 로그인 페이지로 리다이렉트 시키는 곳
const REST_API_KEY = process.env.KAKAO_REST_API_KEY as string;
const REDIRECT_URI = process.env.KAKAO_REDIRECT_URI as string;

export async function GET() {
  // const accessToken = request.cookies.get("access_token")?.value;
  // if (accessToken) {
  //   const { payload, ok } = await verifyAccessToken(accessToken);
  //   if (ok === false) {
  //     const response = NextResponse.redirect(
  //       `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
  //     );
  //     response.cookies.delete("access_token");
  //     response.cookies.delete("refresh_token");
  //     return response;
  //   }
  //   if (payload && payload.momory_uuid) {
  //     return NextResponse.redirect(new URL("/momory", request.url));
  //   }
  //   return NextResponse.redirect(new URL("/create-momory", request.url));
  // }
  return NextResponse.redirect(
    `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
  );
}
