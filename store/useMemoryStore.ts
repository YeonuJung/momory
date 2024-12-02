"use client";
import { create } from "zustand/react";
import { MemoryState, MemoryStateSchema } from "@/types/store";

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
          alert(validateUploadPhotoResult.error.errors[0].message);
          return false;
        }
        set({ currentAction });
        return true;
      case "upload_memory_photo":
        set({ currentAction });
        return true;
      case "upload_memory_credential":
        const validateSelectFilterResult =
          MemoryStateSchema.shape.memoryFilter.safeParse(memoryFilter);
        if (!validateSelectFilterResult.success) {
          alert(validateSelectFilterResult.error.errors[0].message);
          return false;
        }
        set({ currentAction });
        return true;
      case "submit":
        const validateUploadMemoryCredentialResult =
          MemoryStateSchema.shape.memoryCredential.safeParse(memoryCredential);
        if (!validateUploadMemoryCredentialResult.success) {
          alert(validateUploadMemoryCredentialResult.error.errors[0].message);
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
