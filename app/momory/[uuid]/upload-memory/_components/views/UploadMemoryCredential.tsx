import UploadMemoryHeader from "../UploadMemoryPhotoHeader";
import UploadMemoryNicknameInput from "../UploadMemoryNicknameInput";
import UploadMemoryMessage from "../UploadMemoryMessage";

export default function UploadMemoryCredential() {
  return (
    <>
      <UploadMemoryHeader page="upload_memory_credential" />
      <div className="flex flex-col gap-y-[1.3rem] translate-y-[23px]">
      <UploadMemoryNicknameInput/>
      <UploadMemoryMessage/>
      </div>
    </>
  );
}
