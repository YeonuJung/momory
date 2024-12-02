"use client";

import Header from "@/components/common/Header";
import { api } from "@/libs/axios";
import { useMemoryStore } from "@/store/useMemoryStore";
import { useMomoryStore } from "@/store/useMomoryStore";
import { revalidatePage } from "@/utils/server/revalidatePage";
import { useParams, useRouter } from "next/navigation";

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
  
  const handleSubmit = async () => {
    if (!setCurrentAction("submit")) return;
    const { memoryPhoto, memoryFilter, memoryCredential } =
      useMemoryStore.getState();
    const formData = new FormData();
    if (memoryPhoto.photo) {
      formData.append("file", memoryPhoto.photo);
      formData.append("momory_uuid", momory_uuid as string);
      formData.append("filter", memoryFilter);
      formData.append("nickname", memoryCredential.memoryNickname);
      formData.append("message", memoryCredential.memoryMessage);

      const response = await api.post("/api/v1/memory", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // 201이 아니면 실패니깐 alert창 띄우기
      if (response.status !== 201) {
        alert("메모리 업로드에 실패했습니다. 다시 시도해주세요");
        return;
      }
      // 서버액션으로 revalidatePath 호출(클라이언트 사이드 라우트 캐쉬 초기화화)
      revalidatePage(`/momory/${momory_uuid}`);
      // 성공시 값 리셋
      reset("enter_password");
      // 다시 모모리 페이지로 router.push시키기
      router.push(`/momory/${momory_uuid}`);
    }
  };
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
