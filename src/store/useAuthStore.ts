import { create } from 'zustand';

type AuthState = {
  user: { email: string; name: string } | null;
  setUser: (user: AuthState['user']) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
