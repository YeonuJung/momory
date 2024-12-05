"use client";

import FourDigitPassword from "@/components/common/Input/FourDigitPassword";
import { useMomoryStore } from "@/store/useMomoryStore";

export default function MomoryPasswordInput() {
  const momoryPassword = useMomoryStore((state) => state.momoryPassword);
  const setMomoryPassword = useMomoryStore((state) => state.setMomoryPassword);

  return <div>
    <FourDigitPassword momoryPassword={momoryPassword} setMomoryPassword={setMomoryPassword} />
  </div>;
}
