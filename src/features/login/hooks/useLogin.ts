import React, { useState } from "react";

const useLogin = () => {
  const [authView, setAuthView] = useState<"none" | "login" | "signup">("none");
  const onLoginClick = () => {
    setAuthView("login");
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
