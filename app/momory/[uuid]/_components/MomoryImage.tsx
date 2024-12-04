"use client";
import { ILLUSTRATIONS, ROTATION_ANGLES } from "@/constants/page";
import { useMomoryViewStore } from "@/store/useMomoryViewStore";
import { Memory } from "@/types/model";
import Image from "next/image";
interface MomoryImageProps {
  memoryData: Memory[] | null;
  userId: number;
  uuid: string;
  memoryPublicUrlArray: string[];
  momory_uuid: string| undefined
}

export default function MomoryImage({
  memoryData,
  userId,
  uuid,
  memoryPublicUrlArray,
  momory_uuid
}: MomoryImageProps) {
  const openModal = useMomoryViewStore((state) => state.openModal);
  return (
    <div className="flex flex-wrap content-center items-center justify-center gap-x-[5.6vw] gap-y-[4.75vw] xs:gap-x-[2.688rem] xs:gap-y-[2.28rem]">
      {ROTATION_ANGLES.map((angle, idx) => {
        const currentMemory = memoryData?.[idx];
        return (
          <div
            key={idx}
            className={`relative flex h-[33.46vw] w-[22.5vw] ${angle} cursor-pointer flex-col items-center justify-center bg-polaroid-frame bg-cover bg-center bg-no-repeat xs:h-[16.062rem] xs:w-[10.8rem]`}
            onClick={() => {
              if (!currentMemory) return;
              openModal({
                filter: currentMemory.filter,
                memoryId: currentMemory.id,
                nickname: currentMemory.nickname,
                imagePath: memoryPublicUrlArray[idx],
                message: currentMemory.message,
                memory_user_id: currentMemory.user_id,
                logined_user_id: userId,
                memory_momory_uuid: currentMemory.momory_uuid,
                momory_uuid: uuid,
                user_momory_uuid: momory_uuid
              });
            }}
          >
            {memoryPublicUrlArray[idx] ? (
              <Image
                width={90}
                height={119}
                alt={"메모리"}
                src={memoryPublicUrlArray[idx]}
                className={`${currentMemory?.filter ? currentMemory?.filter : "none"} h-[25.52vw] w-[18.75vw] xs:h-[11.9rem] xs:w-[9rem] object-cover bg-neutral-300`}
              ></Image>
            ) : (
              <div
                className={`${currentMemory?.filter ? currentMemory?.filter : "none"} h-[25.52vw] w-[18.75vw] xs:h-[11.9rem] xs:w-[9rem]`}
              ></div>
            )}

            <div className="h-[5.83vw] w-full pl-[2.08vw] align-top font-nanum-Jung text-[3.75vw] font-medium tracking-wide text-[#252525] xs:h-[2.8rem] xs:pl-[1rem] xs:text-[1.8rem]">
              {currentMemory?.nickname
                ? `@${currentMemory?.nickname}`
                : "@닉네임"}
            </div>
            {ILLUSTRATIONS[idx].map((illust, i) => {
              return (
                <Image
                 width={illust.width}
                 height={illust.height}
                  key={i}
                  src={illust.path}
                  className={`absolute ${illust.position}`}
                  alt="배경일러스트"
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}