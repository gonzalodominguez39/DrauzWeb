'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiShield, FiClock, FiShoppingBag } from 'react-icons/fi';

interface NeighborhoodInsightsProps {
    location: string;
}

export const NeighborhoodInsights = ({ location }: NeighborhoodInsightsProps) => {
    // Mock data for neighborhood insights
    const insights = {
        security: { score: 8.5, label: 'Seguro' },
        transport: { score: 9.2, label: 'Excelente' },
        services: { score: 7.8, label: 'Bueno' },
        schools: { score: 8.9, label: 'Muy bueno' }
    };

    const getScoreColor = (score: number) => {
        if (score >= 9) return 'text-green-400';
        if (score >= 7) return 'text-yellow-400';
        return 'text-red-400';
    };

    const getScoreBg = (score: number) => {
        if (score >= 9) return 'bg-green-500/20';
        if (score >= 7) return 'bg-yellow-500/20';
        return 'bg-red-500/20';
    };

    return (
        <div className="space-y-4">
            <div className="text-center mb-4">
                <h4 className="text-white font-medium">{location}</h4>
                <p className="text-white/50 text-xs">Insights del barrio</p>
            </div>

            <div className="space-y-3">
                {/* Security */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center justify-between"
                >
                    <div className="flex items-center gap-2">
                        <FiShield className="w-4 h-4 text-blue-400" />
                        <span className="text-white/70 text-sm">Seguridad</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${getScoreColor(insights.security.score)}`}>
                            {insights.security.label}
                        </span>
                        <div className={`px-2 py-1 rounded text-xs ${getScoreBg(insights.security.score)}`}>
                            {insights.security.score}
                        </div>
                    </div>
                </motion.div>

                {/* Transport */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-between"
                >
                    <div className="flex items-center gap-2">
                        <FiClock className="w-4 h-4 text-[#009B77]" />
                        <span className="text-white/70 text-sm">Transporte</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${getScoreColor(insights.transport.score)}`}>
                            {insights.transport.label}
                        </span>
                        <div className={`px-2 py-1 rounded text-xs ${getScoreBg(insights.transport.score)}`}>
                            {insights.transport.score}
                        </div>
                    </div>
                </motion.div>

                {/* Services */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-between"
                >
                    <div className="flex items-center gap-2">
                        <FiShoppingBag className="w-4 h-4 text-purple-400" />
                        <span className="text-white/70 text-sm">Servicios</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${getScoreColor(insights.services.score)}`}>
                            {insights.services.label}
                        </span>
                        <div className={`px-2 py-1 rounded text-xs ${getScoreBg(insights.services.score)}`}>
                            {insights.services.score}
                        </div>
                    </div>
                </motion.div>

                {/* Schools */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-between"
                >
                    <div className="flex items-center gap-2">
                        <FiMapPin className="w-4 h-4 text-orange-400" />
                        <span className="text-white/70 text-sm">Educación</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${getScoreColor(insights.schools.score)}`}>
                            {insights.schools.label}
                        </span>
                        <div className={`px-2 py-1 rounded text-xs ${getScoreBg(insights.schools.score)}`}>
                            {insights.schools.score}
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg"
            >
                <p className="text-blue-300 text-xs text-center">
                    💡 Puntaje promedio: {(Object.values(insights).reduce((acc, curr) => acc + curr.score, 0) / 4).toFixed(1)}
                </p>
            </motion.div>
        </div>
    );
};