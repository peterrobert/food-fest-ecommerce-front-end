import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import AppButton from "../components/AppButton";
import { fetchSingleProduct } from "../services/ProductService";
import AppLoader from "../components/AppLoader";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
import _ from "lodash";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
// ===== CSS ====
import "../styles/productPageDisplay.css";
import AppPreviousBar from "../components/AppPreviousBar";

export default function ProductDisplayPage() {
  let { id } = useParams();
  let navigate = useNavigate();
  const { cartData, addToCart } = useContext(CartContext);

  // ==== QUERY ====
  // fetch a single product
  const {
    isLoading: singleProductIsLoading,
    status: singleProductStatus,
    data: singleProductData,
  } = useQuery(["Single Product", id], fetchSingleProduct);

  // <==== Add the item to the cart ====>
  const handleAddToCart = (product) => {
    // <=== If the cart is empty ====>
    // <=== If the cart is empty ====>
    if (_.isEmpty(cartData)) {
      addToCart(product);

      NotificationManager.success(
        "Product has been added to the cart",
        "Notice!",
        3000
      );
    }

    // <=== However it means the cart already has that product so show notice.
    if (!_.isEmpty(cartData) && !_.includes(cartData, product)) {
      addToCart(product);
      NotificationManager.success(
        "Product has been added to the cart",
        "Notice!",
        3000
      );
      return;
    }

    // <==== If the cart includes the item ====>
    if (!_.isEmpty(cartData) && _.includes(cartData, product)) {
      NotificationManager.warning(
        "Product is already in the cart",
        "Notice!",
        3000
      );
      return;
    }
  };

  // <==== Navigate to homepage ====>
  const handlePrevious = () => {
    navigate(`/`);
  };

  // <==== Navigate to Cart page ====>
  const navigateToCartPage = () => {
    navigate(`/cart`);
  };

  // <===== Load the loader component of the data is still fetching ====>
  if (singleProductIsLoading)
    return <AppLoader singleProductStatus={singleProductStatus} />;

  //  <==== load the data when the loader finishes loading  ====>
  return (
    <>
      <NotificationContainer />
      <AppPreviousBar
        handlePrevious={handlePrevious}
        navigateToCartPage={navigateToCartPage}
      />
      <div className="product-display-container container">
        <div className="main-image-display">
          <img src={singleProductData.image} alt="main" />
        </div>
        <div className="main-content-display">
          <div className="card-info">
            <h2>{singleProductData.title}</h2>
            <h1>{singleProductData.category}</h1>
            <div className="cart-size-button-container">
              <h4>PRICE:</h4>
              <h3 className="product-display-price">
                $$
                {singleProductData.price}
              </h3>
              <AppButton
                appText="Add to cart"
                color="#5ECE7B"
                handleClick={() => handleAddToCart(singleProductData)}
              />
              <div
                className="product-description"
                style={styles.productDescription}
              >
                {singleProductData.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  cartSizeButtonContainer: {
    display: "flex",
    flexWrap: "nowrap",
  },
  productDescription: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400px",
    fontSize: "20px",
    color: "#1D1F22",
  },
};
