import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Context/ProductCont";
import { ProductFilterProvider } from "./Context/FilterCont";
import { CartProvider } from "./Context/CartCont";
import { AuthProvider } from "./Context/AuthContext";
import { AddressProvider } from "./Context/Address";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <ProductFilterProvider>
            <CartProvider>
              <AddressProvider>
                <App />
              </AddressProvider>
            </CartProvider>
          </ProductFilterProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
