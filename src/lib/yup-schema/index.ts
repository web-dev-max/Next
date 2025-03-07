import * as yup from "yup";

const authSchema = (isRegister: boolean) => {
    return yup.object().shape({
        name: isRegister
          ? yup.string()
              .min(2, "Имя должно содержать минимум 2 символа")
              .max(50, "Имя не может превышать 50 символов")
              .required("Обязательное поле")
          : yup.string().notRequired(),
        email: yup.string().email("Некорректный email").required("Email обязателен"),
        password: yup.string().min(6, "Минимум 6 символов").required("Пароль обязателен"),
    });
}

export default authSchema;
  