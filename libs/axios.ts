import axios from "axios";
import toast from "react-hot-toast";

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://www.momory.kr"
      : "http://localhost:3000",
  withCredentials: true,
});

let isRefreshing = false;
interface FailedQueueItem {
  resolve: (value?: unknown) => void;
  reject: (reason?: any) => void;
}

let failedQueue: FailedQueueItem[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });
  failedQueue = [];
};
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
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return api(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      isRefreshing = true;

      try {
        const refreshResponse = await api.get("/api/v1/refresh");
        const newToken = refreshResponse.data?.access_token;

        if (refreshResponse.status === 200 && newToken) {
          processQueue(null, newToken);

          // 새 토큰으로 헤더 업데이트 후 재요청
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
          return api(originalRequest);
        } else {
          throw new Error("토큰 갱신 실패");
        }
      } catch (refreshError) {
        processQueue(refreshError, null);
        toast.error("다시 로그인해주세요😌", {
          style: {
            height: "65px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "gray",
            textAlign: "center",
          },
          duration: 2000,
        });
        window.location.href = "/?auth_error=unauthorized";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // access_token 만료 이외의 모든 에러 발생 시 각 지점으로 전파
    return Promise.reject(error);
  }
);