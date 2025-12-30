'use client';

import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';
import { FloatingMenu } from '@/shared/components/layout/FloatingMenu';
import { PropertyGrid } from '@/features/properties/components/PropertyGrid';
import { PropertyStats } from '@/features/properties/components/PropertyStats';
import { FeaturedCarousel } from '@/features/properties/components/FeaturedCarousel';
import { EmptyState } from '@/features/properties/components/EmptyState';
import { SearchBar } from '@/features/search/components/SearchBar';
import { QuickFilters } from '@/features/search/components/QuickFilters';
import { SortDropdown } from '@/features/search/components/SortDropdown';
import { useFilterPropertiesStore } from '@/features/search/hooks/useFilterPropertiesStore';
import { ButtonWpp } from '@/shared/components/layout/ButtonWpp';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/features/login/store/useAuthStore';
import Login from '@/features/login/Login';

export default function HomePage() {
    const { filteredProperties, properties, currentType } = useFilterPropertiesStore();
    const { authView } = useAuthStore();

    return (
        <>
            <div className="bg-[#121212] min-h-screen">
                <Header isSticky={true} />

                <main className="pt-24 pb-16 px-4 container mx-auto">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-white via-[#009B77] to-white/80 bg-clip-text text-transparent">
                            Encuentra tu hogar ideal
                        </h1>
                        <p className="text-white/60 text-lg max-w-2xl">
                            Explora las mejores propiedades disponibles en las zonas más exclusivas.
                            Casas, departamentos y más, todo en un solo lugar.
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-8"
                    >
                        <SearchBar />
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-10"
                    >
                        <PropertyStats />
                    </motion.div>

                    {/* Featured Carousel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-12"
                    >
                        <FeaturedCarousel properties={properties} />
                    </motion.div>

                    {/* Divider */}
                    <div className="border-t border-white/10 my-10" />

                    {/* All Properties Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {/* Section Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-1">
                                    {currentType === 'venta' ? 'Propiedades en Venta' : 'Propiedades en Alquiler'}
                                </h2>
                                <p className="text-white/50 text-sm">
                                    {filteredProperties.length} {filteredProperties.length === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}
                                </p>
                            </div>

                            <SortDropdown />
                        </div>

                        {/* Quick Filters */}
                        <div className="mb-6">
                            <QuickFilters />
                        </div>

                        {/* Property Grid or Empty State */}
                        {filteredProperties.length > 0 ? (
                            <PropertyGrid properties={filteredProperties} />
                        ) : (
                            <EmptyState />
                        )}
                    </motion.div>
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
