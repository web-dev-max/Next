export interface IUseUserStore {
    isAuth: boolean,
    checkIsAuth: () => void;
    loginAuth: (token: string) => void;
    logout: () => void;
}