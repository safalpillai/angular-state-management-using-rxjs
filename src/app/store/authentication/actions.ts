import { IAuth } from 'src/app/models/authentication.model';

export enum AuthActions {
    LOGIN = '[AUTH] login',
    LOGOUT = '[AUTH] logout',
}

export class Login{
    static readonly type = AuthActions.LOGIN;
    constructor(payload: IAuth) {}
}

export class Logout {
    static readonly type = AuthActions.LOGOUT;
}