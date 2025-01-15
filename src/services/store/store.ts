import { create } from "zustand";

interface MenuState {
    pathname: string;
    setPathname: (path: string) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
    sidebarOpen: true,
    pathname: "",
    setPathname: (path) => set(() => ({ pathname: path })),
}));