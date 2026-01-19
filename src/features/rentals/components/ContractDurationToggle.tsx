'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaLightbulb } from 'react-icons/fa';

interface ContractDurationToggleProps {
    onDurationChange?: (duration: string) => void;
}

export const ContractDurationToggle = ({ onDurationChange }: ContractDurationToggleProps) => {
    const [selectedDuration, setSelectedDuration] = useState('6 meses');

    const durations = [
        { label: '3 meses', value: '3 meses' },
        { label: '6 meses', value: '6 meses' },
        { label: '1 año', value: '1 año' },
        { label: 'Indefinido', value: 'Indefinido' }
    ];

    const handleDurationChange = (duration: string) => {
        setSelectedDuration(duration);
        onDurationChange?.(duration);
    };

    return (
        <div className="bg-[#0a0a0a] rounded-xl border border-white/10 p-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <FaCalendarAlt className="text-blue-400" />
                Duración del Contrato
            </h3>

            <div className="grid grid-cols-2 gap-3">
                {durations.map((duration, index) => (
                    <motion.button
                        key={duration.value}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleDurationChange(duration.value)}
                        className={`p-3 rounded-lg border text-center transition-all ${
                            selectedDuration === duration.value
                                ? 'bg-blue-500/20 border-blue-500 text-blue-400 shadow-lg shadow-blue-500/20'
                                : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20 hover:bg-white/10'
                        }`}
                    >
                        <div className="font-medium text-sm">{duration.label}</div>
                        {duration.value === 'Indefinido' && (
                            <div className="text-xs text-white/50 mt-1">Sin límite</div>
                        )}
                    </motion.button>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg"
            >
                <p className="text-blue-300 text-xs text-center flex items-center justify-center gap-1">
                    <FaLightbulb className="text-blue-400" />
                    Los contratos más largos suelen tener descuentos en la renta
                </p>
            </motion.div>
        </div>
    );
};