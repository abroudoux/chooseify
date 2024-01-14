import { create } from "zustand";


const savedToken = localStorage.getItem('token');
const username = localStorage.getItem('username');

interface Store {
    token: boolean;
    isLoading: boolean;
    // username: string;
    signIn: () => void;
    signOut: () => void;
    setIsLoading: (value: boolean) => void;
    // setUsername: (value: string) => void;
};

const useStore = create<Store>((set) => ({
    token: savedToken ? JSON.parse(savedToken) : false,
    isLoading: false,
    // username: username ? JSON.parse(username) : '',
    signIn: () => {
        set({ token: true });
        localStorage.setItem('token', JSON.stringify(true));
    },
    signOut: () => {
        set({ token: false });
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    },
    setIsLoading: (value: boolean) => set({ isLoading: value }),
    // setUsername: (value: string) => {
    //     set({ username: value});
    //     localStorage.setItem('username', JSON.stringify(value));
    // },
}));


export default useStore;