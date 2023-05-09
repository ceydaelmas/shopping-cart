import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";
import formatCurrency from "format-currency";
import CartContext from "../context/cart/CartContext";
import { useContext, useEffect } from "react";
import { Typography } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCart.js/ShoppingCartContext";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(0.5),
    minWidth: 250,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    padding: "0px 0px",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "0px 0px",
    },
    "& .MuiMenuItem-root": {
      padding: "4px 16px", // padding özelliği değiştirildi
      height: 45,
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(2),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CartMenu() {
  const { shoppingCart, getShoppingCartItems } = useShoppingCart();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  let opts = { format: "%v %s", symbol: "TL" };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // Burada örnek olarak sabit bir user id kullanıyorum.
    // Gerçek uygulamanızda giriş yapmış kullanıcının id'sini buraya eklemelisiniz.
    console.log("sss");
    getShoppingCartItems();
  }, []);
  useEffect(() => {
    console.log("selamss", shoppingCart);
  }, [shoppingCart]);

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        startIcon={<ShoppingCartOutlinedIcon sx={{ fontSize: "large" }} />}
        sx={{
          color: "white",
          backgroundColor: "primary.main",
          textTransform: "none",
        }}
      >
        Sepetim
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Typography variant="span" gutterBottom>
          {shoppingCart?.items.length !== 0 ? (
            <div style={{ padding: "6px 16px 20px" }}>Sepetim ( ürün)</div>
          ) : (
            <div style={{ padding: "8px 16px 16px", textAlign: "center" }}>
              Sepetinde ürün yok
            </div>
          )}
        </Typography>
        {shoppingCart?.items.length !== 0 &&
          shoppingCart?.items.map((item, index) => (
            <React.Fragment key={index}>
              <MenuItem onClick={handleClose} disableRipple>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar src={item.imageUrl} />
                  </ListItemAvatar>

                  <ListItemText
                    primary={item.name}
                    secondary={`Adet: ${item.productCount}  -  ${formatCurrency(
                      `${item.price}`,
                      opts
                    )}`}
                    sx={{ pr: 8 }}
                  />
                </ListItem>
              </MenuItem>
              {index !== shoppingCart?.items.length - 1 && <Divider />}
            </React.Fragment>
          ))}

        {shoppingCart?.items.length !== 0 && (
          <>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem
              onClick={handleClose}
              disableRipple
              disableTouchRipple
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <Link to="/shopping-cart">
                <div style={{ marginBottom: 6 }}>
                  <Button variant="contained">Sepete Git</Button>
                </div>
              </Link>
            </MenuItem>
          </>
        )}
      </StyledMenu>
    </div>
  );
}
