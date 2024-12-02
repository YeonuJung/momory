"use client";

import { Button } from "@/components/common/Button/Button";
import ButtonContainer from "@/components/common/Button/ButtonContainer";
import ImageDetail from "@/components/common/Modal/ImageDetail";
import ModalContainer from "@/components/common/Modal/ModalContainer";
import { useMomoryViewStore } from "@/store/useMomoryViewStore";
export default function MemoryModal() {
  const isModalOpen = useMomoryViewStore((state) => state.isModalOpen);
  const memoryId = useMomoryViewStore((state) => state.modalData.memoryId);
  const image_path = useMomoryViewStore((state) => state.modalData.imagePath);
 
  return (
    <>
      {isModalOpen && (
        <ModalContainer verticalSpacing="gap-y-[2rem]">
            <ImageDetail />
          <ButtonContainer>
            <Button
              action="delete_memory"
              memoryId={memoryId}
              image_path={image_path}
            >
              삭제
            </Button>
            <Button
              action="save_memory"
            >
              기억 간직하기
            </Button>
          </ButtonContainer>
        </ModalContainer>
      )}
    </>
  );
}
