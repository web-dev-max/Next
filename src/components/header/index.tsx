"use client";

import Link from "next/link";
import "./styles.scss";
import { useEffect } from "react";
import { Button } from "antd";
import useUserStore from "@/store/useUserStore";
import Cabinet from "@/assets/svg/cabinet";

const Header = () => {
  const { isAuth, checkIsAuth, logout } = useUserStore();

  useEffect(() => {
    checkIsAuth();
  }, [checkIsAuth]);

  return (
    <header>
      <Link href={'/'}>Главная</Link>
      {!isAuth && 
        <div className="nav-notAuth">
          <Link href={{ pathname: '/auth', query: { mode: 'register' } }}>Регистрация</Link>
          <Link href={{ pathname: '/auth', query: { mode: 'login' } }}>Авторизация</Link>
        </div>
        }
      {isAuth &&
        <div className="nav-auth">
          <Button type="primary" onClick={logout}>Выйти из аккаунта</Button>
          <Link className="nav-auth-cabinet" href={'/cabinet'}>
            <Cabinet />
          </Link>
        </div>
      }
    </header>
  )
}

export default Header;