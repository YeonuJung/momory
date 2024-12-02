"use client";

import { useMemoryStore } from "@/store/useMemoryStore";
import { ChangeEvent } from "react";

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
        alert("파일을 불러오는데 실패했습니다.");
      };
    }
  };
  return (
    <div className="relative flex h-[63.7vh] w-[76.3vw] justify-center bg-white shadow-frame xs:h-[54.2rem] xs:w-[36.622rem]">
      <label
        htmlFor="photo-upload"
        className="absolute top-[3.71vw] flex h-[51.33vh] w-[68.45vw] cursor-pointer items-center justify-center border-[2.5px] border-sky xs:top-[1.779rem] xs:h-[43.632rem] xs:w-[32.855rem]"
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
          <span className="absoulte font-nanum-Jung text-[7.5vw] text-sky xs:text-[3.6rem]">
            +
          </span>
        )}
      </label>
    </div>
  );
}
