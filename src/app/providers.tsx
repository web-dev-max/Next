"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo-client";
import '@ant-design/v5-patch-for-react-19';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
