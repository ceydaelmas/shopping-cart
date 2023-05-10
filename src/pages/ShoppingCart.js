import { Grid, Typography } from "@mui/material";
import { Divider } from "@mui/material";
import ShoppingCardDetail from "../components/ShoppingCart/ShoppingCardDetail";
import ShoppingSummary from "../components/ShoppingCart/ShoppingSummary";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCart/ShoppingCartContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ShoppingCart = () => {
  const {
    shoppingCart,
    getShoppingCartItems,
    getTotalItemCount,
    applyCoupon,
    appliedCoupon,
  } = useShoppingCart();
  const [coupon, setCoupon] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getShoppingCartItems();
  }, []);

  const handleChange = (e) => {
    setCoupon(e.target.value);
  };

  const handleApplyCoupon = () => {
    applyCoupon(coupon);
    //TextField'ten alınan coupon id'yi applyCoupon fonksiyonuna gönderiyoruz.
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {shoppingCart?.items.length !== 0 && (
        <>
          <Typography variant="h6" gutterBottom sx={{ mt: 1, ml: 6.5 }}>
            Sepetim ({getTotalItemCount()} ürün)
          </Typography>
          <Divider sx={{ mt: 2, mb: 5, ml: 6.5, mr: 10 }} />
          <Grid container spacing={60} sx={{ ml: -52, mr: 10 }}>
            <Grid item xs={12} sm={6}>
              <ShoppingCardDetail />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ShoppingSummary />

              <br />
              <br />
              <Button
                variant="outlined"
                onClick={handleClickOpen}
                sx={{ minWidth: "275px" }}
              >
                İNDİRİM Kuponu Ekle
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Kupon Ekle</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    İndirim kuponlarım'dan sana özel tanımlı kuponları
                    görebilirsin.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Kupon Kodun"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={coupon} // coupon state'ini TextField bileşeninin value özelliğine bağlıyoruz.
                    onChange={handleChange} // coupon state'ini değiştirmek için handleChange fonksiyonunu kullanıyoruz.
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Kapat</Button>
                  <Button onClick={handleApplyCoupon}>Uygula</Button>
                </DialogActions>
              </Dialog>
              <br />
              <br />

              <Button variant="contained" sx={{ minWidth: "275px" }}>
                Sepetİ Onayla{" "}
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default ShoppingCart;
