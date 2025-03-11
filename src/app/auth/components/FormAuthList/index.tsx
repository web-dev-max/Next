import { IUser } from "@/lib/interfaces/user";
import { FC, FormEventHandler } from "react";
import { FieldErrors, SubmitHandler, UseFormWatch } from "react-hook-form";
import "./styles.scss";
import { Button } from 'antd';
import InputForm from "@/components/InputForm";

interface IFormAuthList {
    isRegister: boolean;
    handleSubmit: (callback: SubmitHandler<IUser>) => FormEventHandler<HTMLFormElement>;
    onSubmit: SubmitHandler<IUser>;
    onChange: (name: "name" | "email" | "password", value: string) => void;
    watch: UseFormWatch<IUser>;
    errors: FieldErrors<IUser>;
    loading: boolean;
}

const FormAuthList: FC<IFormAuthList> = ({
    isRegister,
    handleSubmit,
    onSubmit,
    watch,
    onChange,
    errors,
    loading
}) =>  (
    <div className="container">
        <h2>{isRegister ? "Зарегистрироваться" : "Войти"}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {isRegister && (
                <InputForm 
                    name="name"
                    type="text"
                    placeholder="Имя"
                    value={watch("name") ?? ""}
                    onChange={onChange}
                    error={errors}
                />
            )}
            <InputForm 
                name="email"
                type="email"
                placeholder="Email"
                value={watch("email")}
                onChange={onChange}
                error={errors}
            />
            <InputForm
                name="password"
                type="password"
                placeholder="Пароль"
                value={watch("password")}
                onChange={onChange}
                error={errors}
            />
            <Button type="primary" htmlType="submit" disabled={loading}>
                {isRegister ? "Зарегистрироваться" : "Войти"}
            </Button>
        </form>
    </div>
);

export default FormAuthList;

