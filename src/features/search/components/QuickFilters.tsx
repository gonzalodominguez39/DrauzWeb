'use client';

import { motion } from 'framer-motion';
import { useFilterPropertiesStore } from '../hooks/useFilterPropertiesStore';

export const QuickFilters = () => {
    const { quickFilters, toggleQuickFilter, reset } = useFilterPropertiesStore();
    const hasActiveFilters = quickFilters.some(f => f.active);

    return (
        <div className="flex flex-wrap gap-2 items-center">
            {quickFilters.map((filter, index) => (
                <motion.button
                    key={filter.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => toggleQuickFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter.active
                            ? 'bg-[#009B77] text-white border-[#009B77] shadow-lg shadow-[#009B77]/25'
                            : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                        }`}
                >
                    {filter.label}
                </motion.button>
            ))}

            {hasActiveFilters && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={reset}
                    className="px-4 py-2 rounded-full text-sm font-medium text-white/50 hover:text-white transition-colors flex items-center gap-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                    </svg>
                    Limpiar
                </motion.button>
            )}
        </div>
    );
};
