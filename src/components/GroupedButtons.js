import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
const GroupedButtons = () => {
  const { removeItem } = useContext(CartContext);
  const [count, setCount] = useState(1);
  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 1) setCount(count - 1);
    else {
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
