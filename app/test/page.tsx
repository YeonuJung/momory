"use client";

import { getMemory } from "@/api/memory";
import { useRouter } from "next/navigation";

export default function Test() {
  const router = useRouter();
  const handleTest = async () => {
    try {
      const data = await getMemory();
      console.log(data);
    } catch (e) {
      // go to root page
      // TODO: 재사용을 위해 리팩토링 필요
      router.push("/");
    }
  };

 return <div></div>;
}