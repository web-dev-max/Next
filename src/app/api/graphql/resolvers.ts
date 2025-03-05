import productResolvers from "./resolvers/productResolvers";
import authResolvers from "./resolvers/authResolvers";
import userResolvers from "./resolvers/userResolvers";

const resolvers = {
    Query: {
        ...productResolvers.Query,
    },
    Mutation: {
        ...authResolvers.Mutation,
        ...userResolvers.Mutation,
    }
};

export default resolvers;