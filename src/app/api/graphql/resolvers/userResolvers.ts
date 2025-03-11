import { authUser } from "@/lib/auth-user";
import { authRemoveCookie } from "@/lib/cookie/authRemoveCookie";
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

const userResolvers = {
    Query: {
        getUser: async (_: unknown, __: unknown, { req }: { req: NextRequest }) => {
            try {
                return await authUser(req);
            } catch (error) {
                console.error(error, 'Ошибка получение данных пользователя');
            }
        },
    },
    Mutation: {
        // addImageUser: async () => {
            
        // },
        logoutUser: async () => {
            try {
                return await authRemoveCookie();
            } catch (error) {
                console.error('Ошибка при выходе пользователя!', error);
                throw error;
            }
        },
        deleteUser: async (_: unknown, args: { id: number }) => {
            try {
                const user = await prisma.user.findUnique({
                    where: { id: args.id }
                });
                if (!user) throw new Error("Пользователь не найден");

                await prisma.user.delete({
                    where: { id: args.id }
                });
                
                return { message: "Пользователь успешно удалён" };
            } catch (error) {
                console.error(error, 'Ошибка при удалении пользователя');
            }
        },
    }
};

export default userResolvers;

  