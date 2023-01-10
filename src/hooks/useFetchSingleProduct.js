import { useQuery } from "react-query";
import { fetchSingleProduct } from "../services/ProductService";

const useFetchsingleProduct = (id) => {
  const {
    isLoading: singleProductIsLoading,
    status: singleProductStatus,
    data: singleProductData,
  } = useQuery(["Single Product", id], fetchSingleProduct);

  return {
    singleProductData,
    singleProductIsLoading,
    singleProductStatus,
  };
};

export default useFetchsingleProduct;
