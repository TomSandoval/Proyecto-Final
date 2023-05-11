import axios from "axios";
import { data } from "../data";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const getClothing = () => {
  return { type: GET_PRODUCTS, payload: data };
};
export const getDetail = (id) => {
  return async function (dispatch) {
    const data = (await axios.get(`http://localhost:3001/product/${id}`)).data;
    console.log(data);
    return dispatch({ type: PRODUCT_DETAIL, payload: data });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

// const filterProduct = data.filter((product) => product.id == id);
// return { type: PRODUCT_DETAIL, payload: filterProduct[0] };
