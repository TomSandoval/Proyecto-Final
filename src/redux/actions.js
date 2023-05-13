import axios from 'axios';


export const POST_FORM_LOGIN = 'POST_FORM_LOGIN';
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_NAME='GET_NAME'
export const POST_FORM_REGISTER='POST_FORM_REGISTER'
export const AXIOS_PRODUCTS_BY_CATEGORY_REQUEST = 'AXIOS_PRODUCTS_BY_CATEGORY_REQUEST';
export const AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS = 'AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS';
export const AXIOS_PRODUCTS_BY_CATEGORY_FAILURE = 'AXIOS_PRODUCTS_BY_CATEGORY_FAILURE';
export const GET_PRODUCTS_CATEGORY = "GET_PRODUCTS_CATEGORY";
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME';
export const ERROR_MAIL = 'ERROR_MAIL';



export const postForm = (payload) => {
  return async function(dispatch){
    try {
      var json=await axios.post('http://localhost:3001/create',payload);
      return dispatch({
          type:POST_FORM_REGISTER,
          payload:json,
          
      });
    } catch (error) {
      console.log(error);
      return dispatch({
        type:ERROR_MAIL,
        payload:error.menssege,
      })
    }
  }
};

export const axiosProductsByCategory = (categoryName) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/categories/${categoryName}`);
    const products = response.data;
    dispatch({ type: AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS, payload: {products,categoryName} });
  } catch (error) {
    dispatch({ type: AXIOS_PRODUCTS_BY_CATEGORY_FAILURE, error });
  }
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

export const getDetail = (id) => {
  return async function (dispatch) {
    const data = (await axios.get(`http://localhost:3001/product/${id}`)).data;
    return dispatch({ type: PRODUCT_DETAIL, payload: data });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getProductByName = (name) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/product?name=${name}`)
    console.log(response.data)

    dispatch ({
      type: GET_PRODUCT_BY_NAME,
      payload: response.data 
    })
  } catch (error) {
    
  }
}

export const postLogin = (payload) => {
  return async function(dispatch){
    try {
      var json=await axios.post('http://localhost:3001/login',payload);
      return dispatch({
          type:POST_FORM_LOGIN,
          payload:json,
          
      });
    } catch (error) {
      console.log(error);
    }
}
};



// const filterProduct = data.filter((product) => product.id == id);
// return { type: PRODUCT_DETAIL, payload: filterProduct[0] };

