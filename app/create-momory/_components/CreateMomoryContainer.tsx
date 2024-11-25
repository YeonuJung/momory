"use client"

import { useMomoryStore } from "@/store/useMomoryStore"


interface CreateMomoryContainerProps {
  createMomoryNickname: React.ReactNode
  createMomoryPassword: React.ReactNode
}

export default function CreateMomoryContainer({ createMomoryNickname, createMomoryPassword }: CreateMomoryContainerProps) {
  const currentAction = useMomoryStore((state) => state.currentAction)

  return (
    <>
      {currentAction === "create_nickname" && createMomoryNickname}
      {currentAction === "create_password" && createMomoryPassword}
    </>
  )
}