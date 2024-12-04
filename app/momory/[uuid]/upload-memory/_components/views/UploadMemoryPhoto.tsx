import UploadMemoryHeader from "../UploadMemoryPhotoHeader";
import UploadMemoryPhotoInput from "../UploadMemoryPhotoInput";

export default function UploadMemoryPhoto() {
  return (
    <>
      <UploadMemoryHeader page="upload_memory_photo" />
      <div className="flex flex-col items-center justify-center gap-y-[10.83vw] xs:gap-y-[4.68rem] mt-[20.83vw] xs:mt-[9rem]">
        <UploadMemoryPhotoInput/>
        <label className="align-top font-nanum-Jung text-[8.96vw] font-normal text-white xs:text-[4.14rem]">
          사진을 등록해주세요
        </label>
      </div>
    </>
  );
}