'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBolt, FaBullseye, FaHeart } from 'react-icons/fa';

export const ValuationPreview = () => {
    return (
        <section className="py-20 px-4 bg-linear-to-b from-transparent via-[#009B77]/5 to-transparent border-y border-white/10">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Descubre el Valor de tu Propiedad
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Utiliza nuestra herramienta de tasación para obtener una estimación precisa
                        basada en datos actuales del mercado inmobiliario
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Feature 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center"
                    >
                        <div className="text-5xl mb-4 text-[#00d9a5] flex justify-center">
                            <FaBolt />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Rápido y Fácil</h3>
                        <p className="text-white/60 text-sm">
                            Completa el formulario en menos de 2 minutos y obtén tu tasación instantáneamente
                        </p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center"
                    >
                        <div className="text-5xl mb-4 text-[#00d9a5] flex justify-center">
                            <FaBullseye />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Preciso</h3>
                        <p className="text-white/60 text-sm">
                            Algoritmo avanzado con 95% de precisión basado en comparables del mercado
                        </p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center"
                    >
                        <div className="text-5xl mb-4 text-[#00d9a5] flex justify-center">
                            <FaHeart />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Gratuito</h3>
                        <p className="text-white/60 text-sm">
                            Sin costo, sin compromisos. Conoce el valor de tu propiedad sin obligaciones
                        </p>
                    </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center"
                >
                    <Link
                        href="/valuation"
                        className="px-10 py-4 bg-linear-to-r from-[#009B77] to-[#00d9a5] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#009B77]/50 transition-all duration-300 inline-flex items-center gap-2"
                    >
                        Calcular mi Tasación
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
