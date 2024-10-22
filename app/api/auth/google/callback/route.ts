import { NextRequest, NextResponse } from "next/server";

// 사용자가 구글 로그인 요청후 구글 서버에서 인가코드를 보내주는 곳
export async function GET(request: NextRequest) {
  // 인가코드를 받아옴
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return NextResponse.json({ error: "code not found" });
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
    return NextResponse.json({ error: "google token request failed" });
  }
  const googleToken = await googleTokenResponse.json();
  // 엑세스 토큰
  const accessToken = googleToken.access_token;

  // 구글 서버에 액세스 토큰을 보내서 사용자 정보를 받아오는 과정
  const userEmailResponse = await fetch(
    'https://www.googleapis.com/oauth2/v3/userinfo',
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  if (!userEmailResponse.ok) {
    return NextResponse.json({ error: "google user email request failed" });
  }
  // 사용자 정보를 받아옴
  const userEmail = await userEmailResponse.json();

  return NextResponse.json({ data: userEmail });
}
