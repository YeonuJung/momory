import React from "react";
import HeaderSection from "../sections/HeaderSection";
import DecoratedHeader from "./DecoratedHeader";
import { Button, ButtonWithCaption } from "@/components/common/Button/Button";
import ButtonContainer from "@/components/common/Button/ButtonContainer";
import ContentSection from "../sections/ContentSection";
import HeaderTitle from "./HeaderTitle";
import MemoryModal from "./MemoryModal";
import MomoryImage from "./MomoryImage";
import NavigationArrow from "./NavigationArrow";
import PageDots from "./PageDots";
import { MomoryProps } from "@/types/general";

export default function Momory({
  readMomoryData,
  readMemoryData,
  user_id,
  uuid,
  isOwner,
  hasMomory,
}: MomoryProps) {
  return (
    <>
      <HeaderSection>
        <DecoratedHeader>
          {readMomoryData && readMomoryData.length > 0 ? (
            <HeaderTitle nickname={readMomoryData?.[0].nickname} />
          ) : null}
        </DecoratedHeader>
      </HeaderSection>
      <ContentSection>
        <MomoryImage memoryData={readMemoryData} userId={user_id} uuid={uuid} />
        <PageDots />
      </ContentSection>
      <ButtonContainer>
        {isOwner ? (
          <Button action={"share_momory"}>내 모모리 공유하기</Button>
        ) : (
          <ButtonWithCaption
            caption={"*하나만 남길 수 있어요"}
            action="leave_memory"
          >
            사진 남기기
          </ButtonWithCaption>
        )}
        {isOwner ? (
          <Button action={"save_momory"}>모모리 간직하기</Button>
        ) : hasMomory ? (
          <Button action="go_to_my_momory">내 모모리로 가기</Button>
        ) : (
          <Button action="create_momory">내 모모리 만들기</Button>
        )}
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
      <MemoryModal />
    </>
  );
}
