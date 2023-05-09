import { createContext, useContext, useState } from "react";
import { BASE_URL } from "../../config";

export const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addItemToShoppingCart = (userId, productId) => {
    fetch(`${BASE_URL}api/ShoppingCart/add-item-to-shopping-cart`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setShoppingCart(data);
        console.log(shoppingCart);
      })
      .catch((error) => {
        console.error("Error adding item to shopping cart:", error);
      });
  };

  const getShoppingCartItems = (userId) => {
    fetch(
      `${BASE_URL}api/ShoppingCart/get-all-shopping-cart-items?UserId=${userId}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setShoppingCart(data);
        console.log(shoppingCart);
      })
      .catch((error) => {
        console.error("Error getting shopping cart items:", error);
      });
  };

  const value = {
    shoppingCart,
    addItemToShoppingCart,
    getShoppingCartItems,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
