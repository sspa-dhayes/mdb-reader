/// <reference types="node" />
/**
 * Can probably be replaced with `crypto.webcrypto.subtle.derivekey(...)` once node 14 support is dropped
 */
export declare function deriveKey(password: Buffer, blockBytes: Buffer, algorithm: string, salt: Buffer, iterations: number, keyByteLength: number): Buffer;