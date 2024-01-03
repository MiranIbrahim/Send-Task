import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./RouterProvider/Routes";
import "./RouterProvider/Routes.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <div className="full-app">
        <RouterProvider router={router} />
      </div>
    </ChakraProvider>
  </React.StrictMode>
);
