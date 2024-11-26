import PageLayout from "@/components/layout/PageLayout";
import CreateMomoryContainer from "./_components/CreateMomoryContainer";
import CreateMomoryNickname from "./_components/views/CreateMomoryNickname";
import CreateMomoryPassword from "./_components/views/CreateMomoryPassword";
import { checkMomory } from "@/backend/queries/momory";
import { redirect } from "next/navigation";
import { validateToken } from "@/utils/server/validateToken";

export default async function CreateMomoryPage() {
  const user_id = await validateToken()

  // 유저 아이디를 통해 모모리가 존재하는지 확인
  const { data, error } = await checkMomory({
    user_id: user_id
  });
  // 모모리를 불러오는데 실패했다면 로그인 페이지로 리다이렉트
  if (error) {
    redirect(`/?server_error=db_fetch_failed`);;
  }
  // 모모리가 존재한다면 해당 모모리로 리다이렉트
  if (data && data.length > 0) {
    redirect(`/momory/${data[0].uuid}`);
  }
  // 모모리가 존재하지 않는다면 모모리 생성 페이지 렌더링
  return (
    <PageLayout>
      <CreateMomoryContainer
        createMomoryNickname={<CreateMomoryNickname />}
        createMomoryPassword={<CreateMomoryPassword />}
      />
    </PageLayout>
  );
}
