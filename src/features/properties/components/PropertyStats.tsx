'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useFilterPropertiesStore } from '@/features/search/hooks/useFilterPropertiesStore';

interface AnimatedCounterProps {
    value: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

const AnimatedCounter = ({ value, duration = 1.5, suffix = '', prefix = '' }: AnimatedCounterProps) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(0, value, {
            duration,
            onUpdate: (latest) => setDisplayValue(Math.round(latest)),
        });
        return () => controls.stop();
    }, [value, duration]);

    return (
        <span className="tabular-nums">
            {prefix}{displayValue.toLocaleString('es-ES')}{suffix}
        </span>
    );
};

export const PropertyStats = () => {
    const { getStats, filteredProperties, currentType } = useFilterPropertiesStore();
    const stats = getStats();

    const statItems = [
        {
            label: 'Propiedades',
            value: stats.total,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9,22 9,12 15,12 15,22" />
                </svg>
            ),
            color: 'from-[#009B77] to-[#00d9a5]',
        },
        {
            label: 'En Venta',
            value: stats.forSale,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                </svg>
            ),
            color: 'from-blue-500 to-blue-400',
        },
        {
            label: 'En Alquiler',
            value: stats.forRent,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            ),
            color: 'from-purple-500 to-purple-400',
        },
        {
            label: 'Resultados',
            value: filteredProperties.length,
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>
            ),
            color: 'from-amber-500 to-amber-400',
            highlight: true,
        },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statItems.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`relative overflow-hidden rounded-2xl p-4 ${stat.highlight
                            ? 'bg-gradient-to-br from-[#009B77]/20 to-[#009B77]/5 border border-[#009B77]/30'
                            : 'bg-white/5 border border-white/10'
                        }`}
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">
                                {stat.label}
                            </p>
                            <p className={`text-2xl md:text-3xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>
                                <AnimatedCounter value={stat.value} />
                            </p>
                        </div>
                        <div className={`p-2 rounded-lg bg-linear-to-br ${stat.color} bg-opacity-20`}>
                            <div className="text-white/80">
                                {stat.icon}
                            </div>
                        </div>
                    </div>

                    {/* Decorative gradient */}
                    <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-linear-to-br ${stat.color} opacity-10 blur-2xl`} />
                </motion.div>
            ))}
        </div>
    );
};
