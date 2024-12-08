"use client";
import { useMemoryStore } from "@/store/useMemoryStore";
import React, { useEffect, useState } from "react";

interface UploadMemoryContainerProps {
  UploadMemoryPhoto: React.ReactNode;
  SelectFilter: React.ReactNode;
  UploadMemoryCredential: React.ReactNode;
}
export default function UploadMemoryContainer({
  UploadMemoryPhoto,
  SelectFilter,
  UploadMemoryCredential,
}: UploadMemoryContainerProps) {
  const currentAction = useMemoryStore((state) => state.currentAction);
  const [isChanging, setIsChanging] = useState(false);
  // 클릭했다는 인지를 주기위한 로딩
  // 버튼이 너무 작고 모바일 특성상 화면이 작아서 클릭 피드백이 필요하다고 판단
  useEffect(() => {
    setIsChanging(true);
    setTimeout(() => {
      setIsChanging(false);
    }, 250); 
  }, [currentAction]);

  if (isChanging) {
    return (
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="loader absoulte"></span>
      </div>
    );
  }
  return (
    <>
      {currentAction === "upload_memory_photo" && UploadMemoryPhoto}
      {currentAction === "select_filter" && SelectFilter}
      {currentAction === "upload_memory_credential" && UploadMemoryCredential}
    </>
  );
}
