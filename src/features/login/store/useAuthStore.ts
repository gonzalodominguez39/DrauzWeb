import { create } from "zustand";

import { User } from "@/app/api/domain/user";

type AuthView = "none" | "login" | "signup";

interface AuthState {
  authView: AuthView;
  user: User | null;
  isAuthenticated: boolean;
  setAuthView: (view: AuthView) => void;
  setUser: (user: User | null) => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
  onCloseClick: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  authView: "none",
  user: null,
  isAuthenticated: false,
  setAuthView: (view) => set({ authView: view }),
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  onLoginClick: () => set({ authView: "login" }),
  onSignupClick: () => set({ authView: "signup" }),
  onCloseClick: () => set({ authView: "none" }),
  logout: () => set({ user: null, isAuthenticated: false, authView: "none" }),
}));
