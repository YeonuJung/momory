"use client";
import Header from "@/components/common/Header";
import { api } from "@/libs/axios";
import { useMomoryStore } from "@/store/useMomoryStore";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EnterMomoryPasswordHeader() {
  const params = useParams();
  const uuid = params.uuid;
  const setCurrentAction = useMomoryStore((state) => state.setCurrentAction);
  const reset = useMomoryStore((state) => state.reset);
  const resetMomoryPassword = useMomoryStore((state) => state.resetMomoryPassword);
  const router = useRouter();
  // 비밀번호 제출시 비밀번호 검증
  const handleSubmit = async () => {
    if (!setCurrentAction("verify")) {
      return;
    }
    const { momoryPassword } = useMomoryStore.getState();
    // 서버에서 비밀번호 검증(검증용 함수 이용해서 해쉬된 값 비교)
    toast.promise(
      api.post("/api/v1/momory/verify-password", {
        uuid: uuid,
        momoryPassword: momoryPassword,
      }),
      {
        loading: '비밀번호 확인 중...',
        success: (response) => {
          // 비밀번호 불일치는 success: false로 오는 케이스
          if (!response.data.success) {
            reset("enter_password");
            throw new Error("비밀번호 불일치");
          }
          // 성공 케이스
          resetMomoryPassword();
          setCurrentAction("view_momory");
          router.replace(`${window.location.pathname}?authenticated=true`);
          return "비밀번호 확인 완료😘";
        },
        error: (err) => {
          reset("enter_password");
          // 서버 에러 (500)
          if (err.response?.status === 500) {
            return `비밀번호 확인 중 오류가 발생했습니다.\n다시 시도해주세요😌`;
          }
          // success handler에서 던진 에러
          if (err.message === "비밀번호 불일치") {
            reset("enter_password");
            return "비밀번호가 일치하지 않습니다🥲";
          }
          return `비밀번호 확인 중 오류가 발생했습니다.\n다시 시도해주세요😌`;
        }
      },
      {
        style: {
          height: "65px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "gray",
          textAlign: "center",
        },
        duration: 2000,
      }
    );
  };

  return (
    <>
      <Header page={"enter_password"} handleSubmit={handleSubmit} />
    </>
  );
}
