/// <reference types="node" />
import { Cipher } from "./types.js";
export declare function blockDecrypt(cipher: Cipher, key: Buffer, iv: Buffer, data: Buffer): Buffer;
export declare function blockEncrypt(cipher: Cipher, key: Buffer, iv: Buffer, data: Buffer): Buffer;
