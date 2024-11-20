"use client"

import NicknameInput from "@/components/common/Input/NicknameInput";
import { useMomoryStore } from "@/store/useMomoryStore";

export default function MomoryNicknameInput() {
    const momoryNickname = useMomoryStore((state) => state.momoryNickname);
    const setMomoryNickname = useMomoryStore((state) => state.setMomoryNickname);
  return (
    <>
      <NicknameInput momoryNickname={momoryNickname} setMomoryNickname={setMomoryNickname}/>
    </>
  )
}
