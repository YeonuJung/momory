import axios from "axios"

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  withCredentials: true,
});

// 401 에러 발생 시 리프레시 토큰으로 재발급 후 재요청
request.interceptors.response.use(
  // Success handler (status 2xx)
  (response) => response,
  // Error handler
  async (error) => {
    console.log(error.response?.status);
    if (error.response?.status === 401 && error.response?.data.error === "access_token expired") {
      try {
        const refreshResponse = await request.get("/api/v1/refresh");
        if (refreshResponse.status === 200) {
          return request(error.config);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);