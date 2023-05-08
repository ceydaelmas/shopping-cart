import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartState from "./context/cart/CartState";
import { AuthProvider } from "./context/Auth/AuthContext"; // İçe aktarın

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartState>
        <App />
      </CartState>
    </AuthProvider>
  </React.StrictMode>
);
