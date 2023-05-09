import { data } from "../data";

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getClothing = () => {
  return { type: GET_PRODUCTS, payload: data };
};
