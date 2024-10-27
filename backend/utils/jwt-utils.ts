import * as jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
const secret = process.env.JWT_SECRET_KEY as string;

export const signAccessToken = (id: number) => {
  return jwt.sign({ id, type: "access" }, secret, {
    expiresIn: "1h",
    algorithm: "HS256",
  });
};

export const verifyAccessToken = (token: string) => {
  let decoded = null;
  try {
    decoded = jwt.verify(token, secret) as JwtPayload;
    // 토큰의 타입이 access가 아닐 때
    if (decoded.type !== "access") {
      return {
        ok: false,
        error: "Invalid token",
      };
    }
    // 토큰이 유효할 때
    return {
      ok: true,
      payload: decoded,
    };
  } catch (e) {
    // 토큰이 만료됐을 때
    if (e instanceof jwt.TokenExpiredError) {
      return {
        ok: false,
        name: e.name,
        message: 'jwt expired',
        expireAt: e.expiredAt,
      };
    }
    // 토큰이 변조됐을 때
    if (e instanceof jwt.JsonWebTokenError) {
      return {
        ok: false,
        name: e.name,
        error: e.message,
      };
    }
    // 토큰이 활성화되기 전일 때
    if (e instanceof jwt.NotBeforeError) {
      return {
        ok: false,
        name: e.name,
        error: e.message,
        date: e.date,
      };
    }
  }
};

export const signRefreshToken = (id: number) => {
  return jwt.sign({ id, type: "refresh" }, secret, {
    expiresIn: "30d",
    algorithm: "HS256",
  });
};

export const verifyRefreshToken = (token: string) => {
    let decoded = null;
    try {
      decoded = jwt.verify(token, secret) as JwtPayload;
      // 토큰의 타입이 refresh가 아닐 때
      if (decoded.type !== "refresh") {
        return {
          ok: false,
          error: "Invalid token",
        };
      }
      // 토큰이 유효할 때
      return {
        ok: true,
        payload: decoded,
      };
    } catch (e) {
      // 토큰이 만료됐을 때
      if (e instanceof jwt.TokenExpiredError) {
        return {
          ok: false,
          name: e.name,
          message: 'jwt expired',
          expireAt: e.expiredAt,
        };
      }
      // 토큰이 변조됐을 때
      if (e instanceof jwt.JsonWebTokenError) {
        return {
          ok: false,
          name: e.name,
          error: e.message,
        };
      }
      // 토큰이 활성화되기 전일 때
      if (e instanceof jwt.NotBeforeError) {
        return {
          ok: false,
          name: e.name,
          error: e.message,
          date: e.date,
        };
      }
    }
};
