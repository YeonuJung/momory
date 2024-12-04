"use client";
import { useMemoryStore } from "@/store/useMemoryStore";
import { FormEvent} from "react";

export default function UploadMemoryMessage() {
  const memoryMessage = useMemoryStore((state) => state.memoryCredential.memoryMessage);
    const setMemoryMessage = useMemoryStore((state) => state.setMemoryMessage);
  const maxLength = 50;
  const handleMessageInput = (e: FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length > maxLength ) return;

    setMemoryMessage(e.currentTarget.value.slice(0, maxLength));
  };
  
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <textarea
          maxLength={maxLength}
          value={memoryMessage}
          onChange={handleMessageInput}
          placeholder={"메시지를 입력해주세요 (50자 이내)"}
          className="resize-none h-[44.79vw] w-[71.67vw] rounded-[11px] p-[24.3px] font-nanum-Jung text-[6.5vw] outline outline-2 outline-sky placeholder:absolute placeholder:left-1/2 placeholder:top-1/2 placeholder:-translate-x-1/2 placeholder:-translate-y-1/2 placeholder:whitespace-nowrap placeholder:font-pretendard placeholder:text-[3.13vw] placeholder:underline placeholder:decoration-[1px] placeholder:underline-offset-2 focus:outline-[3px] xs:h-[19.35rem] xs:w-[30.96rem] xs:text-[2.81rem] xs:placeholder:text-[1.35rem]"
        ></textarea>
        <div className="absolute bottom-[3.74vw] xs:bottom-[1.61rem] right-[4.17vw] xs:right-[1.8rem] font-pretendard font-normal text-[3.13vw] xs:text-[1.35rem] text-gray-400">
            {memoryMessage.length}/{maxLength}
        </div>
      </div>
    </div>
  );
}