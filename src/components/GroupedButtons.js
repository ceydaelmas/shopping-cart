import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";

const GroupedButtons = ({ id }) => {
  const { removeItem, cartItems, addToCart, decreaseItem } =
    useContext(CartContext);

  const cartItem = cartItems.find((item) => item._id === id);

  const [count, setCount] = useState(cartItem ? cartItem.quantity : 1);

  useEffect(() => {
    if (cartItem) {
      setCount(cartItem.quantity);
    }
  }, [cartItem]);

  const IncNum = () => {
    if (cartItem) {
      addToCart(cartItem);
    }
  };

  const DecNum = () => {
    if (count > 1) {
      setCount(count - 1);
      decreaseItem(id); // Bu satırı güncelleyin
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
