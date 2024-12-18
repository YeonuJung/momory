"use client";

import { useEffect, useState } from "react";

// 디바운스 훅
// 의존성 배열에 callback이 들어가니 사용하는 곳에서 useCallback으로 감싸서 사용해야 함
export function useDebounce(callback: () => void, delay: number) {
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    if (isDebouncing) {
      const timer = setTimeout(async () => {
        callback();
        setIsDebouncing(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [callback, delay, isDebouncing]);

  return () => {
    if (!isDebouncing) {
      setIsDebouncing(true);
    }
  }
}
