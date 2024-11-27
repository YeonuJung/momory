import { readMomory } from "@/backend/queries/momory";
import { comparePassword} from "@/libs/bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const {uuid, momoryPassword}= await request.json();
    const {data, error} = await readMomory({momory_uuid: uuid});
    if(error){
        return NextResponse.json({error: error.message, message: "모모리 불러오기 실패"}, {status: 500});
    }
    const combinedPassword = momoryPassword.join("")
    const momoryPasswordFromDB = data?.[0].password
    if (!momoryPasswordFromDB) {
        return NextResponse.json({error: "Password not found", message: "모모리 불러오기 실패"}, {status: 500});
    }
    const isPasswordCorrect = await comparePassword(combinedPassword, momoryPasswordFromDB)
    return NextResponse.json({success: isPasswordCorrect}, {status: 200})
}