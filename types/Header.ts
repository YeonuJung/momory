interface BaseHeaderProps {
  setCurrentPage: (currentPage: string) => void;
}

interface CreateNicknameHeaderProps extends BaseHeaderProps {
  page: "create_nickname";
  momoryNickname: string;
}

interface CreatePasswordHeaderProps extends BaseHeaderProps {
  page: "create_password";
  momoryNickname: string;
  momoryPassword: string[];
}

interface EnterPasswordHeaderProps extends BaseHeaderProps {
    page: "enter_password";
    momoryPassword: string[];
}

interface UploadPhotoHeaderProps extends BaseHeaderProps {
    page: "upload_photo";
    memoryPhoto: {
    photo: File;
    previewUrl: string;
  };
}

interface SelectFilterHeaderProps extends BaseHeaderProps {
    page: "select_filter";
    memoryFilter: string;
}

interface CreateNicknameAndMessageHeaderProps extends BaseHeaderProps {
    page: "create_nicknameAndmessage";
    memoryPhoto: File;
    memoryFilter: string;
    memoryNicknameAndMessage: {
    nickname: string;
    message: string;
  };
}
export type HeaderProps = CreateNicknameHeaderProps | CreatePasswordHeaderProps | EnterPasswordHeaderProps | UploadPhotoHeaderProps | SelectFilterHeaderProps | CreateNicknameAndMessageHeaderProps;