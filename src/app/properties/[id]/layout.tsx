// app/providers.tsx
'use client'
import Login from '@/features/login/Login'
import useLogin from '@/features/login/hooks/useLogin'
import { Footer } from '@/shared/components/layout/Footer'
import { Header } from '@/shared/components/layout/Header'
import { FloatingMenu } from '@/shared/components/layout/FloatingMenu'
import { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
    const { authView, onLoginClick, onSignupClick, onCloseClick } = useLogin()

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-[#121212]">
            <Header onLoginClick={onLoginClick} />
            {children}
            {authView && (
                <Login
                    authView={authView}
                    onCloseClick={onCloseClick}
                    onLoginClick={onLoginClick}
                    onSignupClick={onSignupClick}
                />
            )}
            <Footer />
            <FloatingMenu />
        </div>
    )
}
export default Layout