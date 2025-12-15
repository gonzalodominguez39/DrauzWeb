import { AnimatePresence, motion } from 'motion/react'
import React, { useState } from 'react'
import { LoginForm } from './components/LoginForm'
import { SignupForm } from './components/SignUp'
import useLogin from './hooks/useLogin'

type LoginProps = {
    authView: "login" | "signup" | "none";
    onCloseClick: () => void;
    onLoginClick: () => void;
    onSignupClick: () => void;
}
const Login = ({ authView, onCloseClick, onLoginClick, onSignupClick }: LoginProps) => {


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
                            <LoginForm
                                onSignupClick={onSignupClick}
                                onCloseClick={onCloseClick}
                            />
                        ) : (
                            <SignupForm
                                onLoginClick={onLoginClick}
                                onCloseClick={onCloseClick}
                            />
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Login