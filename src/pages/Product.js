import React from "react";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import products from "../data";
import ProductDetailCard from "../components/ProductDetailCard";

const Product = () => {
  const location = useLocation();
  const product =
    location.state?.product ||
    products.find((p) => p._id === location.pathname.split("/")[2]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Product
      </Typography>
      {product && <ProductDetailCard product={product} />}
    </>
  );
};

export default Product;
