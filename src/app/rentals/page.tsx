'use client';

import { PropertyGrid } from '@/features/properties/components/PropertyGrid';
import { PropertyStats } from '@/features/properties/components/PropertyStats';
import { FeaturedCarousel } from '@/features/properties/components/FeaturedCarousel';
import { EmptyState } from '@/features/properties/components/EmptyState';
import { SearchBar } from '@/features/search/components/SearchBar';
import { QuickFilters } from '@/features/search/components/QuickFilters';
import { SortDropdown } from '@/features/search/components/SortDropdown';
import { useFilterPropertiesStore } from '@/features/search/hooks/useFilterPropertiesStore';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function RentalsPage() {
    const { filteredProperties, setSearchType } = useFilterPropertiesStore();

    useEffect(() => {
        setSearchType('alquiler');
    }, [setSearchType]);

    // Get rental-specific stats
    const rentalStats = filteredProperties.filter(p => p.isRental);

    return (
        <div className="bg-[#121212] min-h-screen">
            <main className="pt-24 pb-16 px-4 container mx-auto">
                {/* Hero Section - Clean & Modern */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold mb-6 bg-linear-to-r from-white via-[#009B77] to-white/80 bg-clip-text text-transparent"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Alquiler
                    </motion.h1>

                    <motion.p
                        className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Encuentra tu hogar ideal con la tranquilidad de propiedades verificadas
                        y procesos simplificados.
                    </motion.p>

                    {/* Key Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex justify-center gap-12 mb-12"
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#009B77]">{rentalStats.length}</div>
                            <div className="text-sm text-white/50">Propiedades</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#009B77]">24h</div>
                            <div className="text-sm text-white/50">Respuesta</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#009B77]">100%</div>
                            <div className="text-sm text-white/50">Verificadas</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Search Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-12"
                >
                    <SearchBar />
                </motion.div>

                {/* Stats Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-12"
                >
                    <PropertyStats />
                </motion.div>

                {/* Featured Properties */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-16"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Propiedades Destacadas</h2>
                        <p className="text-white/60">Selección premium de propiedades para alquilar</p>
                    </div>
                    <FeaturedCarousel properties={rentalStats} />
                </motion.div>

                {/* Properties Catalog */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">Todas las Propiedades</h3>
                            <p className="text-white/50 text-sm">{rentalStats.length} propiedades disponibles</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <QuickFilters />
                            <SortDropdown />
                        </div>
                    </div>

                    {rentalStats.length > 0 ? (
                        <PropertyGrid properties={rentalStats} />
                    ) : (
                        <EmptyState />
                    )}
                </motion.div>
            </main>
        </div>
    );
}