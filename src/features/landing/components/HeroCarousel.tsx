'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/features/properties/types/property.types';
import { featuredProperties } from '@/features/properties/data/mockProperties';
import { SearchBar } from '@/features/search/components/SearchBar';

export const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Get top 5 properties for the carousel
    const heroProperties = featuredProperties.slice(0, 5);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % heroProperties.length);
    }, [heroProperties.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + heroProperties.length) % heroProperties.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    const currentProperty = heroProperties[currentIndex];

    return (
        <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
            {/* Background Images */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={currentProperty.image}
                        alt={currentProperty.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-[#121212]/30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
                <div className="max-w-3xl">
                    {/* Property Badge */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`badge-${currentIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="mb-4"
                        >
                            {currentProperty.badge && (
                                <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider ${currentProperty.badge === 'NUEVA' ? 'bg-[#009B77] text-white' :
                                    currentProperty.badge === 'OPORTUNIDAD' ? 'bg-amber-500 text-black' :
                                        currentProperty.badge === 'EXCLUSIVA' ? 'bg-purple-500 text-white' :
                                            'bg-red-500 text-white'
                                    }`}>
                                    {currentProperty.badge}
                                </span>
                            )}
                            <span className="ml-3 text-white/50 text-sm">
                                {currentProperty.forSale ? 'En Venta' : 'En Alquiler'}
                            </span>
                        </motion.div>
                    </AnimatePresence>

                    {/* Title */}
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`title-${currentIndex}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                        >
                            {currentProperty.title}
                        </motion.h1>
                    </AnimatePresence>

                    {/* Location */}
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={`location-${currentIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-white/70 text-lg md:text-xl mb-6 flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            {currentProperty.location}
                        </motion.p>
                    </AnimatePresence>

                    {/* Price and Features */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`details-${currentIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap items-center gap-6 mb-8"
                        >
                            <p className="text-4xl md:text-5xl font-bold text-[#009B77]">
                                €{currentProperty.price.toLocaleString('es-ES')}
                                {currentProperty.isRental && <span className="text-lg font-normal text-white/50">/mes</span>}
                            </p>

                            <div className="flex items-center gap-4 text-white/70">
                                <span className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
                                    </svg>
                                    {currentProperty.bedrooms} hab.
                                </span>
                                <span className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                                        <line x1="10" x2="8" y1="5" y2="7" /><line x1="2" x2="22" y1="12" y2="12" /><line x1="7" x2="7" y1="19" y2="21" /><line x1="17" x2="17" y1="19" y2="21" />
                                    </svg>
                                    {currentProperty.bathrooms} baños
                                </span>
                                <span className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                                    {currentProperty.area} m²
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Link href={`/properties/${currentProperty.id}`}>
                            <button className="px-8 py-4 bg-[#009B77] text-white font-bold rounded-xl hover:bg-[#00b388] transition-all duration-300 shadow-lg shadow-[#009B77]/30 flex items-center gap-2 group">
                                Ver Propiedad
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 max-w-4xl"
                >
                    <SearchBar />
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <button
                    onClick={prevSlide}
                    className="pointer-events-auto p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white hover:bg-black/50 transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="pointer-events-auto p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white hover:bg-black/50 transition-all duration-300"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {heroProperties.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 ${index === currentIndex
                            ? 'w-10 h-2 bg-[#009B77] rounded-full'
                            : 'w-2 h-2 bg-white/30 hover:bg-white/50 rounded-full'
                            }`}
                    />
                ))}
            </div>

        </section>
    );
};
