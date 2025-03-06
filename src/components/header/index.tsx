"use client";

import Link from "next/link";
import "./styles.scss";

const Header = () => {
    return (
        <header>
           <Link href={'/'}>Главная</Link>
           <Link href={{ pathname: "/auth", query: { mode: "register" } }}>Регистрация</Link>
           <Link href={{ pathname: "/auth", query: { mode: "login" } }}>Авторизация</Link>
        </header>
    )
}

export default Header;