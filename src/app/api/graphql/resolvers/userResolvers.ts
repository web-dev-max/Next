import { prisma } from "@/lib/prisma";

const userResolvers = {
    Mutation: {
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

  