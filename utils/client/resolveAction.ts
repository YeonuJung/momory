"use client";
import { api } from "@/libs/axios";
import { useMomoryStore } from "@/store/useMomoryStore";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { revalidatePage } from "../server/revalidatePage";
import { useMemoryStore } from "@/store/useMemoryStore";
import { useMomoryViewStore } from "@/store/useMomoryViewStore";
type Action =
  | "go_to_my_momory"
  | "create_momory"
  | "share_momory"
  | "save_momory"
  | "delete_memory"
  | "save_memory"
  | "leave_memory";

export function resolveAction(
  action: Action,
  router: AppRouterInstance,
  memoryId?: number,
  image_path?: string,
  uuid?: string,
  momory_uuid?: string,
) {
  const actions = {
    go_to_my_momory: () => router.push(`/momory/${momory_uuid}`),
    create_momory: () => {
      useMomoryStore.getState().reset("create_nickname");
      router.push("/create-momory");
    },
    share_momory: () => {
      const handleShare = async () => {
        // Web Share API 지원 확인
        if (navigator.share) {
          await navigator.share({
            title: "모모리로 정리하는 올해의 추억",
            text: "친구가 공유한 추억을 확인해보세요",
            url: window.location.href,
          });
        } else {
          // Web Share API를 지원하지 않는 환경
          await navigator.clipboard.writeText(window.location.href);
          alert("링크가 복사되었습니다");
        }
      };
      handleShare();
    },
    save_momory: () => console.log("모모리 간직하기"),
    delete_memory: async () => {
      const response = await api.delete(`api/v1/memory`, {
        data: { memory_id: memoryId, image_path },
      });
      if (response.status === 200) {
        useMomoryStore.getState().resetMomoryPassword();
        revalidatePage(`/momory/${uuid}`);
        useMomoryViewStore.getState().closeModal();
        alert("성공적으로 삭제되었습니다.");
      }
    },
    save_memory: () => {
     
    },
    leave_memory: () => {
      useMemoryStore.getState().resetAll();
      router.push(`/momory/${uuid}/upload-memory`);
    },
  };

  return actions[action];
}
