import { ErrorCode, ErrorType } from "@/types/error"
import { NextRequest, NextResponse } from "next/server"

// 소셜로그인시 에러별로 타입과 코드를 쿼리파라미터에 셋해서 홈으로 리다이렉트 시키는 함수
export function redirectWithError(request: NextRequest, errorType: ErrorType, errorCode: ErrorCode) {
    const url = new URL("/", request.url);
    const redirectUri = request.nextUrl.searchParams.get("redirect_uri");
    
    url.searchParams.set("error", errorType);
    url.searchParams.set("code", errorCode);
    // redirectUri가 존재한다면 리다이렉트 uri를 쿼리파라미터로 셋
    if(redirectUri) {
        url.searchParams.set("redirect_uri", redirectUri);
    }
    
    return NextResponse.redirect(url);

  }