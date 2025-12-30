'use client';

import { motion } from 'framer-motion';
import { useFilterPropertiesStore } from '@/features/search/hooks/useFilterPropertiesStore';

export const EmptyState = () => {
    const { reset, searchQuery, currentType, quickFilters } = useFilterPropertiesStore();
    const hasActiveFilters = quickFilters.some(f => f.active) || searchQuery;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 px-4"
        >
            {/* Illustration */}
            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="relative mb-8"
            >
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#009B77]/20 to-[#009B77]/5 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#009B77]/60">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9,22 9,12 15,12 15,22" />
                        <line x1="1" y1="1" x2="23" y2="23" className="stroke-white/30" />
                    </svg>
                </div>

                {/* Decorative circles */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#009B77]/20 animate-pulse" />
                <div className="absolute -bottom-1 -left-3 w-4 h-4 rounded-full bg-[#009B77]/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </motion.div>

            {/* Text */}
            <h3 className="text-2xl font-bold text-white mb-2 text-center">
                No encontramos propiedades
            </h3>
            <p className="text-white/50 text-center max-w-md mb-6">
                {hasActiveFilters ? (
                    <>
                        No hay propiedades que coincidan con tu búsqueda
                        {searchQuery && <span className="text-white/70"> "{searchQuery}"</span>}
                        {` en ${currentType === 'venta' ? 'venta' : 'alquiler'}`}.
                    </>
                ) : (
                    <>
                        No hay propiedades disponibles para {currentType === 'venta' ? 'venta' : 'alquiler'} en este momento.
                    </>
                )}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
                {hasActiveFilters && (
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={reset}
                        className="px-6 py-3 rounded-xl bg-[#009B77] text-white font-semibold hover:bg-[#00b388] transition-colors flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                            <path d="M3 3v5h5" />
                        </svg>
                        Limpiar filtros
                    </motion.button>
                )}

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                        reset();
                        const { setSearchType, currentType } = useFilterPropertiesStore.getState();
                        setSearchType(currentType === 'venta' ? 'alquiler' : 'venta');
                    }}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                    Ver {currentType === 'venta' ? 'alquileres' : 'propiedades en venta'}
                </motion.button>
            </div>

            {/* Suggestions */}
            <div className="mt-10 pt-8 border-t border-white/10 w-full max-w-md">
                <p className="text-white/40 text-sm text-center mb-4">Sugerencias:</p>
                <ul className="text-white/50 text-sm space-y-2">
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#009B77]">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                        Intenta con términos de búsqueda más amplios
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#009B77]">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                        Desactiva algunos filtros para ver más opciones
                    </li>
                    <li className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#009B77]">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                        Explora propiedades en otras zonas
                    </li>
                </ul>
            </div>
        </motion.div>
    );
};
