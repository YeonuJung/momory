import { request } from "../../libs/axios";

export const getMemory = async () => {
  const response = await request.get("/api/v1/memory");
  return response.data;
};
