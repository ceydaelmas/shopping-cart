import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import ProductDetailCard from "../components/ProductDetailCard";
import { ProductContext, useProducts } from "../context/Product/ProductContext";

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState(null);
  const { products, fetchProductById, loading } = useProducts();

  useEffect(() => {
    const getProduct = async () => {
      const productData = await fetchProductById(productId);
      setProduct(productData);
    };
    getProduct();
  }, [productId]);

  return (
    <>
      {product && <ProductDetailCard product={product} />}
    </>
  );
};

export default Product;
