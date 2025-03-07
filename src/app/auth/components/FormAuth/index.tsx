import { LOGIN_AUTH, REGISTER_USER } from "@/lib/request-graphql/auth";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUser } from "@/interfaces/user";
import authSchema from "@/lib/yup-schema";
import { FC } from "react";
import FormAuthList from "../FormAuthList";
import { message } from "antd";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/useUserStore";

interface IFormAuth {
    isRegister: boolean;
}

const FormAuth: FC<IFormAuth> = ({ isRegister }) => {
  const router = useRouter();
  const { loginAuth } = useUserStore();

  const {
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema(isRegister)),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
 
  const [authUser, { loading }] = useMutation(isRegister ? REGISTER_USER : LOGIN_AUTH, {
    onCompleted: (data) => {
      loginAuth(isRegister ? data.registerUser.token : data.loginUser.token)
      reset(data);
      router.push("/");
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  const handleChange = (name: "name" | "email" | "password", value: string) => {
    setValue(name, value, { shouldValidate: true });
  }

  const onSubmit = async (formData: IUser) => {
    const { name, email, password } = formData;
    const variables = isRegister ? { name, email, password } : { email, password };

    await authUser({ variables });
  };

  return (
    <FormAuthList 
        onSubmit={onSubmit}
        onChange={handleChange}
        watch={watch}
        loading={loading}
        handleSubmit={handleSubmit}
        errors={errors}
        isRegister={isRegister}
    />
  );
};

export default FormAuth;
