import { GET_PRODUCTS } from "./actions";
import { PRODUCT_DETAIL } from "./actions";
import { CLEAN_DETAIL } from "./actions";

const initialState = {
  allProducts: [],
  productDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

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

    default:
      return { ...state };
  }
};

export default rootReducer;
