/// <reference types="node" />
export interface CodecHandler {
    decryptPage: DecryptPage;
    verifyPassword: VerifyPassword;
}
export declare type DecryptPage = (pageBuffer: Buffer, pageIndex: number) => Buffer;
export declare type VerifyPassword = () => boolean;
