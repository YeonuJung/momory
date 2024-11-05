import axios from "axios"

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  withCredentials: true,
});

// 401 에러 발생 시 리프레시 토큰으로 재발급 후 재요청
request.interceptors.response.use(
  // 응답 성공 시
  (response) => response,
  // 응답 에러 시
  async (error) => {
    console.log(error.response?.status);
    const originalRequest = error.config;
    // 401 에러 발생 및 access_token 만료 시
    if (error.response?.status === 401 && error.response?.data.error === "access_token expired") {
      try {
        // refresh_token으로 access_token 재발급
        const refreshResponse = await request.get("/api/v1/refresh");
        // access_token 발급 성공 시 재요청
        if (refreshResponse.status === 200) {
          return request(originalRequest);
        }
      } // access_token 재발급 실패 시 
        catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    // access_token 만료 이외의 에러 발생 시
    return Promise.reject(error);
  }
);  