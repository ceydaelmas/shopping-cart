import { Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import "./ProductList.css";
import products from "../data";
import Product from "./Product";

const ProductList = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>
      <div className="products_wrapper">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default ProductList;
