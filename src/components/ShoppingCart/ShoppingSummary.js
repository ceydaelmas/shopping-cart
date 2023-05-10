import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useShoppingCart } from "../../context/ShoppingCart/ShoppingCartContext";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
//kullanıcı sepete gittiğinde sağ tarafta çıkan yoplam ücret veya indirimlerin görüldüğü sayfa.
export default function ShoppingSummary() {
  const { shoppingCart, appliedCoupon } = useShoppingCart();
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sipariş Özeti
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Ürünün Toplamı: {shoppingCart.totalShoppingCart} TL
        </Typography>
        {appliedCoupon.basketTotalPrice !== 0 && (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Kullanılan Kupon:{" "}
            {appliedCoupon.couponId === "coupon1"
              ? "Merhaba50"
              : appliedCoupon.couponId === "coupon2"
              ? "Kış Sonu10"
              : appliedCoupon.couponId === "coupon3"
              ? "HoşGeldinYaz5"
              : appliedCoupon.couponId}
          </Typography>
        )}

        {appliedCoupon.basketTotalPrice !== 0 && (
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            İndirim Miktarı:{" "}
            {shoppingCart.totalShoppingCart > 50 &&
            appliedCoupon.couponId === "coupon1"
              ? `${
                  shoppingCart.totalShoppingCart -
                  appliedCoupon.basketFinalValue
                } TL`
              : shoppingCart.totalShoppingCart < 50 &&
                appliedCoupon.couponId === "coupon1"
              ? "Lütfen Sepetinize Ürün Ekleyin."
              : appliedCoupon.couponId === "coupon2" ||
                appliedCoupon.couponId === "coupon3"
              ? `${
                  shoppingCart.totalShoppingCart -
                  appliedCoupon.basketFinalValue
                } TL`
              : `${
                  shoppingCart.totalShoppingCart -
                  appliedCoupon.basketFinalValue
                } TL`}
          </Typography>
        )}

        <Divider sx={{ my: 0.5 }} />
        <Typography
          sx={{ mb: 0, mt: 2, textAlign: "left", fontWeight: "bold" }}
          color="text.primary"
        >
          {shoppingCart.totalShoppingCart > 50 &&
          appliedCoupon.couponId === "coupon1"
            ? `${appliedCoupon.basketFinalValue} TL`
            : shoppingCart.totalShoppingCart < 50 &&
              appliedCoupon.couponId === "coupon1"
            ? "Ürün tutarı indirim tutarından büyük olmalıdır."
            : appliedCoupon.couponId === "coupon2" ||
              appliedCoupon.couponId === "coupon3"
            ? `${appliedCoupon.basketFinalValue} TL`
            : `${shoppingCart.totalShoppingCart} TL`}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
