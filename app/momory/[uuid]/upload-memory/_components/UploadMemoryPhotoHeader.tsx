"use client";

import Header from "@/components/common/Header";
import { useDebounce } from "@/hooks/useDebounce";
import { api } from "@/libs/axios";
import { useMemoryStore } from "@/store/useMemoryStore";
import { useMomoryStore } from "@/store/useMomoryStore";
import { compressImage } from "@/utils/client/compressImage";
import { revalidatePage } from "@/utils/server/revalidatePage";
import { useParams, useRouter } from "next/navigation";
import { useCallback } from "react";
import toast from "react-hot-toast";

interface UploadMemoryHeaderProps {
  page: "upload_memory_photo" | "select_filter" | "upload_memory_credential";
}
export default function UploadMemoryHeader({ page }: UploadMemoryHeaderProps) {
  const setCurrentAction = useMemoryStore((state) => state.setCurrentAction);
  const resetMemoryPhoto = useMemoryStore((state) => state.resetMemoryPhoto);
  const resetFilter = useMemoryStore((state) => state.resetFilter);
  const resetCredential = useMemoryStore((state) => state.resetCredential);
  const reset = useMomoryStore((state) => state.reset);
  const router = useRouter();
  const momory_uuid = useParams().uuid;

  const handleSubmitCallback = useCallback(async () => {
    if (!setCurrentAction("submit")) return;
    const { memoryPhoto, memoryFilter, memoryCredential } =
      useMemoryStore.getState();
    const formData = new FormData();

    if (!memoryPhoto.photo) return;
    const compressdFile = await compressImage(memoryPhoto.photo);
    formData.append("file", compressdFile);
    formData.append("momory_uuid", momory_uuid as string);
    formData.append("filter", memoryFilter);
    formData.append("nickname", memoryCredential.memoryNickname);
    formData.append("message", memoryCredential.memoryMessage);

    toast.promise(
      api.post("/api/v1/memory", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      {
        loading: "사진을 업로드하고 있어요...",
        success: (response) => {
          if (response.status !== 201) {
            throw new Error("업로드 실패");
          }
          reset("enter_password");
          setTimeout(() => {
            revalidatePage(`/momory/${momory_uuid}`);
            router.push(`/momory/${momory_uuid}?authenticated=true`);
          }, 1000);
          return "사진이 성공적으로 저장되었어요😘";
        },
        error: () => {
          return "사진 업로드에 실패했어요. 다시 시도해주세요😌";
        },
      },
      {
        style: {
          height: "65px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "gray",
          textAlign: "center",
        },
      },
    );
  }, [setCurrentAction, router, reset, momory_uuid]);
  const handleSubmit = useDebounce(handleSubmitCallback, 1000);
  // 이전버튼 클릭시 현재 페이지에 맞게 이전 페이지로 이동
  // 동시에 현재 페이지에 맞게 상태 초기화
  const handlePrev = () => {
    if (page === "upload_memory_photo") {
      resetMemoryPhoto();
      reset("enter_password");
      router.push(`/momory/${momory_uuid}`);
    }
    if (page === "select_filter") {
      resetFilter();
      setCurrentAction("upload_memory_photo");
    } else if (page === "upload_memory_credential") {
      resetCredential();
      setCurrentAction("select_filter");
    }
  };
  // 다음버튼 클릭시 현재 페이지에 맞게 다음 페이지로 이동
  const handleNext = () => {
    if (page === "upload_memory_photo") {
      if (!setCurrentAction("select_filter")) return;
    } else if (page === "select_filter") {
      if (!setCurrentAction("upload_memory_credential")) return;
    }
  };
  return (
    <>
      {page === "upload_memory_photo" ? (
        <Header page={page} handleNext={handleNext} handlePrev={handlePrev} />
      ) : page === "select_filter" ? (
        <Header page={page} handleNext={handleNext} handlePrev={handlePrev} />
      ) : (
        <Header
          page={page}
          handlePrev={handlePrev}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}
