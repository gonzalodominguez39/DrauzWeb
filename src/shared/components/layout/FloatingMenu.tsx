'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import drauzLogo from '@/assets/images/logo_drauz.png';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaHome, FaBuilding, FaProjectDiagram, FaUsers, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MENU_ITEMS = [
    { label: 'Venta', href: '#', icon: FaHome },
    { label: 'Alquiler', href: '#', icon: FaBuilding },
    { label: 'Proyectos', href: '#', icon: FaProjectDiagram },
    { label: 'Nosotros', href: '#', icon: FaUsers },
    { label: 'Contacto', href: '#', icon: FaEnvelope },
];



export const FloatingMenu = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <>


            {/* Floating Button */}
            <motion.button
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="fixed cursor-pointer bottom-4 right-4 z-50 bg-black/90 backdrop-blur-md rounded-full p-3 shadow-2xl border border-white/10 hover:bg-black transition-colors duration-300"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image src={drauzLogo} alt="Drauz logo" width={40} height={40} />
                    </div>
                    <motion.div
                        animate={{ rotate: isMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isMenuOpen ? (
                            <HiX className="text-white" size={24} />
                        ) : (
                            <HiMenu className="text-white" size={24} />
                        )}
                    </motion.div>
                </div>
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.95 }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                            }}
                            className="fixed bottom-20 right-4 z-50 w-80 bg-black/95 backdrop-blur-md rounded-lg border border-white/10 shadow-2xl"
                        >
                            <div className="p-4">
                                <nav className="flex flex-col gap-2">
                                    {MENU_ITEMS.map((item, index) => {
                                        const Icon = item.icon;
                                        return (
                                            <motion.a
                                                key={item.label}
                                                href={item.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 group"
                                                initial={{ x: 50, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{
                                                    delay: index * 0.1,
                                                    type: 'spring',
                                                    stiffness: 300,
                                                    damping: 24,
                                                }}
                                                whileHover={{ x: 5, scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Icon className="text-[#009B77] group-hover:scale-110 transition-transform" size={20} />
                                                <span className="font-medium">{item.label}</span>
                                            </motion.a>
                                        );
                                    })}
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
