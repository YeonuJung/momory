import { MomoryViewState, OpenModalProps } from "@/types/store";
import { create } from "zustand/react";


export const useMomoryViewStore = create<MomoryViewState>((set) => ({
    cursor: null,
    isModalOpen: false,
    modalData: {
        memoryId: null,
        message: "",
        nickname: "",
        imagePath: "",
        filter: "",
    },
    setCursor: (cursor: number | null) => set({cursor}),
    openModal: (props: OpenModalProps) => {
        set({isModalOpen: true, modalData: props});},
    closeModal: () => set({isModalOpen: false}),
}))