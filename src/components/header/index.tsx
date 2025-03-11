"use client";

import Link from "next/link";
import "./styles.scss";
import { useEffect } from "react";
import { Button, message } from "antd";
import useUserStore from "@/store/useUserStore";
import Cabinet from "@/assets/svg/cabinet";
import { useMutation } from "@apollo/client";
import { REMOVE_USER } from "@/lib/request-graphql/user";

const Header = () => {
  const { isAuth, checkIsAuth, logout } = useUserStore();
  const [logoutUser, { loading }] = useMutation(REMOVE_USER);

  useEffect(() => {
    checkIsAuth();
  }, [checkIsAuth]);

  const handleLogout = async () => {
    await logoutUser();
    message.info('Выход выполнен');
    logout();
  };

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
          <Link href={'/'}>
            <Button 
              type="primary" 
              onClick={handleLogout}
              disabled={loading}
            >
                Выйти из аккаунта
            </Button>
          </Link>
          <Link className="nav-auth-cabinet" href={'/cabinet'}>
            <Cabinet />
          </Link>
        </div>
      }
    </header>
  )
}

export default Header;