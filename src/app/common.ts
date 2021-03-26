export interface APIResult {
    status: string;
    message: string;
    result: any;
}
export interface HttpParameters {
    key: any;
    value: any;
}

export interface SocketData {
    message: string;
    payload: any;
}

export interface Notification {
    title: string;
    body: string;
}

/**
 * https://medium.com/@katbusch/typescript-enums-explained-e5f9a101afc9
 */
export enum Roles {
    SUPER_ADMIN = 1,
    ADMIN = 2
}