// app/providers.tsx
'use client'
import Login from '@/features/login/Login'
import { useAuthStore } from '@/features/login/store/useAuthStore'
import { Footer } from '@/shared/components/layout/Footer'
import { Header } from '@/shared/components/layout/header/Header'
import { ReactNode } from 'react'
import { useState } from 'react'

function Layout({ children }: { children: ReactNode }) {
    const { authView, onLoginClick } = useAuthStore()
    const [isCartOpen, setIsCartOpen] = useState(false)

    const toggleCart = () => setIsCartOpen(!isCartOpen)

    return (
        <div >
            <Header
                onLoginClick={onLoginClick}
                isSticky={false}
                isCartOpen={isCartOpen}
                toggleCart={toggleCart}
            />
            {children}
            {authView !== 'none' && (
                <Login authView={authView} />
            )}
            <Footer />
        </div>
    )
}
export default Layout