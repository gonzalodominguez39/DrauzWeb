'use client';

import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-6xl font-bold text-[#D4AF37] mb-4">Oops!</h1>
                <h2 className="text-2xl font-semibold text-white mb-6">Algo salió mal</h2>
                <p className="text-gray-400 max-w-md mx-auto mb-8">
                    Ha ocurrido un error inesperado. Estamos trabajando para solucionarlo.
                </p>
                <button
                    onClick={() => reset()}
                    className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                    Intentar de nuevo
                </button>
            </motion.div>
        </div>
    );
}
