import { NextResponse } from "next/server";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI as string;

export async function GET() {
  return NextResponse.redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email%20profile`,
  );
}
