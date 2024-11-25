import { NextResponse } from "next/server";

const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID as string;
const NAVER_REDIRECT_URI = process.env.NAVER_REDIRECT_URI as string;

// 사용자가 네이버 로그인 요청후 네이버 서버에서 인가코드를 보내주는 곳
export async function GET() {
  return NextResponse.redirect(
    `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&state=test`,
  );
}
