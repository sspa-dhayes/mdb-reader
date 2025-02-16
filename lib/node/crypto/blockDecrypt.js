import { createDecipheriv } from "../environment/index.js";
export function blockDecrypt(cipher, key, iv, data) {
    const algorithm = `${cipher.algorithm}-${key.length * 8}-${cipher.chaining.slice(-3)}`;
    const decipher = createDecipheriv(algorithm, key, iv);
    decipher.setAutoPadding(false);
    return decipher.update(data);
}
export function blockEncrypt(cipher, key, iv, data) {
    const algorithm = `${cipher.algorithm}-${key.length * 8}-${cipher.chaining.slice(-3)}`;
    const decipher = createDecipheriv(algorithm, key, iv);
    decipher.setAutoPadding(false);
    return decipher.update(data);
}
