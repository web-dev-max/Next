import generateToken from "../jwt";
import { cookies } from "next/headers";

export const authSetCookie = async (
    user: { id: number; name: string; email: string; isAdmin: boolean }
) => {
    if (!user) {
        throw new Error('Пользователь не найден или недействителен');
    }
    const token = generateToken({ id: user.id });

    (await cookies()).set("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });

    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        token,
    };
}