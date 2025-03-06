import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
    uri: "/api/graphql",
    headers: {
        authorization: typeof window !== "undefined" ? `Bearer ${localStorage.getItem("token")}` : "",
    }
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

export default client;