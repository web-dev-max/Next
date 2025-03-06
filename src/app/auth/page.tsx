"use client";

import { LOGIN_AUTH, REGISTER_USER } from "@/lib/fetch-graphql/auth";
import { useMutation } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const searchParams = useSearchParams();
    const isAuthMode = searchParams.get('mode') === 'register';

    const [authUser, { loading }] = useMutation(isAuthMode ? REGISTER_USER : LOGIN_AUTH, {
        onCompleted: (data) => {
            const token = isAuthMode ? data.registerUser.token : data.loginUser.token;
            localStorage.setItem('token', token);
            alert(isAuthMode ? "Регистрация успешна!" : "Успешный вход"); // TODO: Заменить
        },
        onError: (error) => {
            setErrorMessage(error.message);
        }
    });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setErrorMessage(null);

        const variables = isAuthMode ? { name, email, password } : { email, password };
        await authUser({ variables });
    };

    return (
        <div className="container">
            <h2>{isAuthMode ? "Зарегистрироваться" : "Войти"}</h2>
            <form onSubmit={handleSubmit}>
                {isAuthMode && (
                    <input
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                )}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    {isAuthMode ? "Зарегистрироваться" : "Войти"}
                </button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default AuthPage;
