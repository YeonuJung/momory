import PageLayout from "@/components/layout/PageLayout";
import { readMomory } from "@/backend/queries/momory";
import { validateToken } from "@/utils/server/validateToken";
import { readMemory } from "@/backend/queries/memory";
import EnterMomoryPassword from "./_components/views/EnterMomoryPassword";
import MomoryContainer from "./_components/MomoryContainer";
import Momory from "./_components/views/Momory";

export default async function MomoryPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  // 파라미터 파싱 + 토큰 검증 및 유저 아이디 가져오기
  // 토큰이 없다면 로그인 시키기 위해 랜딩 페이지로 리다이렉트
  const [{ uuid }, { user_id, momory_uuid }] = await Promise.all([params, validateToken()]);

  // 모모리랑 메모리 데이터 가져오기
  const [readMomoryResult, readMemoryResult] = await Promise.all([
    readMomory({ momory_uuid: uuid }),
    readMemory({ momory_uuid: uuid }),
  ]);
  // 데이터 파싱
  const { data: readMomoryData, error: readMomoryError } = readMomoryResult;
  const { data: readMemoryData, error: readMemoryError } = readMemoryResult;
 
  if (readMomoryData && readMomoryData.length === 0) {
    return <div>존재하지 않는 모모리입니다.</div>;
  }

  // 서버 에러 발생 시 에러 메시지 출력
  if (readMomoryError || readMemoryError || readMomoryData === null) {
    return <div>서버에러입니다. 다시 시도해주세요</div>;
  }
  const momory_user_id = readMomoryData[0].user_id;

  return (
    <PageLayout verticalSpacing="gap-y-[5.6vw] xs:gap-y-[2.688rem]">
      {momory_user_id !== user_id ? (
        <MomoryContainer
          Momory={
            <Momory
              readMemoryData={readMemoryData}
              readMomoryData={readMomoryData}
              user_id={user_id}
              uuid={uuid}
              isOwner={false}
              hasMomory={momory_uuid? true : false}
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
              user_id={user_id}
              uuid={uuid}
              isOwner={true}
              hasMomory={momory_uuid? true : false}
            />
          }
        />
      )}
    </PageLayout>
  );
}
