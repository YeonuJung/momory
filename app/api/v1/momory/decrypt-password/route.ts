
import { decryptPassword } from "@/libs/crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const {momoryPassword}= await request.json();
    const decryptedPassword = decryptPassword(momoryPassword)
    return NextResponse.json({data: decryptedPassword}, {status: 200})
}