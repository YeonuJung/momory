"use client";

import NicknameInput from "@/components/common/Input/NicknameInput";
import { useMemoryStore } from "@/store/useMemoryStore";

export default function UploadMemoryNicknameInput() {
  const momoryNickname = useMemoryStore(
    (state) => state.memoryCredential.memoryNickname,
  );
  const setMomoryNickname = useMemoryStore((state) => state.setMemoryNickname);
  return (
    <div>
      <NicknameInput momoryNickname={momoryNickname} setMomoryNickname={setMomoryNickname}/>
    </div>
  );
}
