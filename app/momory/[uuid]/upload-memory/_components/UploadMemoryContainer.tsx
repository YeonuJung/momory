"use client";
import { useMemoryStore } from "@/store/useMemoryStore";
import React from "react";

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
  return (
    <>
      {currentAction === "upload_memory_photo" && UploadMemoryPhoto}
      {currentAction === "select_filter" && SelectFilter}
      {currentAction === "upload_memory_credential" && UploadMemoryCredential}
    </>
  );
}
