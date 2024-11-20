import { create } from "zustand/react"
import { devtools } from "zustand/middleware"

interface MomoryState {
    momoryPassword: string[]
    momoryNickname: string
    currentPage: string
    setMomoryPassword: (newPassword: string[]) => void
    setMomoryNickname: (momoryNickname: string) => void
    setCurrentPage: (currentPage: string) => void
}
export const useMomoryStore = create<MomoryState>()(devtools((set) => ({
    momoryPassword: ['', '', '', ''],
    momoryNickname: '',
    currentPage: "nickname",
    setMomoryPassword: (newPassword: string[]) => set({momoryPassword: newPassword}),
    setMomoryNickname: (momoryNickname: string) => set({momoryNickname}),
    setCurrentPage: (currentPage: string) => set({currentPage})
})))
