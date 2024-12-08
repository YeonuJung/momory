"use client";
import { api } from "@/libs/axios";
import { useMomoryStore } from "@/store/useMomoryStore";
import { revalidatePage } from "../server/revalidatePage";
import { useMemoryStore } from "@/store/useMemoryStore";
import { useMomoryViewStore } from "@/store/useMomoryViewStore";
import { ActionParams } from "@/types/general";
import toast from "react-hot-toast";

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
          // 먼저 토스트를 보여줌
          toast("모모리 비밀번호 네자리를 함께 공유해주세요!", {
            icon: "😘",
            duration: 1500,
            style: {
              height: "65px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "gray",
              textAlign: "center",
            },
          });
          // 토스트가 사라진 후 share API 실행
          setTimeout(() => {
            navigator.share({
              title: "모모리로 정리하는 올해의 추억",
              text: `${nickname}님이 공유한 추억을 확인해보세요`,
              url: window.location.href,
            });
          }, 1500);
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
            }, 2000);
            return "성공적으로 삭제되었습니다😘"; // 성공 메시지
          },
          error: () => {
            // 실패 시 메시지
            return `삭제에 실패했습니다🥲`;
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
