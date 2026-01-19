'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown as ChevronDown } from 'react-icons/fi';
import { faqData } from '../data/contactData';

export const ContactFAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="mt-16"
    >
      <div className="mb-8">
        <motion.h2
          className="text-3xl font-bold text-white mb-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Preguntas frecuentes
        </motion.h2>
        <motion.p
          className="text-white/60"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Aquí encontrarás respuestas a las preguntas más comunes
        </motion.p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#009B77]/10"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              <h3 className="text-white font-semibold text-left pr-4">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                transition={
                  expandedIndex === index
                    ? { duration: 0.4, type: "spring", stiffness: 300, damping: 20 }
                    : { duration: 0.3, ease: "easeInOut" }
                }
                className="flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-[#009B77]" />
              </motion.div>
            </motion.button>

            <AnimatePresence mode="wait">
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    height: {
                      duration: expandedIndex === index ? 0.4 : 0.25,
                      ease: expandedIndex === index ? "easeOut" : "easeIn"
                    },
                    opacity: {
                      duration: expandedIndex === index ? 0.3 : 0.2,
                      delay: expandedIndex === index ? 0.1 : 0
                    }
                  }}
                  className="border-t border-white/10"
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-6 py-4">
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                      className="text-white/70 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
