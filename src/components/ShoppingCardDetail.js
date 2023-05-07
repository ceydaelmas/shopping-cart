import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import formatCurrency from "format-currency";
import CartContext from "../context/cart/CartContext";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import { CardActionArea } from '@mui/material';

import GroupedButtons from "./GroupedButtons";
import { useContext } from "react";

export default function ShoppingCardDetail() {
  const theme = useTheme();
  const { quantity, cartItems, removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <>
      {cartItems.map((item, index) => (
        <Card
          sx={{
            display: "flex",
            marginBottom: "20px",
            boxShadow: "0px 0px 2px 1px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            overflow: "hidden",
            width: 930,
            height: 130,
          }}
        >
          
          <CardMedia
            component="img"
            sx={{ width: 130, height: 130 }}
            image={item.image}
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
              pb: 1,
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <GroupedButtons />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
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
              pb: 1,
              justifyContent: "center",
              paddingLeft: 10,
            }}
          >
            <IconButton edge="end" aria-label="delete">
              <DeleteOutlineOutlinedIcon onClick={() => removeItem(item._id)} />
            </IconButton>
          </Box>
        </Card>
      ))}
    </>
  );
}
