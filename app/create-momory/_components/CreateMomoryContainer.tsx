"use client"

import { useState } from "react";

interface CreateMomoryContainerProps {
    createMomoryNickname: React.ReactNode;
    createMomoryPassword: React.ReactNode;
}
export default function CreateMomoryContainer({createMomoryNickname, createMomoryPassword}: CreateMomoryContainerProps) {
 const [step, setStep] = useState<'nickname' | 'password'>('nickname');
    return (
    <div>
      {step === 'nickname' && createMomoryNickname}
      {step === 'password' && createMomoryPassword}
    </div>
  )
}
