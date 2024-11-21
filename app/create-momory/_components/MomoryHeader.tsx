"use client";
import Header from "@/components/common/Header";
import { useMomoryStore } from "@/store/useMomoryStore";

interface MomoryHeaderProps {
  page: "create_nickname" | "create_password";
}
export default function MomoryHeader({ page }: MomoryHeaderProps) {
  const setCurrentPage = useMomoryStore((state) => state.setCurrentPage);
  const momoryNickname = useMomoryStore((state) => state.momoryNickname);
  const momoryPassword = useMomoryStore((state) => state.momoryPassword);
  return (
    <>
      {page === "create_nickname" ? (
        <Header
          page={page}
          setCurrentPage={setCurrentPage}
          momoryNickname={momoryNickname}
        />
      ) : (
        <Header
          page={page}
          setCurrentPage={setCurrentPage}
          momoryNickname={momoryNickname}
          momoryPassword={momoryPassword}
        />
      )}
    </>
  );
}
