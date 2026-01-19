'use client';

import { PropertyGrid } from '@/features/properties/components/PropertyGrid';
import { FeaturedCarousel } from '@/features/properties/components/FeaturedCarousel';
import { EmptyState } from '@/features/properties/components/EmptyState';
import { SearchBar } from '@/features/search/components/SearchBar';
import { QuickFilters } from '@/features/search/components/QuickFilters';
import { SortDropdown } from '@/features/search/components/SortDropdown';
import { useFilterPropertiesStore } from '@/features/search/hooks/useFilterPropertiesStore';

import { motion } from 'framer-motion';

import { useEffect } from 'react';

export default function SalesPage() {
    const { filteredProperties, setSearchType, onFilterActive } = useFilterPropertiesStore();

    useEffect(() => {
        setSearchType('venta');
    }, [setSearchType]);

    return (
        <div className="bg-[#121212] min-h-screen">
            <main className="pt-24 mt-10 pb-16 px-4 container mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Propiedades en Venta
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl">
                        Descubre nuestra exclusiva selección de propiedades disponibles para la venta.
                        Encuentra el hogar de tus sueños o tu próxima inversión.
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

           
                {/* Featured Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-12"
                >
                    <FeaturedCarousel properties={filteredProperties} />
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
                                {onFilterActive ? 'Resultados de Búsqueda' : 'Catálogo de Ventas'}
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
        </div>
    );
}
