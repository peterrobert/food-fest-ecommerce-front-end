import baseUrl from "./ReusableService.js";

const route = `${baseUrl}/categories`;

const fetchAllCategories = async () => {
  try {
    const response = await fetch(route);
    const results = await response.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllCategories };
