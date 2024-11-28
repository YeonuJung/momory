import { signAccessToken, verifyRefreshToken } from "@/libs/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // 리프레쉬 토큰 추출
  const refresh_token = request.cookies.get("refresh_token");
  // 리프레쉬 토큰이 없을 때(쿠키에서 삭제됐거나 없을 때)
  if (!refresh_token) {
    const response = NextResponse.json(
      { error: "Please login again" },
      { status: 401 },
    );
    response.cookies.delete("access_token");
    return response;
  }
  const decoded = await verifyRefreshToken(refresh_token.value);

  // 리프레쉬 토큰이 유효하지 않을 때
  if (decoded && !decoded.ok) {
    // 리프레쉬 토큰이 만료됐을 때
    if (decoded.error === "ERR_JWT_EXPIRED") {
      const response = NextResponse.json(
        { error: "refresh_token expired" },
        { status: 401 },
      );
      response.cookies.delete("access_token");
      response.cookies.delete("refresh_token");
      return response;
    }
    // 리프레쉬 토큰 만료 이외의 에러일 때
    const response = NextResponse.json(
      { error: "Invalid token" },
      { status: 401 },
    );
    response.cookies.delete("access_token");
    response.cookies.delete("refresh_token");
    return response;
  }
  // 리프레쉬 토큰이 유효할 때
  if (
    decoded &&
    decoded.ok &&
    decoded.payload &&
    decoded.payload.exp 
  ) {
    // 액세스 토큰 재발급
    const new_access_token = await signAccessToken({
      user_id: decoded.payload.user_id as number,
      momory_uuid: decoded.payload.momory_uuid? decoded.payload.momory_uuid as string : undefined,
    });
    const now = Math.floor(Date.now() / 1000);
    const maxAge = Math.max(decoded.payload.exp - now, 0);
    const response = NextResponse.json(
      {
        message: "access_token refreshed successfully",
        access_token: new_access_token,
      },
      { status: 200 },
    );
    response.cookies.set("access_token", new_access_token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: maxAge,
    });
    return response;
  }
  // 예상치 못한 에러 발생 시
  const response = NextResponse.json({
    error: "Unexpected error during token validation",
    status: 401,
  });
  response.cookies.delete("access_token");
  response.cookies.delete("refresh_token");
  return response;
}
