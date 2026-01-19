import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/shared/stores/useCartStore';
import Image from 'next/image';
import Link from 'next/link';
import { FaTimes, FaTrash, FaHome, FaMapMarker } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
    const { items, removeItem } = useCartStore();
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-50"
                        onClick={onClose}
                    />
                    <motion.div
                        ref={drawerRef}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 h-screen w-full max-w-md bg-[#0a0a0a] border-l border-[#009B77]/20 shadow-2xl z-50 p-6 overflow-y-auto"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                                Tu Interés
                                <span className="text-[#009B77] text-sm font-normal bg-[#009B77]/10 px-2 py-1 rounded-full">
                                    {items.length} {items.length === 1 ? 'Propiedad' : 'Propiedades'}
                                </span>
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>

                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2">
                                    <FaHome className="text-4xl text-white/60" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">Tu lista está vacía</h3>
                                <p className="text-white/40 max-w-[250px]">
                                    Explora nuestras propiedades y guarda las que más te gusten aquí.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="mt-4 px-6 py-2 bg-[#009B77] hover:bg-[#00b388] text-white rounded-lg font-medium transition-colors"
                                >
                                    Explorar Propiedades
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {items.map((item) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        key={item.id}
                                        className="flex flex-col bg-[#161616] rounded-xl border border-white/5 overflow-hidden group hover:border-[#009B77]/30 transition-all duration-300"
                                    >
                                        <div className="flex p-3 gap-3">
                                            <div className="relative w-28 h-28 rounded-lg overflow-hidden shrink-0">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between py-1">
                                                <div>
                                                    <h3 className="text-white font-bold line-clamp-1 text-lg mb-1">{item.title}</h3>
                                                    <p className="text-white/60 text-sm line-clamp-2 leading-relaxed flex items-start gap-1">
                                                        <FaMapMarker className="shrink-0 mt-0.5 text-white/40" />
                                                        {item.location}
                                                    </p>
                                                </div>
                                                <div className="flex justify-between items-end mt-2">
                                                    <span className="text-[#009B77] font-bold">
                                                        ${item.price.toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex border-t border-white/5 divide-x divide-white/5">
                                            <Link
                                                href={`/properties/${item.id}`}
                                                onClick={onClose}
                                                className="flex-1 py-3 text-sm font-medium text-center text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                                            >
                                                Ver Detalles
                                            </Link>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="px-4 py-3 text-red-500/70 hover:text-red-500 hover:bg-red-500/10 transition-colors flex items-center justify-center"
                                                title="Eliminar de la lista"
                                            >
                                                <FaTrash size={14} />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
