import { verifyAccessToken } from "@/backend/utils/jwt-utils";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const access_token = request.cookies.get("access_token");
  const pathname = request.nextUrl.pathname;
  // // 홈 경로일 때
  // if (pathname === "/") {
  //   console.log("middleware", "홈 경로");
  //   const decoded = await verifyAccessToken(access_token!.value);
  //   console.log("middleware", "decoded", decoded);
  //   // access_token이 유효할 때
  //   if (decoded && decoded.ok && decoded.payload) {
  //     console.log("middleware", "access_token 유효함");
  //     const userId = decoded.payload.id;
  //     const isUser = await checkMomory(userId as number);
  //     // DB 에러일 때
  //     if (isUser instanceof Error) {
  //       console.log("middleware", "DB 에러");
  //       return NextResponse.json({ error: isUser.message }, { status: 500 });
  //     }
  //     // 모모리가 없을 때
  //     if (isUser.length === 0) {
  //       console.log("middleware", "모모리 없음");
  //       return NextResponse.redirect(new URL("/create-momory", request.url));
  //     }
  //     // 모모리가 있을 때
  //     if (isUser.length > 0) {
  //       console.log("middleware", "모모리 있음");
  //       return NextResponse.redirect(new URL("/momory", request.url));
  //     }
  //   }
  //   // access_token이 유효하지 않을 때
  //   console.log("middleware", "access_token 유효하지 않음");
  //   if (decoded && decoded.ok === false) {
  //     // access_token이 만료됐을 때
  //     if (decoded.error === "ERR_JWT_EXPIRED") {
  //       // refresh_token으로 access_token 재발급
  //       const refreshResponse = await fetch("/api/v1/refresh", {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${refresh_token?.value}`,
  //         },
  //       });
  //       // access_token 발급 실패일 때
  //       if (!refreshResponse.ok) {
  //         const response = NextResponse.redirect(new URL("/", request.url));
  //         response.cookies.delete("access_token");
  //         response.cookies.delete("refresh_token");
  //         return response;
  //       }
  //       // 새로 access_token을 성공적으로 발급받았을 때
  //       return NextResponse.redirect(new URL("/"));
  //     }
  //     // access_token 만료 이외의 에러일 때
  //     const response = NextResponse.redirect(new URL("/", request.url));
  //     response.cookies.delete("access_token");
  //     response.cookies.delete("refresh_token");
  //     return response;
  //   }
  //   const response = NextResponse.next();
  //   response.cookies.delete("access_token");
  //   response.cookies.delete("refresh_token");
  //   return response;
  // }
  // api 경로일 때

  // access_token이 없을 때
  if (pathname.includes("/api/v1/memory") || pathname.includes("/api/v1/momory")) {
    if (!access_token) {
      return NextResponse.json({ error: "access_token not found" }, { status: 401 });
    }
    const decoded = await verifyAccessToken(access_token.value);
    // access_token이 유효하지 않을 때
    if (decoded && decoded.ok === false) {
      // access_token이 만료됐을 때
      if (decoded.error === "ERR_JWT_EXPIRED") {
        return NextResponse.json({ error: "access_token expired" }, { status: 401 });
      }
      // access_token 만료 이외의 에러일 때
      return NextResponse.json({ error: "invalid access_token" }, { status: 401 });
    }
  // access_token이 유효할 때
    const response = NextResponse.next();
    response.headers.set('x-middleware-data', JSON.stringify({ 
    userId: decoded.payload?.id
  }))
  return response;
  }
 return NextResponse.next();
}

export const config = {
  // auth와 refresh를 제외한 api 경로에만 미들웨어 적용
  // 정규표현식 적용이 잘 안돼서 일단 이렇게 처리
  matcher: ["/api/:path*"]
  
};
