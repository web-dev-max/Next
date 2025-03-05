import { prisma } from "@/lib/prisma";

const productResolvers = {
    Query: {
        getAllProducts: async () => {
            try {
                const products = await prisma.product.findMany();
      
                return products.map(product => ({
                    ...product,
                    createdAt: product.created_at.toISOString(),
                    updatedAt: product.updated_at.toISOString(),
                }));
            } catch (error) {
                console.error(error, 'Ошибка получение всех продуктов');
            }
        },

        getProductById: async (_: unknown, args: { id: number }) => {
            try {
                return await prisma.product.findUnique({
                    where: { id: Number(args.id) }
                });
            } catch (error) {
                console.error(error, 'Ошибка получение продукта');
            }
        }
    },
};

export default productResolvers;