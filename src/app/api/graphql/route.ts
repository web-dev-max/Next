import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import typeDefs from "./schema";
import resolvers from "./resolvers";

const server = new ApolloServer({
    resolvers,
    typeDefs,
})

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async (req, res) => ({
        req,
        res,
        dataSources: {},
    }),
});

export async function GET(req: NextRequest) {
    return handler(req);
};

export async function POST(request: NextRequest) {
    return handler(request);
};