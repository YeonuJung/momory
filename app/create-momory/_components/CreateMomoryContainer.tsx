"use client"

import { useMomoryStore } from "@/store/useMomoryStore"
import { useEffect, useState } from "react"


interface CreateMomoryContainerProps {
  CreateMomoryNickname: React.ReactNode
  CreateMomoryPassword: React.ReactNode
}

export default function CreateMomoryContainer({ CreateMomoryNickname, CreateMomoryPassword }: CreateMomoryContainerProps) {
  const currentAction = useMomoryStore((state) => state.currentAction)
  const [isChanging, setIsChanging] = useState(false);
  // 클릭했다는 인지를 주기위한 로딩
  // 버튼이 너무 작고 모바일 특성상 화면이 작아서 클릭 피드백이 필요하다고 판단
  useEffect(() => {
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
    }, 250); 
  }, [currentAction]);

  if (isChanging) {
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="loader absoulte"></span>
      </div>
    );
  }
  return (
    <>
      {currentAction === "create_nickname" && CreateMomoryNickname}
      {currentAction === "create_password" && CreateMomoryPassword}
    </>
  )
}