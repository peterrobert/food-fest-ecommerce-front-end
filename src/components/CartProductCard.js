import React from "react";

export default function CartProductCard({ product }) {
  return (
    <div className="cart-product-container" style={styles.cartProductContainer}>
      <div className="border-line" style={styles.borderLine} />
      <div className="card-container" style={styles.cardContainer}>
        <div className="card-info" style={styles.cardInfo}>
          <h2>{product.title}</h2>

          <h3>{product.price}$$</h3>
        </div>
        <div
          className="card-image-slider-container"
          style={styles.cardImageSlider}
        >
          <div className="slider-container" style={styles.sliderContainer}>
            <img style={styles.imageInfo} src={product.image} alt="product" />
          </div>
        </div>
      </div>
    </div>
  );
}

// <==== CART PRODUCT CARD REUSABLE COMPONENT STYLES ====>
const styles = {
  cartProductContainer: {
    paddingRight: "50px",
    paddingLeft: "50px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  borderLine: {
    background: "#E5E5E5",
    width: "100%",
    height: "1px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "nowrap",
  },
  cardInfo: {
    flex: 1,
  },
  cardImageSlider: {
    flex: 3,
    display: "flex",
    justifyContent: "flex-end",
  },
  cartSizeButtonContainer: {
    display: "flex",
    flexWrap: "nowrap",
  },
  imageInfo: {
    height: "200px",
  },

  cartColorButtonContainer: {
    display: "flex",
    flexWrap: "nowrap",
    marginBottom: "20px",
  },
  sliderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  incrementDecrementButtons: {
    display: "flex",
    flexDirection: "column",
  },
  incrementButton: {
    marginTop: "15px",
    flex: 1,
  },
  incrementValue: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  decrementButton: {
    marginBottom: "15px",
  },
};
