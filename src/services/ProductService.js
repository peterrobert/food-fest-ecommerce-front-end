import baseUrl from "./ReusableService.js";

const route = `${baseUrl}/products`;

const fetchAllProducts = async () => {
  try {
    const response = await fetch(route);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

const fetchSingleProduct = async ({ queryKey }) => {
  try {
    const [_, id] = queryKey
    const response = await fetch(`${route}/${id}`);
    const results = await response.json();
    return results
  } catch (error) {
    console.log(error)
  }
}

export { fetchAllProducts, fetchSingleProduct };
