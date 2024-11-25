interface CreateNicknameHeaderProps {
  page: "create_nickname";
  momoryNickname: string;
  handleNext: () => void;
}

interface CreatePasswordHeaderProps{
  page: "create_password";
  momoryNickname: string;
  momoryPassword: string[];
  handleSubmit: () => void;
  handlePrev: () => void;
}

interface EnterPasswordHeaderProps {
    page: "enter_password";
    momoryPassword: string[];
    handleSubmit: () => void;
}

interface UploadPhotoHeaderProps {
    page: "upload_photo";
    memoryPhoto: {
    photo: File;
    previewUrl: string;
    handleNext: () => void;
    handlePrev: () => void;
  };
}

interface SelectFilterHeaderProps {
    page: "select_filter";
    memoryFilter: string;
    handleNext: () => void;
    handlePrev: () => void;
}

interface CreateNicknameAndMessageHeaderProps {
    page: "create_nicknameAndmessage";
    memoryPhoto: File;
    memoryFilter: string;
    memoryNicknameAndMessage: {
    nickname: string;
    message: string;
    handleSubmit: () => void;
    handlePrev: () => void;
  };
}
export type HeaderProps = CreateNicknameHeaderProps | CreatePasswordHeaderProps | EnterPasswordHeaderProps | UploadPhotoHeaderProps | SelectFilterHeaderProps | CreateNicknameAndMessageHeaderProps;