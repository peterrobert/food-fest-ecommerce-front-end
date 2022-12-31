import React from "react";
import cart from "../images/cart.png";

export default function AppProductCard({ product }) {
  const { title, image, price } = product;
  return (
    <div className="product-card-container">
      <img
        src={image}
        alt="product-one"
        style={styles.productImage}
        onClick={() => console.log("clicked")}
      />
      <h2 style={styles.productName}>{title}</h2>
      <h2 style={styles.productPrice}>{price}</h2>
      <div
        className="card-cart-button"
        onClick={() => console.log("add to cart")}
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
    height: "338px",
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
