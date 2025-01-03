import HeaderSection from "../sections/HeaderSection";
import DecoratedHeader from "../DecoratedHeader";
import { Button, ButtonWithCaption } from "@/components/common/Button/Button";
import ButtonContainer from "@/components/common/Button/ButtonContainer";
import ContentSection from "../sections/ContentSection";
import HeaderTitle from "../HeaderTitle";
import MemoryModal from "../MemoryModal";
import MomoryImage from "../MomoryImage";
import PageDots from "../PageDots";
import { MomoryProps } from "@/types/general";
import NavigationArrowWithPagination from "../NavigationArrowWithPagination";

export default async function Momory({
  readMomoryData,
  readMemoryData,
  memoryPublicUrlArray,
  uuid,
  momory_uuid,
  isOwner,
  hasNextPage,
  hasMomory,
  currentPage,
  totalCount,
  user_id,
  hasPostedMemory,
  isAuthenticated,
}: MomoryProps) {
  return (
    <>
      <HeaderSection>
        <DecoratedHeader>
          {readMomoryData && readMomoryData.length > 0 ? (
            <HeaderTitle nickname={readMomoryData[0].nickname} />
          ) : null}
        </DecoratedHeader>
      </HeaderSection>
      <ContentSection>
        <MomoryImage memoryData={readMemoryData} userId={user_id} uuid={uuid} memoryPublicUrlArray={memoryPublicUrlArray} momory_uuid={momory_uuid} />
        <PageDots totalCount={totalCount} currentPage={currentPage} />
      </ContentSection>
      <ButtonContainer>
        {isOwner ? (
          <Button password={readMomoryData[0].password} nickname={readMomoryData[0].nickname} action={"share_momory"} momory_uuid={momory_uuid}>내 모모리 공유하기</Button>
        ) : !hasPostedMemory? (
          <ButtonWithCaption
            caption={"*하나만 남길 수 있어요"}
            action="leave_memory"
            uuid={uuid}
            hasPostedMemory={hasPostedMemory}
            isAuthenticated={isAuthenticated}
          >
            사진 남기기
          </ButtonWithCaption>
        ) : null}
        {isOwner ? (
          null
        ) : hasMomory ? (
          <Button action="go_to_my_momory" momory_uuid={momory_uuid}>내 모모리로 가기</Button>
        ) : (
          <Button action="create_momory">내 모모리 만들기</Button>
        )}
      </ButtonContainer>
      <NavigationArrowWithPagination
        direction="left"
        src="/image/arrow-left.png"
        alt="왼쪽 화살표"
        momoryUuid={uuid}
        currentPage={currentPage}
        hasNextPage={hasNextPage}
      />
      <NavigationArrowWithPagination
        direction="right"
        src="/image/arrow-right.png"
        alt="오른쪽 화살표"
        momoryUuid={uuid}
        currentPage={currentPage}
        hasNextPage={hasNextPage}
      />
      <MemoryModal />
    </>
  );
}
