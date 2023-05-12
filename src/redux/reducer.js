import {
  POST_FORM_REGISTER,
  AXIOS_PRODUCTS_BY_CATEGORY_REQUEST,
  AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS,
  AXIOS_PRODUCTS_BY_CATEGORY_FAILURE,
  GET_CATEGORIES,
  GET_PRODUCTS,
  PRODUCT_DETAIL,
  CLEAN_DETAIL,
} from "./actions";

const initialState = {
  allProducts: [],
  isLoading: false,
  products: [],
  categories: [],
  productDetail: {},
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case AXIOS_PRODUCTS_BY_CATEGORY_REQUEST:
      return { ...state, isLoading: true };
    case AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: {
          ...state.products,
          [action.payload.categoryName]: action.payload.products,
        },
      };
    case AXIOS_PRODUCTS_BY_CATEGORY_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case GET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        productDetail: {},
      };

    case POST_FORM_REGISTER:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default rootReducer;
