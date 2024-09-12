import {randomBytes, scryptSync, timingSafeEqual} from "crypto";
import crypto from "crypto";
const algorithm = 'aes-256-ctr';

// For future use
export function encryptData(data) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, process.env.AUTH_SECRET, iv);
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}


// For future use
export function decryptData(encryptedData) {
    let textParts = encryptedData.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.shift(), 'hex');
    const decipher = crypto.createDecipheriv(algorithm, process.env.AUTH_SECRET, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

function base64UrlEncode(data: any) {
    return Buffer
        .from(JSON.stringify(data))
        .toString('base64')
        .replaceAll('+', '-')
        .replaceAll('/', '_')
        .replaceAll('=', '')
}

function base64UrlDecode(data: string) {
    return Buffer
        .from(
            data.replaceAll('-', '+').replaceAll('_', '/')
            + '='.repeat(4 - data.length % 4),
            'base64'
        )
        .toString('ascii')
}

function sign(unsignedToken: string) {
    return crypto.createHmac('sha256', process.env.AUTH_SECRET)
        .update(unsignedToken)
        .digest('base64')
        .replaceAll('+', '-')
        .replaceAll('/', '_')
        .replaceAll('=', '');
}

export function createToken() {
    // 1. Создаём header
    const header = {
        alg: "HS256",
        typ: "JWT"
    };
    const base64UrlHeader = base64UrlEncode(header);

    // 2. Создаём payload
    const date = new Date();
    const exp = date.setMinutes(date.getMinutes() + 6);
    const payload = {
        iat: date.getTime(), // the timestamp of token issuing.
        key: "A unique string, which could be used to validate a token, but goes against not having a centralized issuer authority.",
        iss: process.env.HOST, // a string containing the name or identifier of the issuer.
        // Can be a domain name and can be used to discard tokens from other applications.
        nbf: "Not before. A timestamp of when the token should start being considered valid. Should be equal to or greater than iat.",
        exp, // Expire. A timestamp of when the token should cease to be valid. Should be greater than iat and nbf.
        sub: "Subject of a JWT payload. It contains unique information about the user and client device that has created this authentication request."
    }
    const base64UrlPayload = base64UrlEncode(payload);

    // 3. Создаём signature
    const unsignedToken = base64UrlHeader + '.' + base64UrlPayload;
    const signature = sign(unsignedToken)

    return unsignedToken + '.' + signature;
}

export function verifyToken(token: string) {
    const [head, payload, signature] = token.split('.');
    return sign(head + '.' + payload) === signature;
}

export function hashPassword(password: string) {
    const salt = randomBytes(16).toString('hex');
    return scryptSync(password, salt, 64).toString('hex') + '.' + salt;
}

export function verifyPassword(password: string, hash: string) {
    const [storedHash, salt] = hash.split('.');
    const userHash = scryptSync(password, salt, 64);
     return timingSafeEqual(Buffer.from(storedHash, 'hex'), userHash);
}
