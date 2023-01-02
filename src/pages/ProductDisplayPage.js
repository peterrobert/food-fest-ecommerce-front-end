import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import AppButton from "../components/AppButton";
import { fetchSingleProduct } from "../services/ProductService";
import AppLoader from "../components/AppLoader";
import { useNavigate } from "react-router-dom";
// ===== CSS ====
import "../styles/productPageDisplay.css";
import AppPreviousBar from "../components/AppPreviousBar";

export default function ProductDisplayPage() {
  let { id } = useParams();
  let navigate = useNavigate();

  // ==== QUERY ====
  // fetch a single product
  const {
    isLoading: singleProductIsLoading,
    status: singleProductStatus,
    data: singleProductData,
  } = useQuery(["Single Product", id], fetchSingleProduct);

  // <==== Add the item to the cart ====>
  const handleProductCart = (product) => {
    console.log(product);
  };

  // <==== Navigate to homepage ====>
  const handlePrevious = () => {
    navigate(`/`);
  };

  // <===== Load the loader component of the data is still fetching ====>
  if (singleProductIsLoading)
    return <AppLoader singleProductStatus={singleProductStatus} />;

  //  <==== load the data when the loader finishes loading  ====>
  return (
    <>
      <AppPreviousBar handlePrevious={handlePrevious} />
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
                handleClick={() => handleProductCart(singleProductData)}
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
