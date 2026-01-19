'use client';

import { motion } from 'framer-motion';

export const ValuationHero = () => {
    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-[#009B77]/20 via-transparent to-transparent opacity-50 blur-3xl" />

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold mb-6 text-white"
                    >
                        Tasación de Propiedades
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        Descubre el valor real de tu propiedad con nuestro sistema de tasación online.
                        Obtén una estimación precisa basada en datos actuales del mercado.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col md:flex-row gap-4 justify-center"
                    >
                        <button className="px-8 py-3 bg-[#009B77] text-white font-bold rounded-lg hover:bg-[#00b388] transition-colors">
                            Comenzar Tasación
                        </button>
                        <button className="px-8 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors">
                            Saber Más
                        </button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10"
                    >
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#009B77]">50K+</div>
                            <div className="text-white/60 text-sm mt-2">Propiedades Tasadas</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#009B77]">95%</div>
                            <div className="text-white/60 text-sm mt-2">Precisión Promedio</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#009B77]">2min</div>
                            <div className="text-white/60 text-sm mt-2">Tiempo Promedio</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
