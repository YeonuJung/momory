"use client"
import {
  MomoryViewState,
  OpenModalProps,
  OpenModalPropsSchema,
} from "@/types/store";
import { create } from "zustand/react";

export const useMomoryViewStore = create<MomoryViewState>((set) => ({
  isModalOpen: false,
  modalData: {
    memoryId: undefined,
    message: undefined,
    nickname: undefined,
    imagePath: undefined,
    filter: undefined,
    memory_user_id: undefined,
    logined_user_id: undefined,
    memory_momory_uuid: undefined,
    momory_uuid: undefined,
  },
  openModal: (props: OpenModalProps) => {
    const validateOpenModalProps = OpenModalPropsSchema.safeParse(props);
    if (!validateOpenModalProps.success) {
      return;
    }
    const isMomoryOwner = props.memory_momory_uuid === props.momory_uuid;
    const isMemoryOwner = props.memory_user_id === props.logined_user_id;
   
    if(!isMomoryOwner || !isMemoryOwner){
        alert("이 메모리에 대한 접근 권한이 없습니다")
        return;
    }
    set({ isModalOpen: true, modalData: props });
  },
  closeModal: () => set({ isModalOpen: false }),
}));
