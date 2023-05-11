import { GET_CATEGORIES, GET_PRODUCTS } from "./actions";

const initialState = {
  allProducts: [],
  categories: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
      case GET_CATEGORIES : {
        return {
          ...state,
          categories: action.payload
        }
      }

    default:
      return { ...state };
  }
};

export default rootReducer;
