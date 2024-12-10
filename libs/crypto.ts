import CryptoJS from 'crypto-js';

// 암호화할 데이터
const secretKey = process.env.CRYPTO_SECRET_KEY as string;

// 암호화 함수
export const encryptPassword = (password: string): string => {
    return CryptoJS.AES.encrypt(password, secretKey).toString();
  };
  
  // 복호화 함수
  export const decryptPassword = (encryptedPassword: string): string => {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8); // 복호화된 문자열 반환
  };

  // 비밀번호 확인 함수
export const comparePassword = (enteredPassword: string, encryptedPassword: string): boolean => {
  // 입력된 비밀번호를 복호화된 DB 비밀번호와 비교
  const decryptedPassword = decryptPassword(encryptedPassword);
  return enteredPassword === decryptedPassword;
};