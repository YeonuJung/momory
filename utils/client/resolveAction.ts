"use client";
import { api } from "@/libs/axios";
import { useMomoryStore } from "@/store/useMomoryStore";
import { revalidatePage } from "../server/revalidatePage";
import { useMemoryStore } from "@/store/useMemoryStore";
import { useMomoryViewStore } from "@/store/useMomoryViewStore";
import { ActionParams } from "@/types/general";
import toast from "react-hot-toast";
import { decryptPassword } from "@/libs/crypto";
// 버튼 클릭시 실행되는 액션들을 정의
export function resolveAction({
  action,
  router,
  memoryId,
  image_path,
  uuid,
  momory_uuid,
  hasPostedMemory,
  isAuthenticated,
  nickname,
  password,
}: ActionParams) {
  const actions = {
    go_to_my_momory: () => {
      if (!momory_uuid) return;
      router.push(`/momory/${momory_uuid}`);
    },
    create_momory: () => {
      useMomoryStore.getState().reset("create_nickname");
      router.push("/create-momory");
    },
    share_momory: () => {
      const handleShare = () => {
        if (navigator.share) {
          const decryptedPassword = decryptPassword(password as string)
          navigator.share({
            title: "모모리로 정리하는 올해의 추억",
            text: `${nickname}님의 모모리에 소중한 추억을 남겨보세요! 😘\n ${nickname}님의 모모리 비밀번호: ${decryptedPassword} `,
            url: window.location.href,
          });
        } else {
          navigator.clipboard.writeText(window.location.href);
          toast(
            "링크가 복사되었습니다. 공유시 모모리 설정시 설정했던 비밀번호를 함께 전달해주세요.",
            {
              icon: "😘",
              style: {
                height: "65px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "gray",
                textAlign: "center",
              },
              duration: 4000,
            },
          );
        }
      };
      handleShare();
    },
    delete_memory: async () => {
      toast.promise(
        api.delete("api/v1/memory", {
          data: { memory_id: memoryId, image_path },
        }),
        {
          loading: "삭제 중...",
          success: () => {
            useMomoryStore.getState().resetMomoryPassword();
            useMemoryStore.getState().resetAll();
            revalidatePage(`/momory/${uuid}`);
            setTimeout(() => {
              useMomoryViewStore.getState().closeModal();
            }, 1000);
            return "성공적으로 삭제되었습니다😘"; // 성공 메시지
          },
          error: () => {
            // 실패 시 메시지
            return `삭제에 실패했습니다🥲`;
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
    },
    close_memory: () => {
      useMomoryViewStore.getState().closeModal();
    },
    leave_memory: () => {
      if (hasPostedMemory) {
        toast("사진은 한장만 업로드 가능합니다.", {
          icon: "😘",
          style: {
            height: "65px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "gray",
            textAlign: "center",
          },
          duration: 4000,
        });
        return;
      }
      useMemoryStore.getState().resetAll();

      router.push(
        `/momory/${uuid}/upload-memory${isAuthenticated ? "?authenticated=true" : ""}`,
      );
    },
  };

  return actions[action];
}
