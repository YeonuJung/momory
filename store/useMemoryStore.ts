import { create } from "zustand/react";
import { devtools } from "zustand/middleware";
import { MemoryState } from "@/types/store";

export const useMemoryStore = create<MemoryState>()(devtools((set) => ({
    memoryPhoto: {photo: null, previewUrl: ""},
    memoryFilter: "",
    memoryNicknameAndMessage: {
        nickname: "",
        message: ""
    },
    currentPage: "upload_photo",
    setMemoryPhoto: (photo, previewUrl) => set({ memoryPhoto: {photo, previewUrl} }),
    setMemoryFilter: (memoryFilter) => set({ memoryFilter }),
    setMemoryNicknameAndMessage: (nickname, message) => set({ memoryNicknameAndMessage: { nickname, message } }),
    setCurrentPage: (currentPage: string) => set({currentPage})
})))