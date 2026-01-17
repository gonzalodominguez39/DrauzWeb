// app/providers.tsx
'use client'
import { Footer } from '@/shared/components/layout/Footer'

import { ReactNode } from 'react'


function Layout({ children }: { children: ReactNode }) {
  
    return (
        <div >    
            {children}
            <Footer />
        </div>
    )
}
export default Layout