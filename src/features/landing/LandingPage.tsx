
'use client';
import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';
import { FloatingMenu } from '@/shared/components/layout/FloatingMenu';
import { HeroSection } from './components/HeroSection';
import { CTASection } from './components/CTASection';
import { PropertyGrid } from '@/features/properties/components/PropertyGrid';
import { HERO_BACKGROUND_IMAGE } from '@/config/constants';
import { useFilterPropertiesStore } from '@/features/search/hooks/useFilterPropertiesStore';
import Login from '../login/Login';
import { ButtonWpp } from '@/shared/components/layout/ButtonWpp';
import { useAuthStore } from '../login/store/useAuthStore';





export const LandingPage = () => {
  const { filteredProperties } = useFilterPropertiesStore();
  const { authView, onLoginClick } = useAuthStore();

  return (
    <>

      <div style={{
        backgroundImage: `linear-gradient(to top, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 0.7) 70%, rgba(18, 18, 18, 0.3) 100%), url("${HERO_BACKGROUND_IMAGE}")`
      }}>
        <Header onLoginClick={onLoginClick} />
        <HeroSection />
      </div>
      <main>
        <PropertyGrid properties={filteredProperties} />
        <CTASection />
      </main>
      <div className="flex flex-col  right-4 z-50">

        <FloatingMenu />
        <ButtonWpp />
      </div>
      <Footer />

      authView && <Login authView={authView} />




    </>
  );
};
