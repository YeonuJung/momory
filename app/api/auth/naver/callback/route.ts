import { NextRequest, NextResponse } from "next/server";
// 사용자가 네이버 로그인 요청후 네이버 서버에서 인가코드를 보내주는 곳
export async function GET(request: NextRequest) {
    const code = request.nextUrl.searchParams.get("code") 
    if(!code ){
        return NextResponse.json({data: "code not found"})
    }
// 네이버 서버에 인가코드를 보내서 토큰을 받아오는 과정
   const naverTokenResponse = await fetch(`https://nid.naver.com/oauth2.0/token`, {
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
    })
   })
   if(!naverTokenResponse.ok){
         return NextResponse.json({data: "naver token request failed"})
   }
   const naverToken = await naverTokenResponse.json()

   // 엑세스 토큰
   const accessToken = naverToken.access_token;

    // 네이버 서버에 액세스 토큰을 보내서 사용자 정보를 받아오는 과정
   const userEmailResponse = await fetch ('https://openapi.naver.com/v1/nid/me', {
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
   })
   if(!userEmailResponse.ok){
         return NextResponse.json({data: "naver user email request failed"})
   }
   const userEmail = await userEmailResponse.json()
   return NextResponse.json({data: userEmail})
}