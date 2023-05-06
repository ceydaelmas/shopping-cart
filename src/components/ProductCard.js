import { useContext } from "react";
import "./ProductCard.css";
import formatCurrency from "format-currency";
import Rating from "./Rating";
import CartContext from "../context/cart/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <div className="productCard__wrapper">
      <div>
        <Link
          to={{
            pathname: `/products/${product._id}`,
            state: { product: product },
          }}
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img className="productCard__img" src={product.image} alt="" />
          <h4 style={{ display: "inline-block" }}>{product.name}</h4>
        </Link>
        <div className="ProductCard__price">
          <h5>{formatCurrency(`${product.price}`, opts)}</h5>
        </div>
        <div className="ProductCard__Rateing">
          <Rating value={product.rating} />
        </div>

        <button
          className="ProductCard__button"
          onClick={() => addToCart(product)}
        >
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
