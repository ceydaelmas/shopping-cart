import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useShoppingCart } from "../context/ShoppingCart.js/ShoppingCartContext";

const GroupedButtons = ({ id }) => {
  const { shoppingCart, getShoppingCartItems, removeItemFromShoppingCart } =
    useShoppingCart();
  const { removeItem, cartItems, addToCart, decreaseItem } =
    useContext(CartContext);

  useEffect(() => {
    // Burada örnek olarak sabit bir user id kullanıyorum.
    // Gerçek uygulamanızda giriş yapmış kullanıcının id'sini buraya eklemelisiniz.

    getShoppingCartItems();
  }, []);
  useEffect(() => {}, [shoppingCart]);

  const newCart = shoppingCart.items.find((item) => item.productId === id);

  const [count, setCount] = useState(newCart ? newCart.productCount : 1);

  useEffect(() => {
    if (newCart) {
      setCount(newCart.productCount);
    }
  }, [newCart]);

  const IncNum = () => {
    if (newCart) {
      addToCart(newCart);
    }
  };

  const DecNum = async () => {
    if (count > 1) {
      setCount(count - 1);
      await removeItemFromShoppingCart(id);
      getShoppingCartItems();
    } else {
      setCount(1);
      alert("min limit reached");
    }
  };

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button onClick={DecNum}>-</Button>
      <Button sx={{ pointerEvents: "none", color: "inherit" }}>{count}</Button>
      <Button onClick={IncNum} sx={{ minWidth: "32px" }}>
        +
      </Button>
    </ButtonGroup>
  );
};

export default GroupedButtons;
