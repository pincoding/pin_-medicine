import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Globalstyled } from "./components/Globalstyled";
import { ChakraProvider } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Globalstyled />
          <Router />
        </ChakraProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
