import { z } from "zod";

export const MomoryStateSchema = z.object({
  momoryPassword: z.array(
    z.string().trim().min(1, { message: "비밀번호 4자리를 모두 입력해주세요" }),
  ),
  momoryNickname: z
    .string()
    .trim()
    .min(1, { message: "닉네임을 입력해주세요" })
    .max(5, { message: "닉네임은 5글자 이내로 입력해주세요" }),
  currentAction: z.string(),
  setMomoryPassword: z
    .function()
    .args(z.array(z.string()).length(4))
    .returns(z.void()),
  setMomoryNickname: z.function().args(z.string().max(4)).returns(z.void()),
  setCurrentAction: z.function().args(z.string()).returns(z.boolean()),
  reset: z
    .function()
    .args(z.union([z.literal("create_nickname"), z.literal("enter_password")]))
    .returns(z.void()),
  resetMomoryPassword: z.function().returns(z.void()),
});

export type MomoryState = z.infer<typeof MomoryStateSchema>;

export const OpenModalPropsSchema = z.object({
  memoryId: z.number().optional(),
  message: z
    .string()
    .min(1, { message: "메시지를 입력해주세요" })
    .refine(value => Array.from(value).length <= 50, { 
      message: "메시지는 50자 이내로 입력해주세요" 
    })
    .optional(),
  nickname: z
    .string()
    .min(1, { message: "닉네임을 입력해주세요" })
    .refine(value => Array.from(value).length <= 5, { 
      message: "닉네임은 5글자 이내로 입력해주세요" 
    })
    .optional(),
  imagePath: z.string().optional(),
  filter: z.string().optional(),
  memory_user_id: z.number().optional(),
  logined_user_id: z.number().optional(),
  memory_momory_uuid: z.string().optional(),
  momory_uuid: z.string().optional(),
  user_momory_uuid: z.string().optional(),
});
export const MomoryViewStateSchema = z.object({
  isModalOpen: z.boolean(),
  modalData: OpenModalPropsSchema,
  openModal: z.function().args(OpenModalPropsSchema).returns(z.void()),
  closeModal: z.function().returns(z.void()),
});
export type OpenModalProps = z.infer<typeof OpenModalPropsSchema>;
export type MomoryViewState = z.infer<typeof MomoryViewStateSchema>;

export const MemoryStateSchema = z.object({
  memoryPhoto: z.object({
    photo: z
      .instanceof(File, { message: "사진을 업로드해주세요" })
      .refine((file) => {
        return (
          file.size <= 1024 * 1024 * 20, "20MB 이하의 사진을 업로드해주세요"
        );
      })
      .optional()
      .superRefine((file, ctx) => {
        if (file === undefined) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "사진을 업로드해주세요",
          });
        }
      }),
    previewUrl: z.string(),
  }),
  memoryFilter: z.string().min(1, { message: "필터를 선택해주세요" }),
  memoryCredential: z.object({
    memoryNickname: z
      .string()
      .min(1, { message: "닉네임을 입력해주세요" })
      .refine(value => Array.from(value).length <= 5, { 
        message: "닉네임은 5글자 이내로 입력해주세요" 
      }),
      memoryMessage: z
      .string()
      .min(1, { message: "메시지를 입력해주세요" })
      .refine(value => Array.from(value).length <= 50, { 
        message: "메시지는 50자 이내로 입력해주세요" 
      })
    }),
  currentAction: z.string(),
  setMemoryPhoto: z.function().args(z.instanceof(File)).returns(z.void()),
  setMemoryPhotoPreviewUrl: z.function().args(z.string()).returns(z.void()),
  setMemoryFilter: z.function().args(z.string()).returns(z.void()),
  setMemoryNickname: z.function().args(z.string()).returns(z.void()),
  setMemoryMessage: z.function().args(z.string()).returns(z.void()),
  setCurrentAction: z.function().args(z.string()).returns(z.boolean()),
  resetMemoryPhoto: z.function().returns(z.void()),
  resetFilter: z.function().returns(z.void()),
  resetCredential: z.function().returns(z.void()),
  resetAll: z.function().returns(z.void()),
});
export type MemoryState = z.infer<typeof MemoryStateSchema>;
