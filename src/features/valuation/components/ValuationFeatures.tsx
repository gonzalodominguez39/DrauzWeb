'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { valuationFacts } from '../data/valuationData';

export const ValuationFeatures = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        ¿Cómo Funciona Nuestra Tasación?
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Utilizamos tecnología avanzada para proporcionar tasaciones precisas y confiables
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {valuationFacts.map((fact) => (
                        <motion.div
                            key={fact.title}
                            variants={itemVariants}
                            className="bg-linear-to-br from-white/5 to-white/2 border border-white/10 rounded-2xl p-6 hover:border-[#009B77]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#009B77]/10"
                        >
                            <div className="text-4xl mb-4 text-[#009B77]">
                                {React.createElement(fact.icon)}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{fact.title}</h3>
                            <p className="text-white/60 text-sm">{fact.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
