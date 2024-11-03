import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ApolloProviderComponent from "./apollo/ApolloProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProviderComponent>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProviderComponent>
);
