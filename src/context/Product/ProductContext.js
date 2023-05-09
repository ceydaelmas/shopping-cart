import { createContext, useContext, useState, useEffect } from "react";
import { BASE_URL } from "../../config";

export const ProductContext = createContext();

export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProductData = () => {
    fetch(`${BASE_URL}api/Product/get-all-products`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  };

  const fetchProductById = (productId) => {
    return fetch(`${BASE_URL}api/Product/get-product-by-id?Id=${productId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const value = {
    products,
    loading,
    fetchProductById,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
