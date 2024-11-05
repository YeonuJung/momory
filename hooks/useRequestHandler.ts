"use client"

import { useRouter } from "next/navigation";

export default function useRequestHandler() {
    const router = useRouter();
    // 요청 핸들러(최종적으로 토큰 재발급 실패시 401을 받아서 로그인 페이지로 이동)
    const handleRequest = async <T>(request: () => Promise<T>) => {
      try {
        const data = await request();
        return data
      } catch (e) {
        console.log(e);
        alert("다시 로그인해주세요")
        router.push("/");
      }
    };
    return handleRequest
  }