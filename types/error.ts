// /types/error.ts
export type ErrorType = 'auth' | 'server';

export type ErrorCode = {
    auth: 'kakao_auth';      
    server: 'server_error';  
  };


export type ErrorMessages = {
  [Type in keyof ErrorCode]: {
    [Code in ErrorCode[Type]]: string;
  }
};