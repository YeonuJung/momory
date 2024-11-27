export interface MomoryProps {
  readMomoryData:
    | {
        created_at: string;
        nickname: string;
        password: string;
        user_id: number;
        uuid: string;
      }[]
    | null;
  readMemoryData:
    | {
        created_at: string;
        filter: string;
        id: number;
        image_path: string;
        message: string;
        momory_uuid: string;
        nickname: string;
        user_id: number;
      }[]
    | null;
  user_id: number;
  uuid: string;
  isOwner: boolean;
  hasMomory: boolean;
}
