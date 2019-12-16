export interface IAuth {
    username: string;
    refreshToken: string;
    accessToken: string;
}

export interface IAction{
    type: string;
    payload?: any;
}