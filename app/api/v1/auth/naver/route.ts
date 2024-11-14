import { verifyAccessToken } from "@/libs/jwt";
import { NextRequest, NextResponse } from "next/server";

const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID as string;
const NAVER_REDIRECT_URI = process.env.NAVER_REDIRECT_URI as string;

// 사용자가 네이버 로그인 요청후 네이버 서버에서 인가코드를 보내주는 곳
export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  if (accessToken) {
    const { payload, ok } = await verifyAccessToken(accessToken);
    if (ok === false) {
      const response = NextResponse.redirect(
        `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&state=test`,
      );
      response.cookies.delete("access_token");
      response.cookies.delete("refresh_token");
      return response;
    }
    if (payload && payload.momory_uuid) {
      return NextResponse.redirect(new URL("/momory", request.url));
    }
    return NextResponse.redirect(new URL("/create-momory", request.url));
  }
  return NextResponse.redirect(
    `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&state=test`,
  );
}
