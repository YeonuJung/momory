import { create } from "zustand/react"
import { devtools } from "zustand/middleware"
import { MomoryState } from "@/types/store"


export const useMomoryStore = create<MomoryState>()(devtools((set) => ({
    momoryPassword: ['', '', '', ''],
    momoryNickname: '',
    currentPage: "create_nickname",
    setMomoryPassword: (newPassword: string[]) => set({momoryPassword: newPassword}),
    setMomoryNickname: (momoryNickname: string) => set({momoryNickname}),
    setCurrentPage: (currentPage: string) => set({currentPage})
})))
