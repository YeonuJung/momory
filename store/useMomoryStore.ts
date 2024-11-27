import { create } from "zustand/react";
import { devtools } from "zustand/middleware";
import { MomoryState, MomoryStateSchema } from "@/types/store";

export const useMomoryStore = create<MomoryState>()(
  devtools((set, get) => ({
    momoryPassword: ["", "", "", ""],
    momoryNickname: "",
    currentAction: "create_nickname",
    setMomoryPassword: (newPassword: string[]) =>
      set({ momoryPassword: newPassword }),
    setMomoryNickname: (momoryNickname: string) => set({ momoryNickname }),
    setCurrentAction: (currentAction: string) => {
      const { momoryNickname, momoryPassword } = get();
      switch (currentAction) {
        case "create_password":
          const validateNicknameResult =
            MomoryStateSchema.shape.momoryNickname.safeParse(momoryNickname);
          if (!validateNicknameResult.success) {
            alert(validateNicknameResult.error.errors[0].message);
            return false;
          }
          set({ currentAction });
          return true;

        case "create_nickname":
          set({ currentAction });
          return true;

        case "submit":
          const validatePasswordResult =
            MomoryStateSchema.shape.momoryPassword.safeParse(momoryPassword);
          if (!validatePasswordResult.success) {
            alert(validatePasswordResult.error.errors[0].message);
            return false;
          }
          return true;
        case "enter_password":
          set({ currentAction });
          return true;
        case "view_momory_after_password":
          const validatePasswordResult2 =
            MomoryStateSchema.shape.momoryPassword.safeParse(momoryPassword);
          if (!validatePasswordResult2.success) {
            alert(validatePasswordResult2.error.errors[0].message);
            return false;
          }
          return true;
        case "view_momory":
          set({ currentAction });
          return true;
      }
      return false;
    },
    reset: (action: "create_nickname" | "enter_password") =>
      set({
        momoryPassword: ["", "", "", ""],
        momoryNickname: "",
        currentAction: action,
      }),
  })),
);
