import * as jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET_KEY as string;

export const sign = (id: number) => {
    return jwt.sign({id, type: "access"}, secret, {expiresIn: '1h'})
}

export const verify = (token: string) => {
    let decoded = null;
    try{
        decoded = jwt.verify(token, secret) as {id: number, type: string}
        return {
            ok: true,
            id: decoded.id,
            type: decoded.type
        }
    } catch(e){
        return{
            ok: false,
            id: null,
            error: e
        }
    }
}

export const verifyRefresh = (token: string) => {
    let decoded = null;
    try{
        decoded = jwt.verify(token, secret) as {id: number, type: string}
        if(decoded.type !== "refresh"){
            return {
                ok: false,
                id: null,
                error: "invalid token"
            }
        }
        return {
            ok: true,
            id: decoded.id,
            type: decoded.type

        }
    }catch(e){
        return{
            ok: false,
            id: null,
            error: e
        }
    }
}

export const refresh = (id: number) => {
    return jwt.sign({id, type: "refresh"}, secret, {expiresIn: '30d'})
}