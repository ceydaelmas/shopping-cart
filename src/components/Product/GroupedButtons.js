import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import { useShoppingCart } from "../../context/ShoppingCart/ShoppingCartContext";

// Sepetim ksımındaki ürünün miktarını arttırır veya azaltan butonların olduğu
// ve bunların hem quantitysine göre hem de quantity totalına göre silmesini/eklemesini sağlar.

const GroupedButtons = ({ id }) => {
  const {
    shoppingCart,
    getShoppingCartItems,
    addItemToShoppingCart,
    removeItemFromShoppingCart,
  } = useShoppingCart();

  useEffect(() => {
    getShoppingCartItems();
  }, []);

  useEffect(() => {}, [shoppingCart]);

  const newCart = shoppingCart?.items.find((items) => items.productId === id);

  const [count, setCount] = useState(newCart ? newCart.productCount : 1);

  useEffect(() => {
    if (newCart) {
      setCount(newCart.productCount);
    }
  }, [newCart]);

  const IncNum = async () => {
    if (newCart) {
      await addItemToShoppingCart(id);
      getShoppingCartItems();
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
