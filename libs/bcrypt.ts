import bcrypt from 'bcryptjs'

// 비밀번호 해싱(round: 10)
export const hashPassword = async (password: string) => {
  return bcrypt.hash(password, 10)
}
//  비밀번호 비교
export const comparePassword = async (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword)
}