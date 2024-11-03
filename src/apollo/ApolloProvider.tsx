import React, { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./Client";

interface ApolloProviderProps {
  children: ReactNode;
}

const ApolloProviderComponent: React.FC<ApolloProviderProps> = ({
  children,
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderComponent;
