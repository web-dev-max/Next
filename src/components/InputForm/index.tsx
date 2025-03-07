import { Input } from 'antd';
import { FieldErrors } from 'react-hook-form';
import { FC } from 'react';

interface IInputForm {
    name: "name" | "email" | "password";
    type?: "text" | "email" | "password";
    placeholder: string;
    value: string;
    onChange: (name: "name" | "email" | "password", value: string) => void;
    error?: FieldErrors;
}
const InputForm: FC<IInputForm> = ({
    name,
    type = '', 
    placeholder, 
    value, 
    onChange, 
    error
}) => (
    <div className="form-group">
        {type === "password" ? (
            <Input.Password
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                status={error?.[name] ? "error" : ""}
                autoComplete="current-password"
            />
        ) : (
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                status={error?.[name] ? "error" : ""}
            />
      )}
        {error?.[name] && <p className="error">{error[name]?.message as string}</p>}
  </div>
);

export default InputForm;