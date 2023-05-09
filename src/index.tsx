import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartState from "./context/cart/CartState";
import { AuthProvider } from "./context/Auth/AuthContext";
import { ProductProvider } from "./context/Product/ProductContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <CartState>
          <App />
        </CartState>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
);
