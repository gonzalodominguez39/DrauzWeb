import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { useSignup } from "../hooks/useSignup"
import { useState } from "react"

interface SignupFormProps extends React.ComponentProps<"div"> {
    onLoginClick?: () => void;
    onCloseClick?: () => void;
}

export function SignupForm({
    className,
    onLoginClick,
    onCloseClick,
    ...props
}: SignupFormProps) {
    const { signupAsync, isLoading, error, success, reset } = useSignup();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
        // Reset error when user starts typing
        if (error) reset();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await signupAsync(formData);
            // Si el signup es exitoso, redirigir al login después de 2 segundos
            setTimeout(() => {
                onLoginClick?.();
            }, 2000);
        } catch (err) {
            // El error ya está manejado en el hook
            console.error("Error en signup:", err);
        }
    };
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden border border-white/10 bg-[#121212]/95 text-white shadow-2xl backdrop-blur-xl rounded-3xl">
                {/* Efecto de brillo sutil */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-3xl" />

                <CardHeader className="space-y-3 text-center relative pb-8 pt-8">
                    <motion.button
                        onClick={onCloseClick}
                        className="absolute right-6 top-6 p-3 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-5 w-5"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        <span className="sr-only">Cerrar</span>
                    </motion.button>
                    <CardTitle className="text-4xl font-bold tracking-tight bg-linear-to-r from-white via-[#009B77] to-white/80 bg-clip-text text-transparent">
                        Crear cuenta
                    </CardTitle>
                    <CardDescription className="text-white/60 text-base font-normal">
                        Ingresa tu email para comenzar tu registro
                    </CardDescription>
                </CardHeader>

                <CardContent className="grid gap-6 relative px-8 pb-8">
                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-2xl text-sm"
                        >
                            {error}
                        </motion.div>
                    )}

                    {/* Success Message */}
                    {success && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-[#009B77]/10 border border-[#009B77]/20 text-[#009B77] px-4 py-3 rounded-2xl text-sm"
                        >
                            ¡Cuenta creada exitosamente! Redirigiendo al inicio de sesión...
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="grid gap-6">
                        {/* Email */}
                        <div className="grid gap-3">
                            <Label htmlFor="email" className="text-white/90 text-sm font-semibold">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@ejemplo.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={isLoading}
                                required
                                className="bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#009B77]/60 focus:ring-[#009B77]/20 focus:bg-white/10 transition-all duration-300 h-12 rounded-2xl text-sm backdrop-blur-sm"
                            />
                        </div>

                        {/* Passwords */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="password" className="text-white/90 text-sm font-semibold">Contraseña</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    required
                                    className="bg-white/5 border border-white/10 text-white focus:border-[#009B77]/60 focus:ring-[#009B77]/20 focus:bg-white/10 transition-all duration-300 h-12 rounded-2xl text-sm backdrop-blur-sm"
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="confirmPassword" className="text-white/90 text-sm font-semibold">Confirmar</Label>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    required
                                    className="bg-white/5 border border-white/10 text-white focus:border-[#009B77]/60 focus:ring-[#009B77]/20 focus:bg-white/10 transition-all duration-300 h-12 rounded-2xl text-sm backdrop-blur-sm"
                                />
                            </div>
                        </div>

                        <div className="text-xs text-white/40 text-center -mt-2">
                            Debe tener al menos 8 caracteres.
                        </div>

                        {/* Botón Crear Cuenta */}
                        <motion.button
                            className="w-full rounded-2xl h-12 bg-linear-to-r from-[#009B77] to-[#00b388] hover:from-[#00b388] hover:to-[#009B77] text-[#121212] font-bold text-base shadow-xl shadow-[#009B77]/20 hover:shadow-[#009B77]/40 transition-all duration-300 relative overflow-hidden group mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            whileHover={!isLoading ? { scale: 1.02 } : {}}
                            whileTap={!isLoading ? { scale: 0.98 } : {}}
                            type="submit"
                            disabled={isLoading || success}
                        >
                            <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="relative">
                                {isLoading ? "Creando cuenta..." : success ? "¡Cuenta creada!" : "Crear Cuenta"}
                            </span>
                        </motion.button>
                    </form>

                    {/* Separador */}
                    <div className="relative my-2">
                        <div className="absolute inset-0 flex items-center">
                            <Separator className="w-full bg-white/10" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-[#121212] px-4 text-white/50 text-xs font-medium tracking-wide">O continuar con</span>
                        </div>
                    </div>

                    {/* Botones OAuth */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                variant="outline"
                                className="w-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all duration-300 h-12 rounded-2xl group backdrop-blur-sm"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
                                </svg>
                                <span className="sr-only">Apple</span>
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                variant="outline"
                                className="w-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all duration-300 h-12 rounded-2xl group backdrop-blur-sm"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                                </svg>
                                <span className="sr-only">Google</span>
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                variant="outline"
                                className="w-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all duration-300 h-12 rounded-2xl group backdrop-blur-sm"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
                                </svg>
                                <span className="sr-only">Meta</span>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Terms */}
                    <div className="text-center text-xs text-white/50 mt-4 leading-relaxed">
                        Al continuar, aceptas nuestros <a href="#" className="text-white/70 underline hover:text-white transition-colors">Términos de Servicio</a> y <a href="#" className="text-white/70 underline hover:text-white transition-colors">Política de Privacidad</a>.
                    </div>

                    {/* Login */}
                    <div className="text-center text-sm text-white/70 pt-3">
                        ¿Ya tienes una cuenta? <button onClick={onLoginClick} className="text-[#009B77] hover:text-[#00b388] font-semibold hover:underline">Iniciar sesión</button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}