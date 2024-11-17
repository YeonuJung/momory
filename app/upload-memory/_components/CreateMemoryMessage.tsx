"use client";
// import Header from "@/components/common/Header";
import { FormEvent, useState } from "react";

export default function CreateMemoryMessage() {
  const [message, setMessage] = useState<string>("");
  const maxLength = 50;
  const handleMessageInput = (e: FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length > maxLength ) return;

    setMessage(e.currentTarget.value.slice(0, maxLength));
  };
  
  return (
    <div className="flex items-center justify-center">
      {/* <Header type="finish"/>  */}
      <div className="relative">
        <textarea
          maxLength={maxLength}
          value={message}
          onChange={handleMessageInput}
          placeholder={"메시지를 입력해주세요 (50자 이내)"}
          className="resize-none h-[44.79vw] w-[71.67vw] rounded-[11px] p-[27px] font-nanum-Jung text-[6.5vw] outline outline-2 outline-sky placeholder:absolute placeholder:left-1/2 placeholder:top-1/2 placeholder:-translate-x-1/2 placeholder:-translate-y-1/2 placeholder:whitespace-nowrap placeholder:font-pretendard placeholder:text-[3.13vw] placeholder:underline placeholder:decoration-[1px] placeholder:underline-offset-2 focus:outline-[3px] xs:h-[21.5rem] xs:w-[34.4rem] xs:text-[3.12rem] xs:placeholder:text-[1.5rem]"
        ></textarea>
        <div className="absolute bottom-[3.74vw] xs:bottom-[1.793rem] right-[4.17vw] xs:right-[2rem] font-pretendard font-normal text-[3.13vw] xs:text-[1.5rem] text-gray-400">
            {message.length}/{maxLength}
        </div>
      </div>
    </div>
  );
}
