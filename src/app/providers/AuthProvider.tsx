'use client';

import { ReactNode } from 'react';
import Login from '@/features/login/Login';
import { useAuthStore } from '@/features/login/store/useAuthStore';
import { ButtonWpp } from '@/shared/components/layout/ButtonWpp';
import { Toaster } from 'sonner';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { authView } = useAuthStore();

  return (
    <>
      {children}
      
      {/* Login Modal Global */}
      <Login authView={authView} />
      
      {/* Global UI Components */}
      <ButtonWpp />
      <Toaster />
    </>
  );
}
