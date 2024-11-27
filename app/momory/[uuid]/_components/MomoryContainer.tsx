"use client";

import { useMomoryStore } from "@/store/useMomoryStore";
import { useEffect } from "react";


interface MomoryContainerProps {
  Momory: React.ReactNode;
  EnterMomoryPassword?: React.ReactNode;
}
export default function MomoryContainer({
  Momory,
  EnterMomoryPassword,
}: MomoryContainerProps) {
  const setCurrentAction = useMomoryStore((state) => state.setCurrentAction )
  const currentAction = useMomoryStore((state) => state.currentAction)
  
  useEffect(() => {
    if(!EnterMomoryPassword){
      setCurrentAction("view_momory")
      return
    }
    setCurrentAction("enter_password")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      {currentAction === "enter_password" && EnterMomoryPassword }
      {currentAction === "view_momory" && Momory }
    </>
  );
}
