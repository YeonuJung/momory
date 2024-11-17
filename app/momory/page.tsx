import MomoryImage from "../../components/common/MomoryImage";
import PageDots from "../../components/common/PageDots";
import PageLayout from "@/components/layout/PageLayout";
// import ModalContainer from "@/components/common/Modal/ModalContainer";
// import ImageDetail from "../../components/common/Modal/ImageDetail";
import ButtonContainer from "@/components/common/Button/ButtonContainer";
import { Button } from "@/components/common/Button/Button";
import HeaderTitle from "./_components/HeaderTitle";
import DecoratedHeader from "./_components/DecoratedHeader";
import HeaderSection from "./_components/sections/HeaderSection";
import ContentSection from "./_components/sections/ContentSection";
import NavigationArrow from "./_components/NavigationArrow";

export default function Momory_page() {
  return (
    <PageLayout verticalSpacing="gap-y-[5.6vw] xs:gap-y-[2.688rem]">
      <HeaderSection>
        <DecoratedHeader>
          <HeaderTitle nickname="생피에르" />
        </DecoratedHeader>
      </HeaderSection>
      <ContentSection>
        <MomoryImage />
        <PageDots />
      </ContentSection>
      <ButtonContainer>
        <Button>내 모모리 공유하기</Button>
        <Button>모모리 간직하기</Button>
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
      {/* <ModalContainer verticalSpacing="gap-y-[2rem]">
        <ImageDetail />
        <ButtonContainer>
          <Button>삭제</Button>
          <Button>기억 간직하기</Button>
        </ButtonContainer>
      </ModalContainer> */}
        {/* 모모리 오너만 삭제버튼있고 보는 사람들은 기억 간직하기만 있도록 */}
    </PageLayout>
  );
}
