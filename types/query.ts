export interface GetMemoryParams {
  momory_uuid: string;
  currentPage: number;
}

export interface CheckUserMemoryExistsParams {
  momory_uuid: string;
  user_id: number;
}

export interface UploadAndCreateMemoryParams {
  photo: File;
  momory_uuid: string;
  user_id: number;
  nickname: string;
  filter: string;
  message: string;
}

export interface DeleteMemoryParams {
  memory_id: number;
  image_path: string;
}

export interface CreateMomoryParams {
  user_id: number;
  momoryNickname: string;
  encryptedPassword: string;
}

export interface CheckMomoryParams {
  user_id: number;
}

export interface ReadMomoryParams {
  momory_uuid: string;
}

export interface CheckUserByEmailParams {
  email: string;
  social_type: "google" | "kakao" | "naver";
}
