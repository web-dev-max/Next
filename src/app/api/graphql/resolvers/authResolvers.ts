import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import generateToken from "@/lib/jwt";

const findUserDetail = async (email: string) => {
    return await prisma.user.findUnique({
        where: { email }
    });
};

const authResolvers = {
    Mutation: {
        registerUser: async (_: unknown, args: { name: string; email: string; password: string; isAdmin: boolean }) => {
            try {
                if (await findUserDetail(args.email)) {
                    throw new Error("Пользователь уже существует");
                }
                
                const hashPassword = await bcrypt.hash(args.password, 10); 

                const newUser = await prisma.user.create({
                    data: {
                        name: args.name,
                        email: args.email,
                        password: hashPassword,
                        isAdmin: args.isAdmin,
                    }
                });
                const token = generateToken({ id: newUser.id });

                return {
                    user: {
                        id: newUser.id,
                        name: newUser.name,
                        email: newUser.email,
                        isAdmin: newUser.isAdmin,
                    },
                    token
                };

            } catch (error) {
                console.error(error, 'Ошибка при регистрации');

                if (error instanceof Error) {
                    throw error;
                }
            }
        },
        
        loginUser: async (_: unknown, args: { email: string, password: string }) => {
            try {
                const user = await findUserDetail(args.email);
                if (!user)  throw new Error('Пользователь не существует');

                const validPassword = await bcrypt.compare(args.password, user.password)
                if (!validPassword) throw new Error('Неверный пароль!');
                
                const token = generateToken({ id: user.id });
                
                return {
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin,
                    },
                    token
                };
            } catch (error) {
                console.error('Ошибка при авторизации пользователя!', error);

                if (error instanceof Error) {
                    throw error;
                }
            }
        }
    }
};

export default authResolvers;