"use client"

import { useMomoryStore } from "@/store/useMomoryStore"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"


interface CreateMomoryContainerProps {
  createMomoryNickname: React.ReactNode
  createMomoryPassword: React.ReactNode
}

export default function CreateMomoryContainer({ createMomoryNickname, createMomoryPassword }: CreateMomoryContainerProps) {
  const currentPage = useMomoryStore((state) => state.currentPage)
  const searchParams = useSearchParams()
  const router = useRouter()
  const error = searchParams.get("error")

  useEffect(() => {
    if(error){
      alert(error)
      router.replace("/create-momory")
    }
  }, [error, router])
  return (
    <>
      {currentPage === "create_nickname" && createMomoryNickname}
      {currentPage === "create_password" && createMomoryPassword}
    </>
  )
}