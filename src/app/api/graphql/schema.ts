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

    type User {
        id: ID!
        name: String!
        email: String!
        password: String!
        isAdmin: Boolean!
    }

    type AuthPayload {
        user: User!
        token: String!
    }

    type MessageResponse {
        message: String!
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
        registerUser(
            name: String!,
            email: String!,
            password: String!,
            isAdmin: Boolean!
        ): AuthPayload
        loginUser(
            email: String!,
            password: String!,
        ): AuthPayload
        deleteUser(id: Int!): MessageResponse
    }
`;
export default typeDefs;
