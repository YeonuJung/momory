import { NextRequest, NextResponse } from "next/server";

// 유저가 로그인 버튼을 누르면 카카오 로그인 페이지로 리다이렉트 시키는 곳
const REST_API_KEY = process.env.KAKAO_REST_API_KEY as string;
const REDIRECT_URI = process.env.KAKAO_REDIRECT_URI as string;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const redirect_uri = searchParams.get("redirect_uri");
  if(redirect_uri){
    const encoded_redirect_uri = encodeURIComponent(redirect_uri);
    return NextResponse.redirect(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&state=${encoded_redirect_uri}`,
    );
  }
  return NextResponse.redirect(
    `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
  );
}
