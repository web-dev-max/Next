export interface IUseUserStore {
    isAuth: boolean,
    setAuth: (auth: boolean) => void;
    checkIsAuth: () => void;
    loginAuth: (token: string) => void;
    logout: () => void;
}