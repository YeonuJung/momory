import MomoryImage from "./_components/MomoryImage";
import PageDots from "./_components/PageDots";
import PageLayout from "@/components/layout/PageLayout";
import ButtonContainer from "@/components/common/Button/ButtonContainer";
import { Button } from "@/components/common/Button/Button";
import HeaderTitle from "./_components/HeaderTitle";
import DecoratedHeader from "./_components/DecoratedHeader";
import HeaderSection from "./_components/sections/HeaderSection";
import ContentSection from "./_components/sections/ContentSection";
import NavigationArrow from "./_components/NavigationArrow";
import { readMomory } from "@/backend/queries/momory";
import { redirect } from "next/navigation";
import { validateToken } from "@/utils/server/validateToken";
import { readMemory } from "@/backend/queries/memory";
import MemoryModal from "./_components/MemoryModal";

export default async function MomoryPage({
  params,
}: {
  params: Promise<{ uuid: string }>;
}) {
  const [{ uuid }, user_id] = await Promise.all([params, validateToken()]);
  const [readMomoryResult, readMemoryResult] = await Promise.all([
    readMomory({ momory_uuid: uuid }),
    readMemory({ momory_uuid: uuid }),
  ]);
  const { data: readMomoryData, error: readMomoryError } = readMomoryResult;
  const { data: readMemoryData, error: readMemoryError } = readMemoryResult;

  if (readMomoryError || readMemoryError) {
    redirect(`/?error=server`);
  }

  return (
    <PageLayout verticalSpacing="gap-y-[5.6vw] xs:gap-y-[2.688rem]">
      <HeaderSection>
        <DecoratedHeader>
          {readMomoryData && readMomoryData.length > 0 ?  <HeaderTitle nickname={readMomoryData?.[0].nickname} /> : null }         
        </DecoratedHeader>
      </HeaderSection>
      <ContentSection>
        <MomoryImage memoryData={readMemoryData} />
        <PageDots />
      </ContentSection>
      <ButtonContainer>
        <Button>내 모모리 공유하기</Button>
        <Button>모모리 간직하기</Button>-
      </ButtonContainer>
      <NavigationArrow
        src="/image/arrow-left.svg"
        alt="왼쪽 화살표"
        direction="left"
      />
      <NavigationArrow
        src="/image/arrow-right.svg"
        alt="오른쪽 화살표"
        direction="right"
      />
      <MemoryModal/>
    </PageLayout>
  );
}
