import jwt from 'jsonwebtoken';

const privateKey = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');

export function signJWT(object: Object, options?: jwt.SignOptions | undefined) {
    return jwt.sign(object, privateKey, {...(options && options), algorithm: 'RS256'});
}

export function verifyJWT(token: string) {
    try {
        const decoded = jwt.verify(token, privateKey);
        return {
            valid: true,
            expired: false,
            decoded
        }
    } catch (e: any) {
        return {
            valid: false,
            expired: e.message === 'jwt expired',
            decoded: null
        }
    }
}