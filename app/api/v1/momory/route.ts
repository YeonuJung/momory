import { createMomory } from "@/backend/queries/momory";
import { hashPassword } from "@/libs/bcrypt";
import { signAccessToken } from "@/libs/jwt";
import { NextRequest, NextResponse } from "next/server";

// 모모리 생성하는 POST 요청 핸들러
export async function POST(request: NextRequest) {
  // 요청본문에서 momoryNickname, momoryPassword를 가져옴
  const { momoryNickname, momoryPassword } = await request.json();
  // 요청헤더에서 미들웨어에서 넘겨준 페이로드 값들을 가져옴
  const middlewareData = JSON.parse(
    request.headers.get("x-middleware-data") as string,
  );
  const { user_id, AccessTokenExp } = middlewareData;
 

  const now = Math.floor(Date.now() / 1000);
  const maxAge = Math.max(AccessTokenExp - now, 0);
  // 본문에서 받은 비밀번호 해쉬화 및 모모리 생성 쿼리 호출
  const hashedPassword = await hashPassword(momoryPassword);
  const { data, error } = await createMomory({
    user_id,
    momoryNickname,
    hashedPassword,
  });
  // 에러 발생 시 에러 메시지를 반환하고 이를 클라이언트에서 받아서 리다이렉트
  if (error) {
    return NextResponse.json(
      { error: error.message, message: "모모리 생성 실패" },
      { status: 500 },
    );
  }
  // 모모리 생성 성공 시 생성된 모모리의 uuid를 가져옴
  const momory_uuid = data?.[0].uuid;
  // 액세스 토큰의 페이로드에 momory_uuid를 추가하여 새로운 액세스 토큰 발급
  // 성공 응답에 리다이렉트 url을 담아서 반환, 클라이언트에서 받아서 리다이렉트
  const newAccessToken = await signAccessToken({ user_id, momory_uuid });
  const response = NextResponse.json(
    {
      success: true,
      redirectUrl: `/momory/${momory_uuid}`,
      message: "모모리 생성 성공",
    },
    { status: 201 },
  );
  response.cookies.set("access_token", newAccessToken, {
    httpOnly: true,
    sameSite: "none",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: maxAge,
  });
  return response;
}

