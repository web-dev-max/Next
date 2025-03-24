"use client";

import Link from "next/link";
import "./styles.scss";
import { Button, message } from "antd";
import useUserStore from "@/store/useUserStore";
import { useMutation } from "@apollo/client";
import { REMOVE_USER } from "@/lib/request-graphql/user";
import CabinetSvg from "@/assets/svg/svg-cabinet";

const Header = () => {
  const { isAuth, logout } = useUserStore();
  const [logoutUser, { loading }] = useMutation(REMOVE_USER);

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
            <CabinetSvg />
          </Link>
        </div>
      }
    </header>
  )
}

export default Header;