"use client";

import { ButtonProps, ButtonWithCaptionProps } from "@/types/general";
import { resolveAction } from "@/utils/client/resolveAction";
import { useRouter } from "next/navigation";


export function Button({
  children,
  action,
  memoryId,
  image_path,
  uuid,
  momory_uuid,
}: ButtonProps) {
  const router = useRouter();
  return (
    <button
      type="button"
      className="h-[17.7vw] flex-1 rounded-[8.59px] border-2 border-sky text-white xs:h-[8.496rem]"
      onClick={() =>
        resolveAction({
          action,
          router,
          memoryId,
          image_path,
          uuid,
          momory_uuid,
          hasPostedMemory: undefined
        })()
      }
    >
      <span className="text-[6.7vw] leading-[5vw] xs:text-[3.216rem] xs:leading-[2.4rem]">
        {children}
      </span>
    </button>
  );
}

export function ButtonWithCaption({
  children,
  caption,
  action,
  uuid,
  hasPostedMemory
}: ButtonWithCaptionProps) {
  const router = useRouter();
  return (
    <button
      type="button"
      className="flex h-[17.7vw] flex-1 flex-col items-center justify-center gap-y-[1vw] rounded-[8.59px] border-2 border-sky text-white xs:h-[8.496rem] xs:gap-y-[0.48rem]"
      onClick={() =>
        resolveAction({
          action,
          router,
          uuid,
          memoryId: undefined,
          image_path: undefined,
          momory_uuid: undefined,
          hasPostedMemory
        })()
      }
    >
      <span className="text-[6.7vw] leading-[5vw] xs:text-[3.216rem] xs:leading-[2.4rem]">
        {children}
      </span>
      <span className="text-[4.4vw] leading-[4vw] xs:text-[2.112rem] xs:leading-[1.92rem]">
        {caption}
      </span>
    </button>
  );
}
