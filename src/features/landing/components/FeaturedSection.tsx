'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { featuredProperties } from '@/features/properties/data/mockProperties';

export const FeaturedSection = () => {
    // Get top 6 properties by highest price (sale properties first, then rentals)
    const topProperties = [...featuredProperties]
        .sort((a, b) => b.price - a.price)
        .slice(0, 6);

    return (
        <section className="bg-[#121212] py-20 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#009B77]/10 text-[#009B77] text-sm font-medium mb-4">
                        Propiedades Premium
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Propiedades Destacadas
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Descubre nuestras propiedades más exclusivas con el mayor valor del mercado
                    </p>
                </motion.div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {topProperties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/properties/${property.id}`}>
                                <div className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#009B77]/50 transition-all duration-300">
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={property.image}
                                            alt={property.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                                        {/* Badge */}
                                        {property.badge && (
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${property.badge === 'NUEVA' ? 'bg-[#009B77] text-white' :
                                                        property.badge === 'OPORTUNIDAD' ? 'bg-amber-500 text-black' :
                                                            property.badge === 'EXCLUSIVA' ? 'bg-purple-500 text-white' :
                                                                'bg-red-500 text-white'
                                                    }`}>
                                                    {property.badge}
                                                </span>
                                            </div>
                                        )}

                                        {/* Type Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm text-white">
                                                {property.forSale ? 'Venta' : 'Alquiler'}
                                            </span>
                                        </div>

                                        {/* Price */}
                                        <div className="absolute bottom-4 left-4">
                                            <p className="text-2xl font-bold text-white">
                                                €{property.price.toLocaleString('es-ES')}
                                                {property.isRental && <span className="text-sm font-normal text-white/70">/mes</span>}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#009B77] transition-colors line-clamp-1">
                                            {property.title}
                                        </h3>

                                        <p className="text-white/50 text-sm mb-4 flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            {property.location}
                                        </p>

                                        {/* Features */}
                                        <div className="flex items-center gap-4 text-white/60 text-sm">
                                            <span className="flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
                                                </svg>
                                                {property.bedrooms}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                                                    <line x1="10" x2="8" y1="5" y2="7" /><line x1="2" x2="22" y1="12" y2="12" /><line x1="7" x2="7" y1="19" y2="21" /><line x1="17" x2="17" y1="19" y2="21" />
                                                </svg>
                                                {property.bathrooms}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect width="18" height="18" x="3" y="3" rx="2" />
                                                    <path d="M3 9h18" /><path d="M9 21V9" />
                                                </svg>
                                                {property.area} m²
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Ver Más Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <Link href="/home">
                        <button className="group px-8 py-4 bg-transparent border-2 border-[#009B77] text-[#009B77] font-bold rounded-xl hover:bg-[#009B77] hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto">
                            Ver todas las propiedades
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
