"use client";

import { useMomoryStore } from "@/store/useMomoryStore";
import { useEffect } from "react";


interface MomoryContainerProps {
  Momory: React.ReactNode;
  EnterMomoryPassword?: React.ReactNode;
}
export default function MomoryContainer({
  Momory,
  EnterMomoryPassword,
}: MomoryContainerProps) {
  const setCurrentAction = useMomoryStore((state) => state.setCurrentAction )
  const currentAction = useMomoryStore((state) => state.currentAction)
  // 프롭스로 받은 EnterMomoryPassword가 없으면 모모리 주인이니깐 바로 모모리 페이지
  // 있으면 모모리에 초대받은 사람이니 모모리 비밀번호 입력창 보여주기
  useEffect(() => {
    if(!EnterMomoryPassword){
      setCurrentAction("view_momory")
      return
    }
    setCurrentAction("enter_password")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {currentAction === "enter_password" && EnterMomoryPassword }
      {currentAction === "view_momory" && Momory }
    </>
  );
}
