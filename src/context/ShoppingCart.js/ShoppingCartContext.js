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

  const getTotalItemCount = (items) => {
    let total = 0;
    for (let i = 0; i < shoppingCart?.items?.length; i++) {
      total += shoppingCart.items[i].productCount;
    }
    return total;
  };

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

      // Sepeti güncelle
      getShoppingCartItems();
    } catch (error) {
      console.error("Error adding item to shopping cart:", error);
    }
  };

  const removeItemFromShoppingCart = async (productId) => {
    try {
      const response = await authorizedFetch(
        `${BASE_URL}api/ShoppingCart/remove-item-from-shopping-cart?productId=${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error removing item from shopping cart.");
      }

      // Sepeti güncelle
      getShoppingCartItems();
    } catch (error) {
      console.error("Error removing item from shopping cart:", error);
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
    removeItemFromShoppingCart,
    getShoppingCartItems,
    getTotalItemCount,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
