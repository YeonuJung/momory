import PageLayout from "@/components/layout/PageLayout";
import UploadMemoryContainer from "./_components/UploadMemoryContainer";
import UploadMemoryPhoto from "./_components/views/UploadMemoryPhoto";
import SelectFilter from "./_components/views/SelectFilter";
import { validateToken } from "@/utils/server/validateToken";
import UploadMemoryCredential from "./_components/views/UploadMemoryCredential";

export default async function UploadMemoryPage({
  params,
}: {
  params: { uuid: string };
}) {
  const { uuid } = params;
  // 토큰 검증 및 액세스 토큰 만료의 경우 리프레쉬 토큰으로 액세스 토큰 재발급까지 처리
  await validateToken({ momory_uuid: uuid });

  return (
    <PageLayout>
      <UploadMemoryContainer
        UploadMemoryPhoto={<UploadMemoryPhoto />}
        SelectFilter={<SelectFilter />}
        UploadMemoryCredential={<UploadMemoryCredential />}
      />
    </PageLayout>
  );
}
