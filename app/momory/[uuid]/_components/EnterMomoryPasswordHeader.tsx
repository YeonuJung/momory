"use client";
import Header from "@/components/common/Header";
import { api } from "@/libs/axios";
import { useMomoryStore } from "@/store/useMomoryStore";
import { useParams } from "next/navigation";

export default function EnterMomoryPasswordHeader() {
  const params = useParams();
  const uuid = params.uuid;
  const momoryPassword = useMomoryStore((state) => state.momoryPassword);
  const setCurrentAction = useMomoryStore((state) => state.setCurrentAction);
  const reset = useMomoryStore((state) => state.reset);
  const handleSubmit = async () => {
    if (!setCurrentAction("view_momory_after_password")) {
      return;
    }

    const verifiedResult = await api.post("/api/v1/momory/verify-password", {
      uuid: uuid,
      momoryPassword: momoryPassword,
    });
    if (verifiedResult.data.error) {
      alert("비밀번호 확인 중 오류가 발생했습니다. 다시 시도해주세요!");
      reset("enter_password");
      return;
    }
    if (!verifiedResult.data.success) {
      alert("비밀번호가 일치하지 않습니다");
      reset("enter_password");
      return;
    }
    setCurrentAction("view_momory");
  };

  return (
    <>
      <Header page={"enter_password"} handleSubmit={handleSubmit} />
    </>
  );
}
