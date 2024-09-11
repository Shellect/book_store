
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';

export function encryptData(data) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, process.env.AUTH_SECRET, iv);
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

export function decryptData(encryptedData) {
    let textParts = encryptedData.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv(algorithm, process.env.AUTH_SECRET, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

function base64UrlEncode(data) {

}

function createToken() {
    const secret = process.env.AUTH_SECRET;
    const date = new Date();
    const iat = date.getTime();
    const exp = date.setMinutes(date.getMinutes() + 6);

    const header = {
        alg: "HS512",
        typ: "JWT"
    };
    const base64UrlHeader = Buffer
        .from(JSON.stringify(header))
        .toString('base64')
        .replaceAll('+', '-')
        .replaceAll('/', '_')
        .replaceAll('=', '');

    const payload = {
        iat, // the timestamp of token issuing.
        key: "A unique string, which could be used to validate a token, but goes against not having a centralized issuer authority.",
        iss: process.env.HOST, // a string containing the name or identifier of the issuer. Can be a domain name and can be used to discard tokens from other applications.
        nbf: "Not before. A timestamp of when the token should start being considered valid. Should be equal to or greater than iat.",
        exp, // Expire. A timestamp of when the token should cease to be valid. Should be greater than iat and nbf.
        sub: "Subject of a JWT payload. It contains unique information about the user and client device that has created this authentication request."
    }
    // const base64UrlPayload =

    const signature = crypto.createHmac('sha512', process.env.AUTH_SECRET)
        .update()
        .digest('hex');

    return header
}

function verifyToken() {
}

export default function hashPassword(password: string) {

}
