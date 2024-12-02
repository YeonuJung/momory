import PageLayout from "@/components/layout/PageLayout";
import CreateMomoryContainer from "./_components/CreateMomoryContainer";
import CreateMomoryNickname from "./_components/views/CreateMomoryNickname";
import CreateMomoryPassword from "./_components/views/CreateMomoryPassword";
import { redirect } from "next/navigation";
import { validateToken } from "@/utils/server/validateToken";

export default async function CreateMomoryPage() {
  // 토큰 검증 및 모모리 uuid 가져오기(토큰이 없다면 랜딩 페이지로 리다이렉트)
  const tokenData = await validateToken()
  const { momory_uuid } = tokenData as {
    user_id: number;
    momory_uuid: string | undefined;
  }
  // 모모리가 존재한다면 해당 모모리로 리다이렉트
  if (momory_uuid) {
    redirect(`/momory/${momory_uuid}`);
    
  }
  // 모모리가 존재하지 않는다면 모모리 생성 페이지 렌더링
  return (
    <PageLayout>
      <CreateMomoryContainer
        CreateMomoryNickname={<CreateMomoryNickname />}
        CreateMomoryPassword={<CreateMomoryPassword />}
      />
    </PageLayout>
  );
}
