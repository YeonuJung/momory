"use client";

import { useMomoryStore } from "@/store/useMomoryStore";
import { useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams()
  // 프롭스로 받은 EnterMomoryPassword가 없으면 모모리 주인이니깐 바로 모모리 페이지
  // 있으면 모모리에 초대받은 사람이니 모모리 비밀번호 입력창 보여주기
  // 만약 비밀번호를 입력하고 검증이 성공하면 모모리 페이지로 이동 및 쿼리스트링에 인증상태 담아두기
  // URL의 쿼리스트링 확인 후 인증된 인원은 매번 비밀번호 입력 필요없이 모모리 페이지에서 활동가능
  // 매번 비밀번호를 입력하는 것은 불편하니깐 쿼리스트링에 인증상태 담아두기
  useEffect(() => {
    if(!EnterMomoryPassword){
      setCurrentAction("view_momory")
      return
    }
    const isAuthenticated = searchParams.get("authenticated")
    if(isAuthenticated){
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
