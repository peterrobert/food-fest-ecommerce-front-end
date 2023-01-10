import React from "react";
import AppNavigation from "../components/AppNavigation";
// <=== REACT NOTIFICATION ===>
import { NotificationContainer } from "react-notifications";

// <=== IMPORT THE API ===>
import AppLoader from "../components/AppLoader";
import ProductDisplay from "../components/ProductDisplay";
// ==== Reusable hooks ====
import useFetchCategories from "../hooks/useFetchCategories";
import useFetchProducts from "../hooks/useFetchProducts";

export default function ProductsPage() {
  // ==== QUERIES ====
  // fetch categories
  const { categoryIsLoading, categoryStatus, categoryData } =
    useFetchCategories();
  // fetch products
  const { productIsLoading, productData, productStatus } = useFetchProducts();

  //  <=== Check loader ===>
  const checkloader = () => {
    return categoryIsLoading || productIsLoading ? (
      <AppLoader
        categoryStatus={categoryStatus}
        productStatus={productStatus}
      />
    ) : (
      <>
        <AppNavigation categories={categoryData} />
        <ProductDisplay products={productData} />
      </>
    );
  };

  return (
    <>
      <NotificationContainer />
      <div className="product-page-container">{checkloader()}</div>
    </>
  );
}
