export interface IAuth {
    username: string;
    refreshToken: string;
    accessToken: string;
    isLoggedIn: boolean;
}

export interface IAction{
    type: string;
    payload?: any;
}