'use client';

import { COMPANY_INFO } from '@/config/constants';
import drauzLogo from '@/assets/images/logo_drauz.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';


const NAV_ITEMS = [
  { label: 'Venta', href: '#' },
  { label: 'Alquiler', href: '#' },
  { label: 'Proyectos', href: '#' },
  { label: 'Nosotros', href: '#' },
  { label: 'Contacto', href: '#' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 24,
    },
  },
};

export const Header = ({ onLoginClick }: { onLoginClick?: () => void }) => {
  const router = useRouter();
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      }}
      className="sticky top-0 z-40 backdrop-blur-sm bg-gradient-to-b from-black/40 via-black/20 to-transparent"
    >
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center p-4 justify-between md:grid md:grid-cols-3"
        >
          <section id='logo-section' onClick={() => router.push('/')} className='flex items-center hover:cursor-pointer hover:scale-105 transition-all md:justify-self-start'>
            <motion.div
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}

              className="rounded-full overflow-hidden object-contain m-3 w-20 h-20"
            >
              <Image src={drauzLogo} alt="drauz logo" />
            </motion.div>

            {/* Company Name */}
            <motion.h2
              variants={itemVariants}
              className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-[-0.015em] flex-1 bg-gradient-to-r from-white via-[#009B77] to-white bg-clip-text text-transparent"
            >
              {COMPANY_INFO.name}
            </motion.h2>
          </section>
          <section id='nav-section' className="md:justify-self-center">
            <motion.nav
              variants={itemVariants}
              className="hidden md:flex items-center justify-center"
            >
              <div className="flex gap-8">
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="relative text-base font-bold text-white/70 hover:text-white transition-colors group pb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      type: 'spring',
                      stiffness: 300,
                      damping: 24,
                    }}
                    whileHover={{ scale: 1.1, y: -2, transition: { duration: 0 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {/* Animated underline - expands from center */}
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#009B77] to-[#00b388] rounded-full origin-center scale-x-0 group-hover:scale-x-100 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />
                    {/* Glow effect */}
                    <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl bg-[#009B77]/20 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </section>

          {/* Login Button */}
          <motion.div
            variants={itemVariants}
            className="flex flex-1 items-center justify-end md:flex-none md:justify-self-end"
          >
            <motion.button
              className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gradient-to-r from-[#009B77] to-[#00b388] text-[#121212] text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-[#009B77]/30"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 25px rgba(0, 155, 119, 0.6)',
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onLoginClick}
            >
              <span className="truncate">Iniciar Sesión</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};
