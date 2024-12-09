"use client";
import Header from "@/components/common/Header";
import { useDebounce } from "@/hooks/useDebounce";
import { api } from "@/libs/axios";
import { useMomoryStore } from "@/store/useMomoryStore";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import toast from "react-hot-toast";

interface MomoryHeaderProps {
  page: "create_nickname" | "create_password";
}
export default function MomoryHeader({ page }: MomoryHeaderProps) {
  const setCurrentAction = useMomoryStore((state) => state.setCurrentAction);
  const reset = useMomoryStore((state) => state.reset);
  const router = useRouter()
  // 다음 페이지로 갈 때 닉네임 검증 필요(모든 검증은 store에서 실시)
  const handleNext = () => {
    if(!setCurrentAction("create_password")) return;
  };
  // 제출할 때 비밀번호 검증
  // 검증실패 시 api 요청 안보내도록  return
  const handleSubmitCallback = useCallback(async () => {
    if(!setCurrentAction("submit")) return;
    const { momoryNickname, momoryPassword } = useMomoryStore.getState();
    const combinedPassword = momoryPassword.join("");

    const response = await api.post("/api/v1/momory", {
      momoryNickname: momoryNickname,
      momoryPassword: combinedPassword,
    });
    // api 요청 성공시 모모리로 이동
    if(response.data.success){
      alert(`redirecting to: ${response.data.redirectUrl}`);
      router.push(response.data.redirectUrl);
    }
    if(response.data.error){
      toast.error("모모리 생성에 실패했습니다. 다시 시도해주세요😌", {
        duration: 2000,
        style: {
            height: "65px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "gray",
            textAlign: "center",
        }
      });
      reset("create_nickname");
      router.push("/create-momory");
    }
  }, [setCurrentAction, router, reset]);
  // 디바운스 훅 사용, 불필요한 api 요청 방지
  const handleSubmit = useDebounce(handleSubmitCallback, 300);
  // 이전페이지로 가는건 검증필요 없음
  const handlePrev = () => {
    reset("create_nickname")
  };
  return (
    <>
      {page === "create_nickname" ? (
        <Header
          page={page}
          handleNext={handleNext}
        />
      ) : (
        <Header
          page={page}
          handleSubmit={handleSubmit}
          handlePrev={handlePrev}
        />
      )}
    </>
  );
}
