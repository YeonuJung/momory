"use client"
import { create } from "zustand/react";
import { devtools } from "zustand/middleware";
import { MemoryState } from "@/types/store";

export const useMemoryStore = create<MemoryState>()(devtools((set) => ({
    // 수정 필요
    memoryPhoto: {photo: null as File | null, previewUrl: ""},
    memoryFilter: "",
    memoryNicknameAndMessage: {
        nickname: "",
        message: ""
    },
    currentAction: "upload_photo",
    setMemoryPhoto: (photo, previewUrl) => set({ memoryPhoto: {photo, previewUrl} }),
    setMemoryFilter: (memoryFilter) => set({ memoryFilter }),
    setMemoryNicknameAndMessage: (nickname, message) => set({ memoryNicknameAndMessage: { nickname, message } }),
    setCurrentAction: (currentAction: string) => set({currentAction})
})))