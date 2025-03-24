"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo-client";
import '@ant-design/v5-patch-for-react-19';
import useUserStore from "@/store/useUserStore";
import { useEffect } from "react";

export default function Providers({ children, initialAuth }: { children: React.ReactNode; initialAuth: boolean }) {
  const { checkIsAuth, setAuth } = useUserStore(); 

  useEffect(() => {
    setAuth(initialAuth);
    if(!initialAuth) {
      checkIsAuth();
    }
  }, [initialAuth, setAuth, checkIsAuth])

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
