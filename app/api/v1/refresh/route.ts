import { signAccessToken, verifyRefreshToken } from "@/backend/utils/jwt-utils";
import { NextRequest, NextResponse } from "next/server";

export function POST(request: NextRequest) {
  // 리프레쉬 토큰 추출
  const refresh_token = request.headers.get("Authorization")?.slice(7);
  // 리프레쉬 토큰이 없을 때
  if (!refresh_token) {
    return NextResponse.json(
      { error: "refresh_token is required" },
      { status: 401 },
    );
  }
  const decoded = verifyRefreshToken(refresh_token);
  if (decoded) {
    // 리프레쉬 토큰이 유효하지 않을 때
    if(!decoded.ok){
        // 리프레쉬 토큰이 만료됐을 때
        if(decoded.message === "jwt expired"){
            return NextResponse.json({ error: "refresh_token expired" }, { status: 401 });
        }

        return NextResponse.json(
            { error: "Invalid token" },
            { status: 401 },
        );
    }
    // 리프레쉬 토큰이 유효할 때
    if (decoded.ok && decoded.payload) {
      // 액세스 토큰 재발급
      const new_access_token = signAccessToken(decoded.payload.id);
      const response = NextResponse.json(
        { message: "access_token refreshed successfully" },
        { status: 200 },
      );
      response.cookies.set("access_token", new_access_token, {
        httpOnly: false,
      });
      return response;
    }
  }
}
