import { useQuery } from "react-query";
import { fetchAllCategories } from "../services/CategoryService";

const useFetchCategories = () => {
  const {
    isLoading: categoryIsLoading,
    status: categoryStatus,
    data: categoryData,
  } = useQuery("Categories", fetchAllCategories);

  return {
    categoryIsLoading,
    categoryStatus,
    categoryData,
  };
};

export default useFetchCategories;
