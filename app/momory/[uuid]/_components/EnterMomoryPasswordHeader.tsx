"use client";
import Header from "@/components/common/Header";
import { api } from "@/libs/axios";
import { useMomoryStore } from "@/store/useMomoryStore";
import { useParams } from "next/navigation";

export default function EnterMomoryPasswordHeader() {
  const params = useParams();
  const uuid = params.uuid;
  const setCurrentAction = useMomoryStore((state) => state.setCurrentAction);
  const reset = useMomoryStore((state) => state.reset);
  const resetMomoryPassword = useMomoryStore((state) => state.resetMomoryPassword);
  // 비밀번호 제출시 비밀번호 검증
  const handleSubmit = async () => {
    if (!setCurrentAction("verify")) {
      return;
    }
    const { momoryPassword } = useMomoryStore.getState();
    // 서버에서 비밀번호 검증(검증용 함수 이용해서 해쉬된 값 비교)
    const verifiedResult = await api.post("/api/v1/momory/verify-password", {
      uuid: uuid,
      momoryPassword: momoryPassword,
    });
    // 서버 오류로 검증 실패시 값 리셋
    if (verifiedResult.data.error) {
      alert("비밀번호 확인 중 오류가 발생했습니다. 다시 시도해주세요!");
      reset("enter_password");
      return;
    }
    // 값 자체의 검증 실패시 값 리셋
    if (!verifiedResult.data.success) {
      alert("비밀번호가 일치하지 않습니다");
      reset("enter_password");
      return;
    }
    // 검증 성공시 모모리 페이지로 렌더링
    resetMomoryPassword()
    setCurrentAction("view_momory");
  };

  return (
    <>
      <Header page={"enter_password"} handleSubmit={handleSubmit} />
    </>
  );
}
