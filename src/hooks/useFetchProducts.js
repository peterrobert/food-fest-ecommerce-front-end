import { useQuery } from "react-query";
import { fetchAllProducts } from "../services/ProductService";
const useFetchProducts = () => {
  const {
    isLoading: productIsLoading,
    status: productStatus,
    data: productData,
  } = useQuery("products", fetchAllProducts);

  return {
    productData,
    productStatus,
    productIsLoading,
  };
};

export default useFetchProducts;
