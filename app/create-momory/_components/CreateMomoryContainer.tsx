"use client"

import { useMomoryStore } from "@/store/useMomoryStore"


interface CreateMomoryContainerProps {
  CreateMomoryNickname: React.ReactNode
  CreateMomoryPassword: React.ReactNode
}

export default function CreateMomoryContainer({ CreateMomoryNickname, CreateMomoryPassword }: CreateMomoryContainerProps) {
  const currentAction = useMomoryStore((state) => state.currentAction)

  return (
    <>
      {currentAction === "create_nickname" && CreateMomoryNickname}
      {currentAction === "create_password" && CreateMomoryPassword}
    </>
  )
}