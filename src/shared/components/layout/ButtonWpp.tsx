import React from 'react'
import { motion } from 'motion/react'
import { FaWhatsapp } from 'react-icons/fa'

export const ButtonWpp = () => {
    const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WPP_NUMBER
    console.log("WHATSAPP_NUMBER", WHATSAPP_NUMBER)

    return (
        <>

            <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1,
                }}
                className="fixed cursor-pointer bottom-24 right-4 z-50 bg-[#25D366] backdrop-blur-md rounded-full p-3 shadow-2xl border border-white/10 hover:bg-[#20bd5a] transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaWhatsapp className="text-white" size={24} />
            </motion.a>
        </>
    )
}
