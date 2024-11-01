import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ message: "memory" }, { status: 200 });
  }
  