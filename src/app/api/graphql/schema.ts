const typeDefs = `#graphql
    type Product {
        id: ID!
        name: String!
        price: Float!
        description: String!
        category: String
        image: String
        amount: Int!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        getAllProducts: [Product]
        getProductById(id: ID!): Product
    }

    type Mutation {
        createProduct(
            name: String!,
            price: Float!,
            description: String!,
            category: String,
            image: String,
            amount: Int!
        ): Product
    }
`;
export default typeDefs;
