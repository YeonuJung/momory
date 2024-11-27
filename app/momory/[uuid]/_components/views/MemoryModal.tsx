"use client";

import { Button } from "@/components/common/Button/Button";
import ButtonContainer from "@/components/common/Button/ButtonContainer";
import ImageDetail from "@/components/common/Modal/ImageDetail";
import ModalContainer from "@/components/common/Modal/ModalContainer";
import { useMomoryViewStore } from "@/store/useMomoryViewStore";

export default function MemoryModal() {
  const isModalOpen = useMomoryViewStore((state) => state.isModalOpen);
  return (
    <>
      {isModalOpen && (
        <ModalContainer verticalSpacing="gap-y-[2rem]">
          <ImageDetail />
          <ButtonContainer>
            <Button>삭제</Button>
            <Button>기억 간직하기</Button>
          </ButtonContainer>
        </ModalContainer>
      )}
    </>
  );
}
