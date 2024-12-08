"use client";

import { useMemoryStore } from "@/store/useMemoryStore";
import { ChangeEvent } from "react";
import toast from "react-hot-toast";

export default function UploadMemoryPhotoInput() {
  const setMemoryPhoto = useMemoryStore((state) => state.setMemoryPhoto);
  const setMemoryPhotoPreviewUrl = useMemoryStore(
    (state) => state.setMemoryPhotoPreviewUrl,
  );
  const memoryPhotoPreviewUrl = useMemoryStore(
    (state) => state.memoryPhoto.previewUrl,
  );
  const handleUploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setMemoryPhoto(file);
          setMemoryPhotoPreviewUrl(reader.result as string);
        }
      };
      reader.readAsDataURL(file);

      reader.onerror = () => {
        toast.error("파일을 불러오는데 실패했습니다🥲", {
          style: {
            height: "65px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "gray",
            textAlign: "center",
          },
          duration: 2000,
        });
      };
    }
  };
  return (
    <div className="relative flex h-[125.46vw] w-[76.3vw] justify-center bg-white shadow-frame xs:h-[48.78rem] xs:w-[32.96rem]">
      <label
        htmlFor="photo-upload"
        className="absolute top-[3.71vw] flex h-[101vw] w-[68.45vw] cursor-pointer items-center justify-center border-[2.5px] border-sky xs:top-[1.6rem] xs:h-[39.27rem] xs:w-[29.57rem]"
      >
        <input
          id="photo-upload"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleUploadPhoto}
        />
        {memoryPhotoPreviewUrl ? (
          <img
            src={memoryPhotoPreviewUrl}
            alt="메모리 미리보기 이미지"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="absoulte font-nanum-Jung text-[7.5vw] text-sky xs:text-[3.24rem]">
            +
          </span>
        )}
      </label>
    </div>
  );
}