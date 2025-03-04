import { prisma } from "@/lib/prisma";

const resolvers = {
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

        getProductID: async (id: string) => {
            try {
                return await prisma.product.findUnique(id)
            } catch (error) {
                console.error(error, 'Ошибка получение продукта');
            }
        }
    },
    Mutation: {

    }
};

export default resolvers;