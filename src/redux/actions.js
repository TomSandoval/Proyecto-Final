import { data } from "../data";
import axios from 'axios';

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_NAME='GET_NAME'
export const POST_FORM_REGISTER='POST_FORM_REGISTER'

export const getClothing = () => {
  return { type: GET_PRODUCTS, payload: data };
};


export const postForm = (payload) => {
  return async function(dispatch){
    var json=await axios.post('http://localhost:5173/product',payload);
    return dispatch({
        type:POST_FORM_REGISTER,
        payload:json,
        
    });
}
};

