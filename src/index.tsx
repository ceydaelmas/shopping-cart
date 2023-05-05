import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartState from "./context/cart/CartState";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <CartState>
    <App />
  </CartState>
</React.StrictMode>,
);
