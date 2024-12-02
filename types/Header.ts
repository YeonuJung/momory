interface CreateNicknameHeaderProps {
  page: "create_nickname";
  handleNext: () => void;
}

interface CreatePasswordHeaderProps{
  page: "create_password";
  handleSubmit: () => void;
  handlePrev: () => void;
}

interface EnterPasswordHeaderProps {
    page: "enter_password";
    handleSubmit: () => void;
}

interface UploadMemoryPhotoHeaderProps {
    page: "upload_memory_photo";
    handleNext: () => void;
    handlePrev: () => void;
}

interface SelectFilterHeaderProps {
    page: "select_filter";
    handleNext: () => void;
    handlePrev: () => void;
}

interface UploadMemoryCredentialHeaderProps {
    page: "upload_memory_credential";
    handleSubmit: () => void;
    handlePrev: () => void;
  };
export type HeaderProps = CreateNicknameHeaderProps | CreatePasswordHeaderProps | EnterPasswordHeaderProps | UploadMemoryPhotoHeaderProps | SelectFilterHeaderProps | UploadMemoryCredentialHeaderProps;