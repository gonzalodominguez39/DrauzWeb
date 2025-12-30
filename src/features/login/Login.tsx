import { AnimatePresence, motion } from 'motion/react'
import { LoginForm } from './components/LoginForm'
import { SignupForm } from './components/SignUp'
import { useAuthStore } from './store/useAuthStore';
import Image from 'next/image';
import logoDrauz from '@/assets/images/logo_drauz.png';

type LoginProps = {
    authView: "login" | "signup" | "none";
}

const Login = ({ authView }: LoginProps) => {
    const { onCloseClick } = useAuthStore();

    return (
        <AnimatePresence mode="wait">
            {authView !== 'none' && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
                    onClick={onCloseClick}
                >
                    <motion.div
                        key={authView}
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-5xl h-[680px] overflow-hidden rounded-3xl shadow-2xl shadow-black/50"
                    >
                        <div className="flex h-full bg-[#0a0a0a]">
                            {/* Left Side - Hero Image */}
                            <motion.div
                                className="relative hidden lg:flex lg:w-1/2 overflow-hidden"
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                {/* Background Image */}
                                <Image
                                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1920&auto=format&fit=crop"
                                    alt="Luxury Real Estate"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-[#0a0a0a]" />
                                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a]/90 via-transparent to-transparent" />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-10">
                                    <motion.div
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                    >
                                        {/* Logo/Brand */}
                                        <div className="flex rounded-full items-center gap-3 mb-6">
                                            <Image
                                                src={logoDrauz}
                                                alt="Drauz Logo"
                                                width={48}
                                                height={48}
                                                className="rounded-full object-contain"
                                            />
                                            <span className="text-white font-semibold text-2xl tracking-tight">Drauz</span>
                                        </div>

                                        {/* Headline */}
                                        <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                                            Encuentra tu<br />
                                            <span className="bg-linear-to-r from-[#009B77] to-[#00d9a5] bg-clip-text text-transparent">
                                                hogar ideal
                                            </span>
                                        </h2>

                                        {/* Description */}
                                        <p className="text-white/60 text-lg max-w-sm leading-relaxed">
                                            Explora las mejores propiedades disponibles. Casas, departamentos y más, todo en un solo lugar.
                                        </p>

                                        {/* Features */}
                                        <div className="flex gap-8 mt-8 pt-8 border-t border-white/10">
                                            <div>
                                                <div className="text-3xl font-bold text-white">100+</div>
                                                <div className="text-white/50 text-sm">Propiedades</div>
                                            </div>
                                            <div>
                                                <div className="text-3xl font-bold text-white">Gratis</div>
                                                <div className="text-white/50 text-sm">Sin costo</div>
                                            </div>
                                            <div>
                                                <div className="text-3xl font-bold text-white">Fácil</div>
                                                <div className="text-white/50 text-sm">De usar</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Right Side - Form */}
                            <motion.div
                                className="flex-1 flex items-center justify-center p-8 lg:p-12 relative"
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                {/* Subtle gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#009B77]/5 via-transparent to-transparent" />

                                {/* Close Button */}
                                <motion.button
                                    onClick={onCloseClick}
                                    className="absolute right-6 top-6 p-2.5 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300 z-10"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </motion.button>

                                <div className="w-full max-w-sm relative z-10">
                                    <AnimatePresence mode="wait">
                                        {authView === 'login' ? (
                                            <motion.div
                                                key="login"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <LoginForm />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="signup"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <SignupForm />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Login