import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button, CardActionArea, CardActions } from "@mui/material";
import formatCurrency from "format-currency";
import Rating from "./Rating";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ProductContext, useProducts } from "../context/Product/ProductContext";
import { useShoppingCart } from "../context/ShoppingCart.js/ShoppingCartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isAddToCartVisible, setIsAddToCartVisible] = useState(false);
  const { products, fetchProductById, loading } = useProducts();
  const { addItemToShoppingCart } = useShoppingCart();

  const handleAddToCart = () => {
    // Replace with the actual user ID
    addItemToShoppingCart(product.id);
  };
  let opts = { format: "%v %s", symbol: "TL" };
  return (
    <Card sx={{ width: 250, height: 500 }}>
      <CardActionArea
        onMouseEnter={() => setIsAddToCartVisible(true)}
        onMouseLeave={() => setIsAddToCartVisible(false)}
      >
        <Link
          to={{
            pathname: `/products/${product.id}`,
            state: { product: product },
          }}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div style={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="290"
              image={product.imageUrl}
              alt={product.name}
            />
            <IconButton
              aria-label="settings"
              sx={{
                position: "absolute",
                top: 5,
                right: 5,
                bgcolor: "common.white",
                borderRadius: "50%",
                "&:hover": {
                  bgcolor: "common.white",
                },
              }}
              disableRipple
            >
              <FavoriteBorderIcon
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              />
            </IconButton>
          </div>
          <CardContent>
            <Typography
              noWrap
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontSize: 17 }}
            >
              <span style={{ fontWeight: "bold" }}>{product.name}</span>{" "}
              {product.description}
            </Typography>
            <Rating name="read-only" value={product.rating} readOnly />
            <div className="ProductCard__price">
              <Typography
                variant="h6"
                color="primary"
                gutterBottom
                sx={{ fontSize: 17 }}
              >
                {formatCurrency(`${product.price}`, opts)}
              </Typography>
            </div>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions
        onMouseEnter={() => setIsAddToCartVisible(true)}
        onMouseLeave={() => setIsAddToCartVisible(false)}
      >
        {isAddToCartVisible && (
          <Button
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              display: "block",
              margin: "0 auto",
              width: "200px",
            }}
            size="large"
            color="primary"
            variant="contained"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
