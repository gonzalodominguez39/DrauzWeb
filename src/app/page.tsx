'use client';
import { LandingPage } from '@/features/landing/LandingPage';

import Login from '@/features/login/Login';
import { useAuthStore } from '@/features/login/store/useAuthStore';


const Page = () => {
  const { authView } = useAuthStore();
    return (
    <div><LandingPage />
    
        {/* Login Modal */}
        {authView && <Login authView={authView} />}
    </div>
  )
}

export default Page;