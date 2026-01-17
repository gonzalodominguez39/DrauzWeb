'use client';

import { PropertyGrid } from '@/features/properties/components/PropertyGrid';
import { PropertyStats } from '@/features/properties/components/PropertyStats';
import { FeaturedCarousel } from '@/features/properties/components/FeaturedCarousel';
import { EmptyState } from '@/features/properties/components/EmptyState';
import { SearchBar } from '@/features/search/components/SearchBar';
import { QuickFilters } from '@/features/search/components/QuickFilters';
import { SortDropdown } from '@/features/search/components/SortDropdown';
import { useFilterPropertiesStore } from '@/features/search/hooks/useFilterPropertiesStore';
import { RentalCalculator } from '@/features/rentals/components/RentalCalculator';
import { NeighborhoodInsights } from '@/features/rentals/components/NeighborhoodInsights';
import { ContractDurationToggle } from '@/features/rentals/components/ContractDurationToggle';
import { SmartFilters } from '@/features/rentals/components/SmartFilters';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiTrendingUp, FiShield, FiMapPin, FiDollarSign } from 'react-icons/fi';

export default function RentalsPage() {
    const { filteredProperties, setSearchType } = useFilterPropertiesStore();
    const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);

    useEffect(() => {
        setSearchType('alquiler');
    }, [setSearchType]);

    // Get rental-specific stats
    const rentalStats = filteredProperties.filter(p => p.isRental);

    return (
        <div className="bg-[#121212] min-h-screen">
            <main className="pt-24 mt-10 pb-16 px-4 container mx-auto">
                {/* Hero Section with Innovation Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 via-[#009B77] to-blue-400 bg-clip-text text-transparent">
                            Alquiler Inteligente
                        </h1>
                        <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full">
                            <span className="text-blue-400 text-sm font-medium flex items-center gap-1">
                                <FiTrendingUp className="w-4 h-4" />
                                IA
                            </span>
                        </div>
                    </div>
                    <p className="text-white/60 text-lg max-w-2xl mb-4">
                        Descubre propiedades con herramientas avanzadas de matching inteligente,
                        cálculos automáticos y insights de barrio para tomar la mejor decisión.
                    </p>

                    {/* Smart Matching Banner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-[#009B77]/20 border border-blue-500/30 rounded-lg"
                    >
                        <FiShield className="w-5 h-5 text-blue-400" />
                        <span className="text-white/70 text-sm">
                            🧠 Matching inteligente basado en tu presupuesto y preferencias
                        </span>
                    </motion.div>
                </motion.div>

                {/* Smart Filters Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <SmartFilters />
                </motion.div>

                {/* Contract Duration Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="mb-8"
                >
                    <ContractDurationToggle />
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                >
                    <SearchBar />
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="mb-10"
                >
                    <PropertyStats />
                </motion.div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar with Tools */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        {/* Rental Calculator */}
                        <div className="bg-[#0a0a0a] rounded-xl border border-white/10 p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <FiDollarSign className="w-5 h-5 text-blue-400" />
                                <h3 className="text-white font-semibold">Calculadora</h3>
                            </div>
                            <RentalCalculator />
                        </div>

                        {/* Neighborhood Insights */}
                        {selectedNeighborhood && (
                            <div className="bg-[#0a0a0a] rounded-xl border border-white/10 p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <FiMapPin className="w-5 h-5 text-[#009B77]" />
                                    <h3 className="text-white font-semibold">Insights</h3>
                                </div>
                                <NeighborhoodInsights location={selectedNeighborhood} />
                            </div>
                        )}
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="lg:col-span-3"
                    >
                        {/* Featured Carousel */}
                        <div className="mb-12">
                            <FeaturedCarousel properties={rentalStats} />
                        </div>

                        {/* Divider */}
                        <div className="border-t border-white/10 my-10" />

                        {/* All Properties Section */}
                        <div>
                            {/* Section Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1">
                                        Catálogo de Alquileres
                                    </h2>
                                    <p className="text-white/50 text-sm">
                                        {rentalStats.length} {rentalStats.length === 1 ? 'propiedad disponible' : 'propiedades disponibles'}
                                    </p>
                                </div>

                                <SortDropdown />
                            </div>

                            {/* Quick Filters */}
                            <div className="mb-6">
                                <QuickFilters />
                            </div>

                            {/* Property Grid or Empty State */}
                            {rentalStats.length > 0 ? (
                                <PropertyGrid properties={rentalStats} />
                            ) : (
                                <EmptyState />
                            )}
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}