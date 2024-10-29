import { checkMomory } from "@/backend/query/momory";
import { verifyAccessToken } from "@/backend/utils/jwt-utils";
import { NextRequest, NextResponse } from "next/server";


export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const access_token = request.cookies.get("access_token");
  const refresh_token = request.cookies.get("refresh_token");
  // 홈 경로일 때
  if (pathname === "/") {
    // access_token이 없을 때
    if (!access_token) {
      return NextResponse.next();
    }
    const decoded = verifyAccessToken(access_token.value);
    // access_token이 유효할 때
    if (decoded && decoded.payload) {
      const userId = decoded.payload.id;
      const isUser = await checkMomory(userId);
      // DB 에러일 때
      if (isUser instanceof Error) {
        return NextResponse.json({ error: isUser.message }, { status: 500 });
      }
      // 모모리가 없을 때
      if (isUser.length === 0) {
        return NextResponse.redirect(new URL("/create-momory", request.url));
      }
      // 모모리가 있을 때
      if (isUser.length > 0) {
        return NextResponse.redirect(new URL("/momory", request.url));
      }
    }
    // access_token이 유효하지 않을 때
    return NextResponse.next();
  }
  // api 경로일 때
  if (/^\/api(?!\/(auth|refresh)).*$/.test(pathname)) {
    // access_token이 없을 때
    if (!access_token) {
      return NextResponse.redirect("/");
    }
    const decoded = verifyAccessToken(access_token.value);
    // access_token이 유효하지 않을 때
    if (decoded && decoded.ok === false) {
      // access_token이 만료됐을 때
      if (decoded.message === "jwt expired" && refresh_token) {
        // refresh_token으로 access_token 재발급
        const refreshResponse = await fetch("/api/v1/refresh", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${refresh_token.value}`,
            "Content-Type": "application/json",
          },
        });
        // refresh_token이 유효하지 않을 때
        if (!refreshResponse.ok) {
          return NextResponse.redirect(new URL("/", request.url));
        }
        // 새로 access_token을 발급받았을 때
        return NextResponse.next();
      }
      // access_token 만료 이외의 에러일 때
      return NextResponse.redirect(new URL("/", request.url));
    }
    // access_token이 유효할 때
    return NextResponse.next();
  }
}

export const config = {
  // auth와 refresh를 제외한 api와 홈 경로에 대해서만 미들웨어 적용
  matcher: ["/", /^\/api(?!\/(auth|refresh)).*$/],
};
