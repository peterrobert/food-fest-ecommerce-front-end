import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
import cart from "../images/cart.png";
import addProductToCart from "../helpers/addProductToCart";

export default function AppProductCard({ product }) {
  const appCart = useContext(CartContext);
  const { addToCart, cartData } = appCart;
  const { title, image, price, id } = product;

  let navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card-container" style={styles.productContainer}>
      <img
        src={image}
        alt="product-one"
        style={styles.productImage}
        onClick={() => handleNavigate()}
      />
      <h2 style={styles.productName}>{title}</h2>
      <h2 style={styles.productPrice}>{price} $$</h2>
      <div
        className="card-cart-button"
        onClick={() => addProductToCart(product, cartData, addToCart)}
      >
        <img src={cart} alt="cart-button" />
      </div>
    </div>
  );
}

// <==== PRODUCT CARD REUSABLE COMPONENT STYLES ====>

const styles = {
  productContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    background: "#FFFFFF",
    minHeight: "420px",
    flexWrap: "nowrap",
    maxWidth: "386px",
    minWidth: "386px",
    marginTop: "10px",
    marginBottom: "10px",
    cursor: "pointer",
  },

  outOfStock: {
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    background: "#FFFFFF",
    minHeight: "420px",
    flexWrap: "nowrap",
    maxWidth: "386px",
    minWidth: "386px",
    marginTop: "10px",
    marginBottom: "10px",
    opacity: 0.5,
  },

  outOfStockContainer: {
    position: "relative",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    top: "210px",
  },

  outOfStockText: {
    color: "#8D8F9A",
    fontFamily: "Raleway, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    position: "absolute",
  },

  productImage: {
    width: "100%",
    height: "330px",
    objectFit: "contain",
    objectPosition: "center",
  },
  productName: {
    fontWeight: "200",
  },
  productPrice: {
    fontWeight: 500,
    fontSize: "18px",
    marginTop: "-10px",
  },
};
