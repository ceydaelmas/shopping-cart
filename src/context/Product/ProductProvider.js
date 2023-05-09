// ProductProvider.js
import { useState, useEffect } from "react";
import ProductContext from "./ProductContext";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("useEffect running");

    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://0a78-31-206-104-209.ngrok-free.app/api/Product/get-all-products"
        );
        if (!response.ok) {
          throw new Error("API isteği başarısız oldu!");
        }
        const data = await response.json();
        setProducts(data);
        console.log("Products fetched:", data); // Bu satırı ekleyin
      } catch (error) {
        console.error("Ürünlerin alınmasında bir hata oluştu:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
