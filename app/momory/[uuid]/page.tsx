import PageLayout from "@/components/layout/PageLayout";
import { readMomory } from "@/backend/queries/momory";
import { validateToken } from "@/utils/server/validateToken";
import { checkUserMemoryExists, readMemory } from "@/backend/queries/memory";
import EnterMomoryPassword from "./_components/views/EnterMomoryPassword";
import MomoryContainer from "./_components/MomoryContainer";
import Momory from "./_components/views/Momory";

export default async function MomoryPage({
  params, searchParams
}: {
  params: Promise<{ uuid: string }>, 
  searchParams: { page?: string }
}) {
  // 동적 라우트 파라미터로 받은 uuid를 가져옴
  const {uuid} = await params;
  
  // 토큰 검증(내부적으로 리다이렉트 처리)
  const tokenData = await validateToken({ momory_uuid: uuid });
  
  // 토큰 데이터에서 user_id, momory_uuid 추출
  // momory_uuid는 없을 수 있음
  const { user_id, momory_uuid } = tokenData as {
    user_id: number;
    momory_uuid: string | undefined;
  }

  // 페이지네이션을 위한 쿼리스트링 파싱
  const {page = "1"} = searchParams;
  // 현재 페이지
  const currentPage = parseInt(page, 10);
  
  // 모모리 데이터와 커서 기반 메모리 데이터를 함께 가져오기
  const [readMomoryResult, readMemoryResult, {exists: hasPostedMemory, error: checkMemoryError}] = await Promise.all([
    readMomory({ momory_uuid: uuid }), 
    readMemory({ 
      momory_uuid: uuid,
      currentPage: currentPage
    }),
    checkUserMemoryExists({ momory_uuid: uuid, user_id: user_id })
  ]);

  // 데이터 파싱
  const { data: readMomoryData, error: readMomoryError } = readMomoryResult;
  const { 
    data: readMemoryData, 
    error: readMemoryError,
    count
  } = readMemoryResult;
  // 서버 에러일 때
  if (readMomoryError || readMemoryError || checkMemoryError) {
    return <div>서버에러입니다. 다시 시도해주세요</div>;
  }
// 존재하지 않는 모모리일 때
if (!readMomoryData || readMomoryData.length === 0) {
  return <div>존재하지 않는 모모리입니다.</div>;
}
  const momory_user_id = readMomoryData[0]?.user_id;
  const memoryPublicUrlArray = readMemoryData.length > 0 
    ? readMemoryData.map((memories) => `${process.env.SUPABASE_PUBLIC_URL}/${memories.image_path}`)
    : [];
 
  return (
    <PageLayout verticalSpacing="gap-y-[5.6vw] xs:gap-y-[2.42rem]">
      {momory_user_id !== user_id ? (
        <MomoryContainer
          Momory={
            <Momory
              readMemoryData={readMemoryData}
              readMomoryData={readMomoryData}
              memoryPublicUrlArray={memoryPublicUrlArray}
              uuid={uuid}
              momory_uuid={momory_uuid}
              isOwner={false}
              hasMomory={momory_uuid? true : false}
              currentPage={currentPage}
              totalCount={count}
              user_id={user_id}
              hasPostedMemory={hasPostedMemory}
            />
          }
          EnterMomoryPassword={<EnterMomoryPassword />}
        />
      ) : (
        <MomoryContainer
          Momory={
            <Momory
              readMemoryData={readMemoryData}
              readMomoryData={readMomoryData}
              memoryPublicUrlArray={memoryPublicUrlArray}
              uuid={uuid}
              momory_uuid={momory_uuid}
              isOwner={true}
              hasMomory={momory_uuid? true : false}
              currentPage={parseInt(page)}
              totalCount={count}
              user_id={user_id}
              hasPostedMemory={hasPostedMemory}
            />
          }
        />
      )}
    </PageLayout>
  );
}