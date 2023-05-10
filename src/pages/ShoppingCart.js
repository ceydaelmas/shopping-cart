import { Grid, Typography } from "@mui/material";
import ShoppingCardDetail from "../components/ShoppingCardDetail";
import ShoppingSummary from "../components/ShoppingSummary";
import Button from "@mui/material/Button";
import CartContext from "../context/cart/CartContext";
import { useContext, useEffect } from "react";
import { useShoppingCart } from "../context/ShoppingCart.js/ShoppingCartContext";

const ShoppingCart = () => {
  const { shoppingCart, getShoppingCartItems } = useShoppingCart();
  useEffect(() => {
    // Burada örnek olarak sabit bir user id kullanıyorum.
    // Gerçek uygulamanızda giriş yapmış kullanıcının id'sini buraya eklemelisiniz.
    console.log("sss");
    getShoppingCartItems();
  }, []);
  useEffect(() => {
    console.log("DİĞER SHOPPING CART", shoppingCart);
  }, [shoppingCart]);

  return (
    <>
      {shoppingCart?.items.length !== 0 && (
        <>
          <Typography variant="h4" gutterBottom>
            Sepetim
          </Typography>
          <Grid container spacing={60} sx={{ alignItems: "flex-start" }}>
            <Grid item xs={12} sm={6}>
              <ShoppingCardDetail />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ShoppingSummary />
              <br />
              <Button variant="outlined" sx={{ minWidth: "275px" }}>
                İndirim Kuponu Ekle
              </Button>
              <br />
              <br />
              <Button variant="contained" sx={{ minWidth: "275px" }}>
                Sepeti Onayla{" "}
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default ShoppingCart;
