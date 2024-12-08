import axios from "axios";
import toast from "react-hot-toast";

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://www.momory.kr"
      : "http://localhost:3000",
  withCredentials: true,
});

// 액세스 토큰 만료시 리프레시 토큰으로 재발급 후 재요청
api.interceptors.response.use(
  // 응답 성공 시
  (response) => response,
  // 응답 에러 시(토큰 만료 케이스만 처리)
  async (error) => {
    const originalRequest = error.config;
    // access_token 만료 시
    if (
      error.response?.status === 401 &&
      error.response?.data.error === "access_token expired"
    ) {
      try {
        // refresh_token으로 access_token 재발급
        const refreshResponse = await api.get("/api/v1/refresh");
        // access_token 발급 성공 시 재요청
        if (refreshResponse.status === 200) {
          return api(originalRequest);
        }
      } catch (refreshError) {
        // access_token 재발급 실패 시
        console.log(refreshError);
        toast.error("다시 로그인해주세요😌", {
          style: {
            height: "65px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "gray",
            textAlign: "center",
          },
          duration: 2000
        })
        window.location.href = "/?auth_error=unauthorized";
      }
    }
    // access_token 만료 이외의 모든 에러 발생 시 각 지점으로 전파
    return Promise.reject(error);
  },
);
