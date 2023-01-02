import React, { useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CartProductCard from "../components/CartProductCard";
import CartContext from "../context/CartContext";
import _ from "lodash";
import AppButton from "../components/AppButton";
import "../styles/cartPage.css";
import AppPreviousBar from "../components/AppPreviousBar";

export default function CartPage() {
  let navigate = useNavigate();
  const { cartData } = useContext(CartContext);

  // <==== Display all the product cards ====>
  const displayItems = () => {
    if (!_.isEmpty(cartData)) {
      let results = cartData.map((product) => {
        return (
          <Fragment key={product.id}>
            <CartProductCard product={product} />
          </Fragment>
        );
      });
      return results;
    }
  };

  // <==== Navigate to homepage ====>
  const handlePrevious = () => {
    navigate(`/`);
  };

  return (
    <>
      <AppPreviousBar handlePrevious={handlePrevious} />
      <div className="cart-page-container">
        <h1 className="header-pg">Cart</h1>
        <div className="cart-product-container">{displayItems()}</div>
        <footer className="cart-page-footer">
          <div className="border-line" />
          <AppButton appText="order" color="#5ECE7B" />
        </footer>
      </div>
    </>
  );
}
