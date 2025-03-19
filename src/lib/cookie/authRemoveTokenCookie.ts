import { cookies } from "next/headers";

export const authRemoveTokenCookie = async () => {
    (await cookies()).set("token", "", {
        httpOnly: true,
        secure: false,
        maxAge: 0,
        path: "/",
    });

    return { message: "Выход выполнен" };
};
