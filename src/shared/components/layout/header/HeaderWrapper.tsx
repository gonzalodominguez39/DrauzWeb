"use client";

import { useState } from "react";
import { Header } from "./Header";
import { useAuthStore } from "@/features/login/store/useAuthStore";

 const HeaderWrapper = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {onLoginClick} = useAuthStore();


  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <Header
      onLoginClick={onLoginClick}
      isCartOpen={isCartOpen}
      toggleCart={toggleCart}
    />
  );
};

export default HeaderWrapper;
