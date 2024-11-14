import { verifyAccessToken } from "@/libs/jwt";
import { NextRequest, NextResponse } from "next/server";

// api 요청시 토큰 검증 미들웨어
export async function middleware(request: NextRequest) {
  const access_token = request.cookies.get("access_token");
  const pathname = request.nextUrl.pathname;
  // 모모리 또는 메모리 관련 api 경로일 때
  if (
    pathname.includes("/api/v1/memory") ||
    pathname.includes("/api/v1/momory")
  ) {
    // access_token이 없을 때
    if (!access_token) {
      return NextResponse.json(
        { error: "access_token not found" },
        { status: 401 },
      );
    }
    // access_token이 있을 때
    const decoded = await verifyAccessToken(access_token.value);
    // access_token이 유효하지 않을 때
    if (decoded && decoded.ok === false) {
      // access_token이 만료됐을 때
      if (decoded.error === "ERR_JWT_EXPIRED") {
        return NextResponse.json(
          { error: "access_token expired" },
          { status: 401 },
        );
      }
      // access_token 만료 이외의 에러일 때
      return NextResponse.json(
        { error: "invalid access_token" },
        { status: 401 },
      );
    }
    // access_token이 유효할 때
    const response = NextResponse.next();
        response.headers.set(
      "x-middleware-data",
      JSON.stringify({
        userId: decoded.payload?.id,
      }),
    );
    return response;
  }
  // 모모리 또는 메모리 관련 api 경로가 아닐 때(소셜로그인, 리프레쉬 토큰 발급)
  return NextResponse.next();
}

export const config = {
  // auth와 refresh를 제외한 api 경로에만 미들웨어 적용
  matcher: ["/api/:path*"],
};
