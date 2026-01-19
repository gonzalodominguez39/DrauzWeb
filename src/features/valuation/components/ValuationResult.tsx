'use client';

import { motion } from 'framer-motion';

interface ValuationData {
    estimatedPrice: number;
    range: {
        min: number;
        max: number;
    };
    confidence: number;
    pricePerM2: number;
    marketTrend: 'up' | 'stable' | 'down';
}

interface ValuationResultProps {
    data: ValuationData;
    location: string;
}

export const ValuationResult = ({ data, location }: ValuationResultProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const trendColor = data.marketTrend === 'up' ? 'text-green-400' : data.marketTrend === 'down' ? 'text-red-400' : 'text-yellow-400';
    const trendBg = data.marketTrend === 'up' ? 'bg-green-500/10' : data.marketTrend === 'down' ? 'bg-red-500/10' : 'bg-yellow-500/10';

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#0a0a0a] border border-[#009B77]/20 rounded-3xl p-8 max-w-2xl mx-auto"
        >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Tasación de Propiedad</h2>
                <p className="text-white/60">{location}</p>
            </motion.div>

            {/* Main Price */}
            <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-[#009B77]/20 to-[#009B77]/5 border border-[#009B77]/30 rounded-2xl p-8 text-center mb-8"
            >
                <p className="text-white/60 text-sm font-medium mb-2">Valor Estimado</p>
                <h3 className="text-5xl font-bold text-[#009B77] mb-4">
                    €{data.estimatedPrice.toLocaleString('es-ES')}
                </h3>
                <p className="text-white/50 text-sm">Basado en análisis del mercado actual</p>
            </motion.div>

            {/* Range and Details Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Range */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <p className="text-white/60 text-sm font-medium mb-4">Rango de Precio</p>
                    <div className="space-y-3">
                        <div>
                            <p className="text-white/50 text-xs mb-1">Mínimo</p>
                            <p className="text-xl font-bold text-white">€{data.range.min.toLocaleString('es-ES')}</p>
                        </div>
                        <div>
                            <p className="text-white/50 text-xs mb-1">Máximo</p>
                            <p className="text-xl font-bold text-white">€{data.range.max.toLocaleString('es-ES')}</p>
                        </div>
                    </div>
                </div>

                {/* Price per m² */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <p className="text-white/60 text-sm font-medium mb-4">Precio por m²</p>
                    <div>
                        <p className="text-4xl font-bold text-[#009B77]">€{data.pricePerM2.toLocaleString('es-ES')}</p>
                        <p className="text-white/50 text-xs mt-2">En tu zona</p>
                    </div>
                </div>
            </motion.div>

            {/* Confidence and Trend */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Confidence */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <p className="text-white/60 text-sm font-medium mb-4">Confiabilidad</p>
                    <div className="mb-3">
                        <div className="text-3xl font-bold text-[#009B77]">{data.confidence}%</div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                            className="bg-[#009B77] h-2 rounded-full transition-all duration-500"
                            style={{ width: `${data.confidence}%` }}
                        />
                    </div>
                </div>

                {/* Market Trend */}
                <div className={`${trendBg} border border-white/10 rounded-2xl p-6`}>
                    <p className="text-white/60 text-sm font-medium mb-4">Tendencia del Mercado</p>
                    <div className="flex items-center gap-3">
                        <div className={`text-3xl font-bold ${trendColor}`}>
                            {data.marketTrend === 'up' ? '↑' : data.marketTrend === 'down' ? '↓' : '→'}
                        </div>
                        <div>
                            <p className={`font-bold capitalize ${trendColor}`}>
                                {data.marketTrend === 'up' ? 'Precios al Alza' : data.marketTrend === 'down' ? 'Precios a la Baja' : 'Estable'}
                            </p>
                            <p className="text-white/50 text-xs">Últimos 12 meses</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Info Box */}
            <motion.div
                variants={itemVariants}
                className="bg-[#009B77]/10 border border-[#009B77]/20 rounded-2xl p-6 text-center"
            >
                <p className="text-white/70 text-sm">
                    Esta tasación es una estimación basada en el análisis del mercado actual.
                    <br />
                    Para una valoración profesional oficial, contacta con nuestro equipo de expertos.
                </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 mt-8">
                <button className="flex-1 py-3 bg-[#009B77] text-white font-bold rounded-lg hover:bg-[#00b388] transition-colors">
                    Contactar Asesor
                </button>
                <button className="flex-1 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors">
                    Descargar Reporte
                </button>
            </motion.div>
        </motion.div>
    );
};
