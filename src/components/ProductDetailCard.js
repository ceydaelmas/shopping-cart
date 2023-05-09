import React from "react";
import "./ProductDetailCard.css";
import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import Rating from "./Rating";

const ProductDetailCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div class="container">
      <div class="box">
        <div class="images">
          <div class="img-holder active">
            <img src={product.imageUrl} />
          </div>
        </div>
        <div class="basic-info">
          <h1>{product.name}</h1>
          <div className="ProductCard__Rateing">
            <Rating value={product.rating} />
          </div>
          <span>{product.price}TL</span>
          <div class="options">
            <button onClick={() => addToCart(product)}>
              Add to Card
            </button>
          </div>
        </div>
        <div class="description">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            temporibus corporis repudiandae, consectetur nostrum nisi commodi
            placeat rerum molestias numquam nihil accusantium deleniti! Enim,
            nesciunt a quis amet hic officia. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestiae nemo accusantium tempora
            facere doloremque cum iusto, ut neque, fuga omnis libero laborum
            ullam. At dolorum qui atque labore illo dignissimos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
