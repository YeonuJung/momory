"use client";
import { useMemoryStore } from "@/store/useMemoryStore";
import { FormEvent} from "react";

export default function UploadMemoryMessage() {
  const memoryMessage = useMemoryStore((state) => state.memoryCredential.memoryMessage);
    const setMemoryMessage = useMemoryStore((state) => state.setMemoryMessage);
  const maxLength = 50;
  const handleMessageInput = (e: FormEvent<HTMLTextAreaElement>) => {
    const actualLength = Array.from(e.currentTarget.value).length
    if (actualLength > maxLength ) return;

    setMemoryMessage(e.currentTarget.value);
  };
  
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <textarea
          value={memoryMessage}
          onChange={handleMessageInput}
          className="resize-none h-[44.79vw] w-[71.67vw] rounded-[11px] p-[24.3px] font-nanum-Jung text-[6.5vw] outline outline-2 outline-sky xs:h-[19.35rem] xs:w-[30.96rem] xs:text-[2.81rem]"
        ></textarea>
        {memoryMessage.length === 0 ? <div className="font-bold text-[3.47vw] xs:text-[1.5rem] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap text-zinc-500 pointer pointer-events-none">{"메시지를 입력해주세요 (50자 이내ℹ️)"}</div> : null}
        <div className="absolute bottom-[3.74vw] xs:bottom-[1.61rem] right-[4.17vw] xs:right-[1.8rem] font-pretendard font-normal text-[3.13vw] xs:text-[1.35rem] text-gray-400 ">
            {Array.from(memoryMessage).length}/{maxLength}
        </div>
      </div>
    </div>
);
}