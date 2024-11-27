"use client";
import Header from "@/components/common/Header";
import { api } from "@/libs/axios";
import { useMomoryStore } from "@/store/useMomoryStore";
import { useRouter } from "next/navigation";

interface MomoryHeaderProps {
  page: "create_nickname" | "create_password";
}
export default function MomoryHeader({ page }: MomoryHeaderProps) {
  const setCurrentAction = useMomoryStore((state) => state.setCurrentAction);
  const reset = useMomoryStore((state) => state.reset);
  const momoryNickname = useMomoryStore((state) => state.momoryNickname);
  const momoryPassword = useMomoryStore((state) => state.momoryPassword);
  const router = useRouter()
  // 다음 페이지로 갈 때 닉네임 검증 필요(모든 검증은 store에서 실시)
  const handleNext = () => {
    if(!setCurrentAction("create_password")) return;
  };
  // 제출할 때 비밀번호 검증
  // 검증실패 시 api 요청 안보내도록  return
  const handleSubmit = async () => {
    if(!setCurrentAction("submit")) return

    const combinedPassword = momoryPassword.join("");
    const response = await api.post("/api/v1/momory", {
      momoryNickname: momoryNickname,
      momoryPassword: combinedPassword,
    });
    if(response.data.success){
      router.push(response.data.redirectUrl)
    }
    if(response.data.error){
      alert("모모리 생성에 실패했습니다. 다시 시도해주세요!")
      reset("create_nickname")
      router.push("/create-momory")
    }
  };
  // 이전페이지로 가는건 검증필요 없음
  const handlePrev = () => {
    setCurrentAction("create_nickname");
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
