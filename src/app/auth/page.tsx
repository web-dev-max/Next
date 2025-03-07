"use client";

import { useSearchParams } from "next/navigation";
import FormAuth from "./components/FormAuth";


const AuthPage = () => {
  const searchParams = useSearchParams();
  const isRegister = searchParams.get("mode") === "register";
  
  return (
    <FormAuth 
      isRegister={isRegister}
    />
  );
};

export default AuthPage;
