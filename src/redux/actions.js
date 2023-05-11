import { data } from "../data";
import axios from 'axios'

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_CATEGORY = "GET_PRODUCTS_CATEGORY";
export const GET_CATEGORIES = 'GET_CATEGORIES';

export const getClothing = () => {
  return { type: GET_PRODUCTS, payload: data };
};


export const getCategories = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/categories")
     return dispatch({
        type: GET_CATEGORIES,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }

    return {type: GET_CATEGORIES, payload: response.data}
  }
}



