import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL } from "../../config";
import { useAuth } from "../Auth/AuthContext";

export const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
    totalShoppingCart: 0,
  });
  const { authorizedFetch } = useAuth(); // authorizedFetch'i alın
  useEffect(() => {
    getShoppingCartItems();
  }, []);

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

      setShoppingCart({
        ...shoppingCart,
        items: [...shoppingCart.items, data],
      });

      // Sepeti güncelle
      getShoppingCartItems();
    } catch (error) {
      console.error("Error adding item to shopping cart:", error);
    }
  };

  const getShoppingCartItems = async () => {
    console.log("GİRDİ");
    const response = await authorizedFetch(
      `${BASE_URL}api/ShoppingCart/get-all-shopping-cart-items`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    ).catch((e) => console.log(e));

    if (!response.ok) {
      throw new Error("Error getting shopping cart items.");
    }

    const data = await response.json();
    setShoppingCart(data);
    console.log("data:   ", data);
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
