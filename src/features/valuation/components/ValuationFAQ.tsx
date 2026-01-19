'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/valuationData';

export const ValuationFAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-[#009B77]/5 to-transparent">
            <div className="container mx-auto max-w-3xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
                    <p className="text-white/60 text-lg">
                        Resuelve tus dudas sobre nuestro sistema de tasación
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="border border-white/10 rounded-2xl overflow-hidden hover:border-[#009B77]/30 transition-all duration-300"
                        >
                            <button
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-white text-left">{item.question}</h3>
                                <motion.div
                                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-[#009B77] flex-shrink-0 ml-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-gradient-to-b from-white/5 to-white/2"
                                    >
                                        <p className="px-6 py-4 text-white/70 border-t border-white/10">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
