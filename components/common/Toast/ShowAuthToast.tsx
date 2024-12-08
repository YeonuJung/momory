'use client';

import { useSearchParams } from 'next/navigation';
import ShowToast from "./ShowToast";
import { ERROR_MESSAGES } from '@/constants/error';

interface ShowAuthToastProps {
 redirect_uri?: string;
}

export default function ShowAuthToast({ redirect_uri }: ShowAuthToastProps) {
 const searchParams = useSearchParams();
 const error = searchParams.get('error');
 const code = searchParams.get('code');
 const authError = searchParams.get('auth_error');

  // auth + code 에러 (소셜 로그인 실패, 서버 에러)
  if (error && code && code in ERROR_MESSAGES) {
    return (
      <ShowToast 
        message={ERROR_MESSAGES[code as keyof typeof ERROR_MESSAGES]} 
        type="error" 
      />
    );
  }

 // auth_error + redirect_uri가 같이 있는 경우
 if (authError === 'unauthorized' && redirect_uri) {
   return (
     <ShowToast
       message={`로그인 하면 초대받은 모모리로\n 이동할 수 있어요!`}
       icon="😘"
     />
   );
 }

 // auth_error만 있는 경우
 if (authError === 'unauthorized') {
   return (
     <ShowToast
       message="로그인이 필요한 서비스예요😌"
       type="error"
     />
   );
 }

 return null;
}