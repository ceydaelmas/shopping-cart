import { createContext, useContext, useState } from "react";
import { BASE_URL } from "../../config";
import { useAuth } from "../Auth/AuthContext";

export const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const { authorizedFetch } = useAuth(); // authorizedFetch'i alın

  const addItemToShoppingCart = async (productId) => {
    try {
      const response = await authorizedFetch(
        `${BASE_URL}api/ShoppingCart/add-item-to-shopping-cart?productId=${productId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error adding item to shopping cart.");
      }

      const data = await response.json();
      setShoppingCart(data);
      console.log(shoppingCart);
    } catch (error) {
      console.error("Error adding item to shopping cart:", error);
    }
  };

  const getShoppingCartItems = async (userId) => {
    try {
      const response = await authorizedFetch(
        `${BASE_URL}api/ShoppingCart/get-all-shopping-cart-items?UserId=${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error getting shopping cart items.");
      }

      const data = await response.json();
      setShoppingCart(data);
      console.log(shoppingCart);
    } catch (error) {
      console.error("Error getting shopping cart items:", error);
    }
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
