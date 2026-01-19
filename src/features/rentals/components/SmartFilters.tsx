'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiHeart, FiTarget, FiZap } from 'react-icons/fi';
import { FaCouch, FaDog, FaCar, FaLeaf } from 'react-icons/fa';

export const SmartFilters = () => {
    const [budget, setBudget] = useState(2000);
    const [preferences, setPreferences] = useState({
        furnished: false,
        petFriendly: false,
        parking: false,
        garden: false
    });

    const handlePreferenceChange = (key: string) => {
        setPreferences(prev => ({
            ...prev,
            [key]: !prev[key as keyof typeof prev]
        }));
    };

    return (
        <div className="bg-[#0a0a0a] rounded-xl border border-white/10 p-6">
            <div className="flex items-center gap-2 mb-6">
                <FiZap className="w-5 h-5 text-purple-400" />
                <h3 className="text-white font-semibold">Filtros Inteligentes</h3>
                <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                    IA
                </span>
            </div>

            {/* Budget Predictor */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                    <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                        <FiTrendingUp className="w-4 h-4" />
                        Presupuesto Máximo
                    </label>
                    <span className="text-white font-semibold">€{budget}</span>
                </div>
                <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-white/50 mt-2">
                    <span>€500</span>
                    <span>€3,000</span>
                    <span>€5,000+</span>
                </div>
            </div>

            {/* Lifestyle Preferences */}
            <div className="mb-6">
                <h4 className="text-white/70 text-sm font-medium mb-3 flex items-center gap-2">
                    <FiTarget className="w-4 h-4" />
                    Preferencias de Estilo de Vida
                </h4>
                <div className="grid grid-cols-2 gap-3">
                    {[
                        { key: 'furnished', label: 'Amueblado', icon: FaCouch },
                        { key: 'petFriendly', label: 'Pet Friendly', icon: FaDog },
                        { key: 'parking', label: 'Parking', icon: FaCar },
                        { key: 'garden', label: 'Jardín', icon: FaLeaf }
                    ].map((pref, index) => (
                        <motion.button
                            key={pref.key}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handlePreferenceChange(pref.key)}
                            className={`p-3 rounded-lg border text-left transition-all ${
                                preferences[pref.key as keyof typeof preferences]
                                    ? 'bg-purple-500/20 border-purple-500 text-purple-400 shadow-lg shadow-purple-500/20'
                                    : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20 hover:bg-white/10'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-lg">
                                    {React.createElement(pref.icon)}
                                </span>
                                <span className="text-sm font-medium">{pref.label}</span>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Smart Match Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg"
            >
                <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-sm">Match Inteligente</span>
                    <div className="flex items-center gap-1">
                        <FiHeart className="w-4 h-4 text-red-400" />
                        <span className="text-white font-semibold">87%</span>
                    </div>
                </div>
                <p className="text-white/60 text-xs">
                    Basado en tus preferencias, hemos encontrado propiedades que coinciden con tu perfil.
                </p>
            </motion.div>
        </div>
    );
};