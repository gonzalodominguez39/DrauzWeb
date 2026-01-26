'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-8xl font-bold text-[#D4AF37] mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-white mb-6">Página no encontrada</h2>
                <p className="text-gray-400 max-w-md mx-auto mb-8">
                    Lo sentimos, la página que estás buscando no existe o ha sido movida.
                    Explora nuestras propiedades y encuentra tu lugar ideal.
                </p>
                <Link
                    href="/home"
                    className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                    Volver al Inicio
                </Link>
            </motion.div>
        </div>
    );
}
