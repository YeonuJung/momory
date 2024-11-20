"use client"


interface CreateMomoryContainerProps {
  createMomoryNickname: React.ReactNode
  createMomoryPassword: React.ReactNode
}

export default function CreateMomoryContainer({ createMomoryNickname, createMomoryPassword }: CreateMomoryContainerProps) {

  return (
    <div>
      {createMomoryNickname}
      {/* {createMomoryPassword} */}
    </div>
  )
}