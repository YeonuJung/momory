import { signAccessToken, verifyRefreshToken } from "@/backend/utils/jwt-utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // 리프레쉬 토큰 추출
  const refresh_token = request.headers.get("Authorization")?.slice(7);
  // 리프레쉬 토큰이 없을 때(쿠키에서 삭제됐거나 없을 때)
  if (!refresh_token) {
    return NextResponse.json({ error: "Please login again" }, { status: 401 });
  }
  const decoded = await verifyRefreshToken(refresh_token);

  // 리프레쉬 토큰이 유효하지 않을 때
  if (decoded && decoded.ok) {
    // 리프레쉬 토큰이 만료됐을 때
    if (decoded.error === "ERR_JWT_EXPIRED") {
      return NextResponse.json(
        { error: "refresh_token expired" },
        { status: 401 },
      );
    }
    // 리프레쉬 토큰 만료 이외의 에러일 때
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
  // 리프레쉬 토큰이 유효할 때
  if (decoded && decoded.ok && decoded.payload && decoded.payload.exp) {
    // 액세스 토큰 재발급
    const new_access_token = await signAccessToken(
      decoded.payload.id as number,
    );
    const now = Math.floor(Date.now() / 1000);
    const maxAge = Math.max(decoded.payload.exp - now, 0);
    const response = NextResponse.json(
      { message: "access_token refreshed successfully" },
      { status: 200 },
    );
    response.cookies.set("access_token", new_access_token, {
      httpOnly: false,
      maxAge: maxAge,
    });
    return response;
  }
  console.error("Unexpected error during token validation", decoded);
}
