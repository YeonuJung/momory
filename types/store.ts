import { z } from "zod";

export const MomoryStateSchema = z.object({
    momoryPassword: z.array(z.string().trim().min(1, {message: "비밀번호 4자리를 모두 입력해주세요"})),
    momoryNickname: z.string().trim().min(1, {message: "닉네임을 입력해주세요"}).max(4, {message: "닉네임은 4글자 이내로 입력해주세요"}),
    currentAction: z.string(),
    setMomoryPassword: z.function().args(z.array(z.string()).length(4)).returns(z.void()),
    setMomoryNickname: z.function().args(z.string().max(4)).returns(z.void()),
    setCurrentAction: z.function().args(z.string()).returns(z.boolean()),
    reset: z.function().returns(z.void())
})

export type MomoryState = z.infer<typeof MomoryStateSchema>

export const OpenModalPropsSchema = z.object({
    memoryId: z.number().or(z.null()),
    message: z.string().min(1, {message: "메시지를 입력해주세요"}).max(50, {message: "메시지는 50자 이내로 입력해주세요"}),
    nickname: z.string().min(1, {message: "닉네임을 입력해주세요"}).max(4, {message: "닉네임은 4글자 이내로 입력해주세요"}).max(4, {message: "닉네임은 4글자 이내로 입력해주세요"}),
    imagePath: z.string(),
    filter: z.string(),
})
export const MomoryViewStateSchema = z.object({
    cursor: z.number().or(z.null()),
    isModalOpen: z.boolean(),
    modalData: OpenModalPropsSchema,
    setCursor: z.function().args(z.number().or(z.null())).returns(z.void()),
    openModal: z.function().args(OpenModalPropsSchema).returns(z.void()),
    closeModal: z.function().returns(z.void()),
})
export type OpenModalProps = z.infer<typeof OpenModalPropsSchema>
export type MomoryViewState = z.infer<typeof MomoryViewStateSchema>

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
    currentAction: string;
    setMemoryPhoto: (photo: File, previewUrl: string) => void;
    setMemoryFilter: (memoryFilter: string) => void;
    setMemoryNicknameAndMessage: (nickname: string, message: string) => void;
    setCurrentAction: (currentAction: string) => void;
}