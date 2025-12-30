'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Property } from '../types/property.types';

interface FeaturedCarouselProps {
    properties: Property[];
}

export const FeaturedCarousel = ({ properties }: FeaturedCarouselProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Filter only featured properties (with badges)
    const featured = properties.filter(p => p.badge);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
            setTimeout(checkScroll, 300);
        }
    };

    if (featured.length === 0) return null;

    return (
        <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Propiedades Destacadas</h2>
                    <p className="text-white/50 text-sm">Las mejores oportunidades seleccionadas</p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`p-2 rounded-full border transition-all duration-300 ${canScrollLeft
                                ? 'border-white/20 text-white hover:bg-white/10'
                                : 'border-white/10 text-white/30 cursor-not-allowed'
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`p-2 rounded-full border transition-all duration-300 ${canScrollRight
                                ? 'border-white/20 text-white hover:bg-white/10'
                                : 'border-white/10 text-white/30 cursor-not-allowed'
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {featured.map((property, index) => (
                    <motion.div
                        key={property.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex-shrink-0 w-[320px] md:w-[380px]"
                    >
                        <Link href={`/properties/${property.id}`}>
                            <div className="group relative h-[280px] rounded-2xl overflow-hidden cursor-pointer">
                                {/* Image */}
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${property.badge === 'NUEVA' ? 'bg-[#009B77] text-white' :
                                            property.badge === 'OPORTUNIDAD' ? 'bg-amber-500 text-black' :
                                                property.badge === 'EXCLUSIVA' ? 'bg-purple-500 text-white' :
                                                    'bg-red-500 text-white'
                                        }`}>
                                        {property.badge}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <p className="text-white/60 text-sm mb-1 flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        {property.location}
                                    </p>
                                    <h3 className="text-white font-semibold text-lg mb-3 line-clamp-1 group-hover:text-[#009B77] transition-colors">
                                        {property.title}
                                    </h3>

                                    <div className="flex items-center justify-between">
                                        <p className="text-2xl font-bold text-[#009B77]">
                                            €{property.price.toLocaleString('es-ES')}
                                            {property.isRental && <span className="text-sm font-normal text-white/50">/mes</span>}
                                        </p>

                                        <div className="flex items-center gap-3 text-white/60 text-sm">
                                            <span className="flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
                                                </svg>
                                                {property.bedrooms}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                                                    <line x1="10" x2="8" y1="5" y2="7" /><line x1="2" x2="22" y1="12" y2="12" /><line x1="7" x2="7" y1="19" y2="21" /><line x1="17" x2="17" y1="19" y2="21" />
                                                </svg>
                                                {property.bathrooms}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                {property.area}m²
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-[#009B77]/0 group-hover:bg-[#009B77]/10 transition-colors duration-300" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
