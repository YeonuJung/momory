"use client";
import {
  MomoryViewState,
  OpenModalProps,
  OpenModalPropsSchema,
} from "@/types/store";
import toast from "react-hot-toast";
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
    user_momory_uuid: undefined,
  },
  openModal: (props: OpenModalProps) => {
    console.log('modal props: ', props)
    const validateOpenModalProps = OpenModalPropsSchema.safeParse(props);
    console.log('Validation Result:', validateOpenModalProps);
    if (!validateOpenModalProps.success) {
      console.log('Validation Error:', validateOpenModalProps.error); 
      return;
    }
    
    const isMomoryOwner = props.user_momory_uuid === props.momory_uuid;
    const isMemoryOwner = props.memory_user_id === props.logined_user_id;
   
    if (isMomoryOwner || isMemoryOwner) {
      set({ isModalOpen: true, modalData: props });
    } else {
      toast.error("이 사진에 대한 접근 권한이 없습니다🥲", {
        style: {
          height: "65px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "gray",
          textAlign: "center",
        }, duration: 2000
      });
      return;
    }
  },
  closeModal: () => set({ isModalOpen: false }),
}));
