import { deleteMemory, readMemory, uploadAndCreateMemory } from "@/backend/queries/memory";
import { NextRequest, NextResponse } from "next/server";

// 메모리 읽어오는 GET 요청 핸들러
export async function GET(request: NextRequest) {
  // 요청본문에서 momory_uuid, cursor를 가져옴
  const { momory_uuid, cursor } = await request.json();
  // 메모리 읽기 쿼리 호출
  const { data, error, count, nextCursor, prevCursor } = await readMemory({
    momory_uuid,
    cursor,
  });
  // 에러 발생 시 에러 메시지 및 500 상태코드 반환
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  // 성공 시 데이터, 카운트, 다음 커서, 이전 커서 반환
  return NextResponse.json({ data, count, nextCursor, prevCursor });
}

// 메모리 생성하는 POST 요청 핸들러
export async function POST(request: NextRequest) {
  // 요청본문에서 파일, momory_uuid, nickname, filter, message를 가져옴
  const formData = await request.formData();
  const formValues = { 
    file: formData.get("file") as File,
    momory_uuid: formData.get("momory_uuid") as string,
    nickname: formData.get("nickname") as string,
    filter: formData.get("filter") as string,
    message: formData.get("message") as string,
 };
  // 미들웨어에서 넘겨준 페이로드 값을 가져옴
  const middlewareData = JSON.parse(
    request.headers.get("x-middleware-data") as string,
  );
  const { user_id } = middlewareData;
  // 이미지 업로드 및 메모리 생성 쿼리 호출
  const {data, error} = await uploadAndCreateMemory({file: formValues.file, momory_uuid: formValues.momory_uuid, user_id, nickname: formValues.nickname, filter: formValues.filter, message: formValues.message})
  // 에러 발생 시 에러 메시지 및 500 상태코드 반환
  if(error){
    return NextResponse.json({error: error.message}, {status: 500})
  }
  // 성공 시 데이터 반환
  return NextResponse.json(data?.[0])
}

// 메모리 삭제하는 DELETE 요청 핸들러
export async function DELETE(request: NextRequest) {
  // 요청본문에서 memory_id, image_path를 가져옴   
  const { memory_id, image_path } = await request.json();
  // 메모리 삭제 쿼리 호출
  const { data, error } = await deleteMemory({ memory_id, image_path });
  // 에러 발생 시 에러 메시지 및 500 상태코드 반환
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  // 성공 시 성공했다는 문자열이 담긴 객체 데이터 반환
  return NextResponse.json(data?.[0]);
}
