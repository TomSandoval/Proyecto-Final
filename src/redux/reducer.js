import {
  GET_PRODUCTS,
  AXIOS_PRODUCTS_BY_CATEGORY_REQUEST,
  AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS,
  AXIOS_PRODUCTS_BY_CATEGORY_FAILURE,
} from "./actions";

const initialState = {
  allProducts: [],
  isLoading: false,
  products: [],
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      }
    case AXIOS_PRODUCTS_BY_CATEGORY_REQUEST:
      return { ...state, isLoading: true };
    case AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS:
      return { ...state, isLoading: false, products: action.payload };
    case AXIOS_PRODUCTS_BY_CATEGORY_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};

export default rootReducer;
