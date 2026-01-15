'use client';

import { COMPANY_INFO } from '@/config/constants';
import drauzLogo from '@/assets/images/logo_drauz.png';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/shared/stores/useCartStore';
import { useAuthStore } from "@/features/login/store/useAuthStore";
// ... imports
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { CartDrawer } from '../cart/CartDrawer';


const NAV_ITEMS = [
  { label: 'Venta', href: '/sales' },
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

const mobileMenuVariants = {
  closed: { opacity: 0, x: "100%" },
  open: { opacity: 1, x: 0 },
};

type headerProps = {
  onLoginClick?: () => void;
  isSticky?: boolean;
  isCartOpen: boolean;
  toggleCart: () => void;
}

export const Header = ({ onLoginClick, isSticky = true, isCartOpen, toggleCart }: headerProps) => {
  const router = useRouter();
  const { items } = useCartStore();
  const { isAuthenticated, user, logout, onLoginClick: storeOnLoginClick } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes or screen resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoginClick = () => {
    if (onLoginClick) onLoginClick();
    else if (storeOnLoginClick) storeOnLoginClick();
    setIsMobileMenuOpen(false);
  };

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
      className={`${isSticky ? 'sticky top-0' : 'relative'} z-40 backdrop-blur-sm bg-linear-to-b from-black/40 via-black/20 to-transparent`}
    >
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between p-4 md:grid md:grid-cols-3"
        >
          {/* Logo Section */}
          <section id='logo-section' onClick={() => router.push('/')} className='flex items-center hover:cursor-pointer hover:scale-105 transition-all md:justify-self-start'>
            <motion.div
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
              className="rounded-full overflow-hidden object-contain mr-3 w-16 h-16 md:m-3 md:w-20 md:h-20"
            >
              <Image src={drauzLogo} alt="drauz logo" />
            </motion.div>

            {/* Company Name */}
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-3xl font-bold leading-tight tracking-[-0.015em] flex-1 bg-linear-to-r from-white  to-white bg-clip-text text-transparent"
            >
              {COMPANY_INFO.name}
            </motion.h2>
          </section>

          {/* Desktop Nav */}
          <section id='nav-section' className="hidden md:flex md:justify-self-center">
            <motion.nav
              variants={itemVariants}
              className="flex items-center justify-center"
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
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#009B77] to-[#00b388] rounded-full origin-center scale-x-0 group-hover:scale-x-100 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />
                    <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl bg-[#009B77]/20 transition-opacity duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.nav>
          </section>

          {/* Desktop Actions (Login + Cart) */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex items-center justify-end md:justify-self-end"
          >
            {isAuthenticated ? (
              <motion.div className="flex items-center gap-4 mr-4">
                <span className="text-white/80 text-sm font-medium">
                  {user?.email}
                </span>
                <motion.button
                  className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-500 text-base font-bold leading-normal tracking-[0.015em] transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    logout();
                    router.push('/');
                  }}
                >
                  <span className="truncate">Salir</span>
                </motion.button>
              </motion.div>
            ) : (
              <motion.button
                className="flex min-w-[100px] cursor-pointer items-center justify-center mr-4 overflow-hidden rounded-lg h-12 px-6 bg-linear-to-r from-[#009B77] to-[#00b388] text-[#121212] text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-[#009B77]/30"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(0, 155, 119, 0.6)',
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onLoginClick || storeOnLoginClick}
              >
                <span className="truncate">Iniciar Sesión</span>
              </motion.button>
            )}

            <motion.button
              className="flex cursor-pointer items-center hover:scale-105 justify-center overflow-visible text-white text-base font-bold relative"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleCart}
            >
              <FaShoppingCart size={20} />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-linear-to-r from-[#009B77] to-[#00b388] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </motion.button>
          </motion.div>

          {/* Mobile Actions and Hamburger */}
          <div className="flex items-center gap-4 md:hidden">

            {/* Cart Icon (Visible on Mobile) */}
            <motion.button
              className="flex cursor-pointer items-center justify-center overflow-visible text-white text-base font-bold relative"
              whileTap={{ scale: 0.95 }}
              onClick={toggleCart}
            >
              <FaShoppingCart size={20} />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-linear-to-r from-[#009B77] to-[#00b388] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </motion.button>

            {/* Hamburger Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-full left-0 w-full bg-[#121212]/95 backdrop-blur-md border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xl font-bold text-white hover:text-[#009B77] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="h-px bg-white/10 w-full my-4" />

              {isAuthenticated ? (
                <div className="flex flex-col gap-4">
                  <span className="text-white/80 text-sm font-medium">
                    Conectado como: {user?.email}
                  </span>
                  <button
                    onClick={() => {
                      logout();
                      router.push('/');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full h-12 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 font-bold"
                  >
                    Salir
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLoginClick}
                  className="w-full h-12 rounded-lg bg-linear-to-r from-[#009B77] to-[#00b388] text-[#121212] font-bold shadow-lg shadow-[#009B77]/30"
                >
                  Iniciar Sesión
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isCartOpen} onClose={toggleCart} />
    </motion.header>
  );
};
