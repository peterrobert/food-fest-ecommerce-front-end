import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AppButton from "../components/AppButton";
import AppLoader from "../components/AppLoader";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
// ===== CSS ====
import "../styles/productPageDisplay.css";
import AppPreviousBar from "../components/AppPreviousBar";
import useFetchsingleProduct from "../hooks/useFetchSingleProduct";
import addProductToCart from "../helpers/addProductToCart";

export default function ProductDisplayPage() {
  let { id } = useParams();
  let navigate = useNavigate();

  // <==== QUERY ==== FETCH SINGLE PRODUCT =====>
  const { singleProductData, singleProductIsLoading, singleProductStatus } =
    useFetchsingleProduct(id);

  // <==== CONTEXT ITEMS ====>
  const { cartData, addToCart } = useContext(CartContext);

  const displayAddToCart = () => {
    if (cartData.some((item) => item.id !== singleProductData.id))
      return (
        <AppButton
          appText="Add to cart"
          color="#5ECE7B"
          handleClick={() =>
            addProductToCart(singleProductData, cartData, addToCart)
          }
        />
      );

    return (
      <AppButton
        appText="Already in the cart"
        color="#FFA500"
        handleClick={() =>
          NotificationManager.warning(
            "Product is already in the cart",
            "Notice!",
            3000
          )
        }
      />
    );
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

              {displayAddToCart()}

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
