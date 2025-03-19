import { create } from 'zustand';
import { IUseUserStore } from './interface';
import client from '@/lib/apollo-client';

const useUserStore = create<IUseUserStore>()((set) => ({
    isAuth: false,
    user: null,

    setUser: (userData) => set({ user: userData }),

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
      client.clearStore();
    },
}))

export default useUserStore;