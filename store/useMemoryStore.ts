"use client";
import { create } from "zustand/react";
import { MemoryState, MemoryStateSchema } from "@/types/store";
import toast from "react-hot-toast";
import * as Sentry from "@sentry/react";

export const useMemoryStore = create<MemoryState>()((set, get) => ({
  memoryPhoto: { photo: undefined, previewUrl: "" },
  memoryFilter: "",
  memoryCredential: {
    memoryNickname: "",
    memoryMessage: "",
  },
  currentAction: "upload_memory_photo",
  setMemoryPhoto: (photo) => set((state) => ({ memoryPhoto: { ...state.memoryPhoto, photo } })),
  setMemoryPhotoPreviewUrl: (previewUrl) =>
      set((state) => ({ memoryPhoto: { ...state.memoryPhoto, previewUrl } })),
  setMemoryFilter: (memoryFilter) => set({ memoryFilter }),
  setMemoryNickname: (memoryNickname: string) =>
    set((state) => ({
      memoryCredential: { ...state.memoryCredential, memoryNickname },
    })),
  setMemoryMessage: (memoryMessage: string) =>
    set((state) => ({
      memoryCredential: { ...state.memoryCredential, memoryMessage },
    })),
  setCurrentAction: (currentAction: string) => {
    const { memoryPhoto, memoryFilter, memoryCredential } = get();
    switch (currentAction) {
      case "select_filter":
        const validateUploadPhotoResult =
          MemoryStateSchema.shape.memoryPhoto.safeParse(memoryPhoto);
        if (!validateUploadPhotoResult.success) {
          toast.error(validateUploadPhotoResult.error.errors[0].message, {
            style: {
              height: "65px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "gray",
              textAlign: "center",
          },
          duration: 2000
        })
          return false;
        }
        set({ currentAction });
        return true;
      case "upload_memory_photo":
        set({ currentAction });
        return true;
      case "upload_memory_credential":
        Sentry.addBreadcrumb({
          category: 'memory-validation',
          message: '필터 유효성 검사 시작'
      });
        const validateSelectFilterResult =
          MemoryStateSchema.shape.memoryFilter.safeParse(memoryFilter);
        if (!validateSelectFilterResult.success) {
          Sentry.setExtra('filterValidationError', {
            filter: memoryFilter,
            error: validateSelectFilterResult.error.errors[0]
        });
          toast.error(validateSelectFilterResult.error.errors[0].message, {
            style: {
              height: "65px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "gray",
              textAlign: "center",
          },
          duration: 2000
          })
          return false;
        }
        set({ currentAction });
        return true;
      case "submit":
        const validateUploadMemoryCredentialResult =
          MemoryStateSchema.shape.memoryCredential.safeParse(memoryCredential);
        if (!validateUploadMemoryCredentialResult.success) {
          toast.error(validateUploadMemoryCredentialResult.error.errors[0].message, {
            style: {
              height: "65px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "gray",
              textAlign: "center",
          },
          duration: 2000
          })
          return false;
        }
        return true;
    }
    return false;
  },
  resetMemoryPhoto: () =>
    set({ memoryPhoto: { photo: undefined, previewUrl: "" } }),
  resetFilter: () => set({ memoryFilter: "" }),
  resetCredential: () =>
    set({ memoryCredential: { memoryNickname: "", memoryMessage: "" } }),
  resetAll: () => set({
    memoryPhoto: { photo: undefined, previewUrl: "" },
    memoryFilter: "",
    memoryCredential: {
      memoryNickname: "",
      memoryMessage: "",
    },
    currentAction: "upload_memory_photo"
  })
}));
