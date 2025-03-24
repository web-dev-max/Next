import jwt from "jsonwebtoken";
import { NextRequest } from "next/server"
import { prisma } from '../prisma';

export const authUser = async (req: NextRequest) => {
    const authHeader = req.headers.get('authorization')?.split(' ')[1];
    if (!authHeader) throw new Error("Неавторизован");
    
    try {
        const decoded = jwt.verify(authHeader, process.env.JWT_SECRET!) as { id: number };
        
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
        });
        if (!user) throw new Error('Пользователь не найден');

        return user;
    } catch (error) {
        console.error(error, 'Ошибка аутентификации')
    }

};
