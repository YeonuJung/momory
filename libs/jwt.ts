import * as jose from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

interface signTokenParams {
  user_id: number;
  momory_uuid?: string;
}
export const signAccessToken = async ({user_id, momory_uuid}: signTokenParams) => {
  return new jose.SignJWT({ user_id, type: "access", momory_uuid })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("1hour")
    .sign(secret);
};

export const verifyAccessToken = async (token: string) => {
  try {
    const { payload } = await jose.jwtVerify(token, secret);

    if (payload.type !== "access") {
      return {
        ok: false,
        error: "Invalid token",
      };
    }

    return {
      ok: true,
      payload,
    };
  } catch (e: any) {
    if (e.code === "ERR_JWT_EXPIRED") {
      return {
        ok: false,
        error: e.code,
        message: e.reason,
        expireAt: new Date(e.payload.exp * 1000),
      };
    }
    if (e.code === "ERR_JWT_INVALID") {
      return {
        ok: false,
        error: e.code,
        message: e.reason,
      };
    }
    if (e.code === "ERR_JWT_CLAIM_VALIDATION_FAILED") {
      return {
        ok: false,
        error: e.code,
        message: e.reason,
      };
    }
    return {
      ok: false,
      error: e,
    };
  }
};

export const signRefreshToken = async ({user_id, momory_uuid}: signTokenParams ) => {
  return new jose.SignJWT({ user_id, type: "refresh", momory_uuid })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("30d")
    .sign(secret);
};

export const verifyRefreshToken = async (token: string) => {
  try {
    const { payload } = await jose.jwtVerify(token, secret);

    if (payload.type !== "refresh") {
      return {
        ok: false,
        error: "Invalid token",
      };
    }

    return {
      ok: true,
      payload,
    };
  } catch (e: any) {
    if (e.code === "ERR_JWT_EXPIRED") {
      return {
        ok: false,
        error: e.code,
        message: e.reason,
        expireAt: new Date(e.payload.exp * 1000),
      };
    }
    if (e.code === "ERR_JWT_INVALID") {
      return {
        ok: false,
        error: e.code,
        message: e.reason,
      };
    }
    if (e.code === "ERR_JWT_CLAIM_VALIDATION_FAILED") {
      return {
        ok: false,
        error: e.code,
        message: e.reason,
      };
    }
    return {
      ok: false,
      error: e,
    };
  }
};
