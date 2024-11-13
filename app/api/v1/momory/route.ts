import { signAccessToken } from "@/libs/jwt";
import {NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "memory" }, { status: 200 });
  }

export async function POST(response: NextResponse) {
  //닉네임이랑 비밀번호 받아서 DB에 저장 후 response로 id 받아오기
  const user_id= JSON.parse(response.headers.get('x-middleware-data') as string).userId
  const momory_uuid = "모모리 아이디"
 const newAccessToken = await signAccessToken({user_id, momory_uuid})
 response.cookies.set("access_token", newAccessToken)
 return response
}

