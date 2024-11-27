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

interface UploadPhotoHeaderProps {
    page: "upload_photo";
    handleNext: () => void;
    handlePrev: () => void;
}

interface SelectFilterHeaderProps {
    page: "select_filter";
    handleNext: () => void;
    handlePrev: () => void;
}

interface CreateNicknameAndMessageHeaderProps {
    page: "create_nicknameAndmessage";
    handleSubmit: () => void;
    handlePrev: () => void;
  };
export type HeaderProps = CreateNicknameHeaderProps | CreatePasswordHeaderProps | EnterPasswordHeaderProps | UploadPhotoHeaderProps | SelectFilterHeaderProps | CreateNicknameAndMessageHeaderProps;