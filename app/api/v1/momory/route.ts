import { createMomory} from "@/backend/queries/momory";
import { signAccessToken } from "@/libs/jwt";
import {NextRequest, NextResponse } from "next/server";
// (모모리 읽어오는 GET 요청 핸들러)
// 서버컴포넌트에서는 굳이 api를 통할 필요가 없기 때문에 보류
// export async function GET(request: NextRequest) {
//     const middlewareData = JSON.parse(request.headers.get('x-middleware-data') as string)
//     const {momory_uuid} = middlewareData;
//     const {data, error} = await readMomory({momory_uuid})
//     if(error){
//       return NextResponse.json({error: error.message}, {status: 500})
//     }
//     return NextResponse.json(data?.[0])
//    }
  
// 모모리 생성하는 POST 요청 핸들러
export async function POST(request:NextRequest) {
  // 요청본문에서 nickname, password를 가져옴
  const {nickname, password} = await request.json()
  // 요청헤더에서 미들웨어에서 넘겨준 페이로드 값들을 가져옴
  const middlewareData= JSON.parse(request.headers.get('x-middleware-data') as string)
  const {user_id, AccessTokenExp} = middlewareData
  const now = Math.floor(Date.now() / 1000);
  const maxAge = Math.max(AccessTokenExp - now, 0);
  // 모모리 생성 쿼리 호출
  const {data, error} = await createMomory({user_id, nickname, password})
  // 에러 발생 시 에러 메시지를 쿼리파라미터로 넘겨준 뒤 닉네임 설정페이지로 다시 리다이렉트
  if(error){
    return NextResponse.redirect(new URL(`/create-momory?error=${error.message}`, request.url))
  }
  // 모모리 생성 성공 시 생성된 모모리의 uuid를 가져옴
  const momory_uuid = data?.[0].uuid
  // 액세스 토큰의 페이로드에 momory_uuid를 추가하여 새로운 액세스 토큰 발급하여 리다이렉트
  const newAccessToken = await signAccessToken({user_id, momory_uuid})
  const response = NextResponse.redirect(new URL(`/momory/${momory_uuid}`, request.url))
  response.cookies.set("access_token", newAccessToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: maxAge,
  })
  return response
}

