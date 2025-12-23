import React, { useState } from "react";
import { authService } from "../services/auth.service";

const useLogin = () => {
  const [authView, setAuthView] = useState<"none" | "login" | "signup">("none");

  const onLoginClick = (email: string, password: string) => {
    setAuthView("login");
    authService.login({ email, password });
  };
  const onSignupClick = () => {
    setAuthView("signup");
  };
  const onCloseClick = () => {
    setAuthView("none");
  };
  return {
    authView,
    onLoginClick,
    onSignupClick,
    onCloseClick,
  };
};

export default useLogin;
