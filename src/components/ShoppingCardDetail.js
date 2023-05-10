import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import formatCurrency from "format-currency";
import CartContext from "../context/cart/CartContext";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import { CardActionArea } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCart.js/ShoppingCartContext";
import GroupedButtons from "./GroupedButtons";
import { useContext, useEffect } from "react";

export default function ShoppingCardDetail() {
  const { shoppingCart, getShoppingCartItems } = useShoppingCart();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { quantity, cartItems, removeItem } = useContext(CartContext);
  let opts = { format: "%v %s", symbol: "TL" };

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
      {shoppingCart?.items.length !== 0 &&
        shoppingCart?.items.map((item, index) => (
          <Card
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              marginBottom: "20px",
              boxShadow: "0px 0px 2px 1px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              overflow: "hidden",
              width: isMobile ? "100%" : 930,
              height: isMobile ? "auto" : 130,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: isMobile ? "100%" : 130,
                height: isMobile ? 200 : 130,
              }}
              image={item.imageUrl}
              alt="image"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h5"
                  sx={{
                    maxWidth: "250px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",

                    mb: 1,
                  }}
                >
                  {item.name}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Tahmini Kargoya Teslim: 2 gün içinde
                </Typography>
              </CardContent>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: isMobile ? 2 : 1,
                justifyContent: "center",
                paddingLeft: 10,
              }}
            >
              <GroupedButtons id={item._id} />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: isMobile ? 2 : 1,
                justifyContent: "center",
                paddingLeft: 10,
              }}
            >
              <Typography
                variant="subtitle1"
                color="primary"
                component="div"
                noWrap
              >
                {formatCurrency(`${item.price}`, opts)}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: isMobile ? 2 : 1,
                justifyContent: "center",
                paddingLeft: 10,
              }}
            >
              <IconButton edge="end" aria-label="delete">
                <DeleteOutlineOutlinedIcon
                  onClick={() => removeItem(item._id)}
                />
              </IconButton>
            </Box>
          </Card>
        ))}
    </>
  );
}
