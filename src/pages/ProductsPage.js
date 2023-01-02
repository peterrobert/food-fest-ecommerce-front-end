import React from "react";
import AppNavigation from "../components/AppNavigation";
import { useQuery } from "react-query";
// <=== REACT NOTIFICATION ===>
import { NotificationContainer } from "react-notifications";

// <=== IMPORT THE API ===>
import { fetchAllCategories } from "../services/CategoryService";
import AppLoader from "../components/AppLoader";
import { fetchAllProducts } from "../services/ProductService";
import ProductDisplay from "../components/ProductDisplay";

export default function ProductsPage() {
  // ==== QUERIES ====
  // fetch categories
  const {
    isLoading: categoryIsLoading,
    status: categoryStatus,
    data: categoryData,
  } = useQuery("Categories", fetchAllCategories);

  // fetch products
  const {
    isLoading: productIsLoading,
    status: productStatus,
    data: productData,
  } = useQuery("products", fetchAllProducts);

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
