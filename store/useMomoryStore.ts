"use client"
import { create } from "zustand/react";
import { MomoryState, MomoryStateSchema } from "@/types/store";
import toast from "react-hot-toast";

export const useMomoryStore = create<MomoryState>()(
  (set, get) => ({
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
            toast.error(validateNicknameResult.error.errors[0].message, {
              duration: 2000,
              style: {
                  height: "65px",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "gray",
                  textAlign: "center",
              },
            });
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
            toast.error(validatePasswordResult.error.errors[0].message, {
              duration: 2000,
              style: {
                  height: "65px",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "gray",
                  textAlign: "center",
              },
            });
            return false;
          }
          return true;
        case "enter_password":
          set({ currentAction });
          return true;
        case "verify":
          const validatePasswordResult2 =
            MomoryStateSchema.shape.momoryPassword.safeParse(momoryPassword);
          if (!validatePasswordResult2.success) {
            toast.error(validatePasswordResult2.error.errors[0].message, {
              duration: 2000,
              style: {
                  height: "65px",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "gray",
                  textAlign: "center",
            }})
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
    resetMomoryPassword: () => set({ momoryPassword: ["", "", "", ""] }),
  }))

