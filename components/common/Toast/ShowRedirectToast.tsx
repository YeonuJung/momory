'use client'

import ShowToast from "./ShowToast";

interface ShowRedirectToastProps {
    redirect_uri?: string;
}
export default function ShowRedirectToast({ redirect_uri }: ShowRedirectToastProps) {
  if (!redirect_uri) return null;
  return (
    <ShowToast 
      message={`로그인 하면 초대받은 모모리로\n 이동할 수 있어요!`}
      icon={"😘"}
    />
  )
}