// /types/error.ts
export type ErrorType = 'auth' | 'server';

export type ErrorCode = 'kakao_auth' | 'google_auth' | 'naver_auth' | 'server_error'; 

export type ErrorMessages = Record<ErrorCode, string>