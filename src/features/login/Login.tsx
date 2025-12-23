import { AnimatePresence, motion } from 'motion/react'
import { LoginForm } from './components/LoginForm'
import { SignupForm } from './components/SignUp'
import { useAuthStore } from './store/useAuthStore';


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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={onCloseClick}
                >
                    <motion.div
                        key={authView}
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-md"
                    >
                        {authView === 'login' ? (
                            <LoginForm />
                        ) : (
                            <SignupForm
                            />
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Login