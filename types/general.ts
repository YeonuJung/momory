import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface MomoryProps {
  readMomoryData: {
    created_at: string;
    nickname: string;
    password: string;
    user_id: number;
    uuid: string;
  }[];
  readMemoryData: {
    created_at: string;
    filter: string;
    id: number;
    image_path: string;
    message: string;
    momory_uuid: string;
    nickname: string;
    user_id: number;
  }[];
  memoryPublicUrlArray: string[];
  uuid: string;
  momory_uuid: string | undefined;
  isOwner: boolean;
  hasNextPage: boolean;
  hasMomory: boolean;
  currentPage: number;
  totalCount: number | null;
  user_id: number;
  hasPostedMemory: boolean;
  isAuthenticated?: string
}

type Action =
  | "go_to_my_momory"
  | "create_momory"
  | "share_momory"
  | "delete_memory"
  | "close_memory"
  | "leave_memory";

export type ActionParams = {
  // 공통으로 필요한 props
  action: Action;
  router: AppRouterInstance;
  // leave_memory에 필요한 props
  hasPostedMemory?: boolean
  // delete_memory에 필요한 props
  memoryId?: number;
  image_path?: string;
  uuid?: string;
  momory_uuid?: string;
  isAuthenticated?: string;
  nickname?: string;
  password?: string;
};
export interface ButtonProps {
  children: React.ReactNode;
  action:
    | "share_momory"
    | "create_momory"
    | "leave_memory"
    | "delete_memory"
    | "close_memory"
    | "go_to_my_momory";
  nickname?: string;
  memoryId?: number;
  image_path?: string;
  uuid?: string;
  momory_uuid?: string;
  password?: string;
}
export interface ButtonWithCaptionProps extends ButtonProps {
  caption: string;
  hasPostedMemory: boolean;
  isAuthenticated?: string;
}