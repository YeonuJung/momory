import { NextRequest, NextResponse } from "next/server";

const REST_API_KEY = process.env.KAKAO_REST_API_KEY as string;
const REDIRECT_URI = process.env.KAKAO_REDIRECT_URI as string;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const redirect_uri = searchParams.get("redirect_uri");
  if (redirect_uri) {
    const encoded_redirect_uri = encodeURIComponent(redirect_uri);
    return NextResponse.redirect(
      `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&state=${encoded_redirect_uri}`,
    );
  }
  return NextResponse.redirect(
    `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`,
  )
}
