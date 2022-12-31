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

  //  <=== Check loader ===>
  const checkloader = () => {
    return isLoading ? (
      <AppLoader status={status} />
    ) : (
      <>
        <AppNavigation categories={data} />
      </>
    );
  };

  return <div className="product-page-container">{checkloader()}</div>;
}
