import { data } from "../data";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const AXIOS_PRODUCTS_BY_CATEGORY_REQUEST = 'AXIOS_PRODUCTS_BY_CATEGORY_REQUEST';
export const AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS = 'AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS';
export const AXIOS_PRODUCTS_BY_CATEGORY_FAILURE = 'AXIOS_PRODUCTS_BY_CATEGORY_FAILURE';


export const getClothing = () => {
  return { type: GET_PRODUCTS, payload: data };
};


export const axiosProductsByCategory = (categoryName) => async (dispatch) => {
  dispatch({ type: AXIOS_PRODUCTS_BY_CATEGORY_REQUEST });
  try {
    const response = await axios.get(`http://localhost:3001/categories/${categoryName}`);
    const products = response.data;
    dispatch({ type: AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS, payload: products });
  } catch (error) {
    dispatch({ type: AXIOS_PRODUCTS_BY_CATEGORY_FAILURE, error });
  }
};