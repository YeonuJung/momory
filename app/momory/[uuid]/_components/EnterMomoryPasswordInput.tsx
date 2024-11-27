"use client";

import FourDigitPassword from "@/components/common/Input/FourDigitPassword";
import { useMomoryStore } from "@/store/useMomoryStore";

export default function EnterMomoryPasswordInput() {
  const momoryPassword = useMomoryStore((state) => state.momoryPassword);
  const setMomoryPassword = useMomoryStore((state) => state.setMomoryPassword);
    return (
    <>
      <FourDigitPassword momoryPassword={momoryPassword} setMomoryPassword={setMomoryPassword}/>
    </>
  )
}
