import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useShoppingCart } from "../context/ShoppingCart.js/ShoppingCartContext";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ShoppingSummary() {
  const { shoppingCart } = useShoppingCart();
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sipariş Özeti
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Ürünün Toplamı: {shoppingCart.totalShoppingCart} TL
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Kullanılan Kupon: bu
        </Typography>
        <Divider sx={{ my: 0.5 }} />
        <Typography
          sx={{ mb: 0, mt: 2, textAlign: "left", fontWeight: "bold" }}
          color="text.primary"
        >
          {shoppingCart.totalShoppingCart} TL
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
