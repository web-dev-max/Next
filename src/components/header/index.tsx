"use client";

import Link from "next/link";
import "./styles.scss";
import { useEffect } from "react";
import { Button } from "antd";
import useUserStore from "@/store/useUserStore";

const Header = () => {
  const { isAuth, checkIsAuth, logout } = useUserStore();

  useEffect(() => {
    checkIsAuth();
  }, [checkIsAuth]);

  return (
    <header>
      <Link href={'/'}>Главная</Link>
      {!isAuth && 
       <>
           <Link href={{ pathname: "/auth", query: { mode: "register" } }}>Регистрация</Link>
           <Link href={{ pathname: "/auth", query: { mode: "login" } }}>Авторизация</Link>
       </>
      }
      {isAuth &&
           <Button type="primary" onClick={logout}>Выйти из аккаунта</Button>
      }
    </header>
  )
}

export default Header;