
export interface MomoryState {
    momoryPassword: string[]
    momoryNickname: string
    currentPage: string
    setMomoryPassword: (newPassword: string[]) => void
    setMomoryNickname: (momoryNickname: string) => void
    setCurrentPage: (currentPage: string) => void
}

type MemoryNicknameAndMessage= {
    nickname: string;
    message: string;
}
type MemoryPhoto = {
    photo: File | null;
    previewUrl: string;
}
export interface MemoryState {
    memoryPhoto: MemoryPhoto;
    memoryFilter: string;
    memoryNicknameAndMessage: MemoryNicknameAndMessage;
    currentPage: string;
    setMemoryPhoto: (photo: File, previewUrl: string) => void;
    setMemoryFilter: (memoryFilter: string) => void;
    setMemoryNicknameAndMessage: (nickname: string, message: string) => void;
    setCurrentPage: (currentPage: string) => void;
}