import React from "react";
import AppNavigation from "../components/AppNavigation";
import { useQuery } from "react-query";
// <=== IMPORT THE API ===>
import { fetchAllCategories } from "../services/CategoryService";
import AppLoader from "../components/AppLoader";

export default function ProductsPage() {
  // Queries
  const { isLoading, status, data } = useQuery(
    "Categories",
    fetchAllCategories
  );

  console.log(data);

  //  <=== Check loader ===>
  const checkloader = () => {
    isLoading ? (
      <AppLoader status={status} />
    ) : (
      <>
        <AppNavigation categories={data} />
        ProductsPage
      </>
    );
  };

  return <div className="product-page-container">{checkloader()}</div>;
}
