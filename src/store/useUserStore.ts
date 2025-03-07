import { create } from 'zustand';
import { IUseUserStore } from './interface';

const useUserStore = create<IUseUserStore>()((set) => ({
    isAuth: false,

    checkIsAuth: () => {
        set({ isAuth: !!localStorage.getItem('token') });
    },

    loginAuth: (token: string) => {
        localStorage.setItem('token', token);
        set({ isAuth: true });
    },

    logout: () => {
      localStorage.removeItem('token');
      set({ isAuth: false });
    },
}))

export default useUserStore;