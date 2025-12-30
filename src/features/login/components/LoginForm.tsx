'use client';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore";
import { useLoginAuth } from "../hooks/useLoginAuth";

interface LoginFormProps extends React.ComponentProps<"div"> { }

export function LoginForm({
    className,
    ...props
}: LoginFormProps) {
    const { onSignupClick } = useAuthStore();
    const { onLogin } = useLoginAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            await onLogin({ email, password });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className={cn("flex flex-col", className)}
            {...props}
        >
            {/* Header */}
            <div className="mb-8">
                <motion.h1
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    Bienvenido de vuelta
                </motion.h1>
                <motion.p
                    className="text-white/50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                >
                    Accede para explorar propiedades disponibles
                </motion.p>
            </div>

            {/* OAuth Buttons */}
            <motion.div
                className="grid grid-cols-2 gap-3 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <Button
                    variant="outline"
                    className="h-12 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 hover:text-white transition-all duration-300 rounded-xl"
                >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                    Google
                </Button>
                <Button
                    variant="outline"
                    className="h-12 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 hover:text-white transition-all duration-300 rounded-xl"
                >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                    </svg>
                    Apple
                </Button>
            </motion.div>

            {/* Divider */}
            <motion.div
                className="relative my-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
            >
                <Separator className="bg-white/10" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] px-4 text-white/40 text-xs uppercase tracking-wider">
                    o
                </span>
            </motion.div>

            {/* Form Fields */}
            <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/70 text-sm font-medium">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="nombre@ejemplo.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#009B77] focus:ring-1 focus:ring-[#009B77]/30 transition-all duration-300 rounded-xl"
                    />
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password" className="text-white/70 text-sm font-medium">
                            Contraseña
                        </Label>
                        <a href="#" className="text-xs text-[#009B77] hover:text-[#00b388] transition-colors">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                    <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#009B77] focus:ring-1 focus:ring-[#009B77]/30 transition-all duration-300 rounded-xl"
                    />
                </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
                className="w-full h-12 mt-6 bg-gradient-to-r from-[#009B77] to-[#00b388] hover:from-[#00a883] hover:to-[#00c596] text-white font-semibold rounded-xl shadow-lg shadow-[#009B77]/25 hover:shadow-[#009B77]/40 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={handleLogin}
                disabled={isLoading}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                    {isLoading ? (
                        <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Iniciando sesión...
                        </>
                    ) : (
                        'Iniciar sesión'
                    )}
                </span>
            </motion.button>

            {/* Footer */}
            <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <p className="text-white/50 text-sm">
                    ¿No tienes una cuenta?{' '}
                    <button
                        onClick={onSignupClick}
                        className="text-[#009B77] hover:text-[#00b388] font-medium transition-colors"
                    >
                        Crear cuenta
                    </button>
                </p>
            </motion.div>

            {/* Terms */}
            <motion.p
                className="mt-6 text-center text-xs text-white/30 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
            >
                Al continuar, aceptas nuestros{' '}
                <a href="#" className="text-white/50 hover:text-white/70 underline transition-colors">Términos</a>
                {' '}y{' '}
                <a href="#" className="text-white/50 hover:text-white/70 underline transition-colors">Privacidad</a>
            </motion.p>
        </div>
    )
}