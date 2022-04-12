
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./Context/ProductCont";
import { ProductFilterProvider } from "./Context/FilterCont";
import { CartProvider } from "./Context/CartCont";



// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
      <ProductFilterProvider>
        <CartProvider>
    <App />
    </CartProvider>
    </ProductFilterProvider>
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

