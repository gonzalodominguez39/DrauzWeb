'use client';

import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';
import { FloatingMenu } from '@/shared/components/layout/FloatingMenu';
import { PropertyGrid } from '@/features/properties/components/PropertyGrid';
import { useFilterPropertiesStore } from '@/features/search/hooks/useFilterPropertiesStore';
import { ButtonWpp } from '@/shared/components/layout/ButtonWpp';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/features/login/store/useAuthStore';
import Login from '@/features/login/Login';

export default function HomePage() {
    const { filteredProperties } = useFilterPropertiesStore();
    const { authView } = useAuthStore();

    return (
        <>
            <div className="bg-[#121212] min-h-screen">
                <Header isSticky={true} />

                <main className="pt-24 pb-16 px-4 container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-white via-[#009B77] to-white/80 bg-clip-text text-transparent">
                            Bienvenido a tu hogar
                        </h1>
                        <p className="text-white/60 text-lg">
                            Explora las mejores propiedades seleccionadas para ti
                        </p>
                    </motion.div>

                    <PropertyGrid properties={filteredProperties} />
                </main>

                <div className="flex flex-col right-4 z-50">
                    <FloatingMenu />
                    <ButtonWpp />
                </div>
                <Footer />
                {authView !== 'none' && <Login authView={authView} />}
            </div>
        </>
    );
}
