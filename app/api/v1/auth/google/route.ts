import { verifyAccessToken } from "@/backend/utils/jwt-utils";
import { NextRequest, NextResponse } from "next/server";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI as string;

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get("access_token")?.value;
  if (accessToken) {
    const { payload, ok } = await verifyAccessToken(accessToken);
    if (ok === false) {
      const response = NextResponse.redirect(
        `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile`,
      );
      response.cookies.delete("access_token");
      response.cookies.delete("refresh_token");
      return response;
    }
    if (payload && payload.momory_uuid) {
      return NextResponse.redirect(new URL("/momory", request.url));
    }
    return NextResponse.redirect(new URL("/create-momory", request.url));
  }
  return NextResponse.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile`,
  );
}
