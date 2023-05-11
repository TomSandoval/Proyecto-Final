import { GET_PRODUCTS , GET_NAME , POST_FORM_REGISTER } from "./actions";

const initialState = {
  allProducts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    

      case POST_FORM_REGISTER:
        return {
          ...state,
          
        };
    default:
      return { ...state };
  }
};

export default rootReducer;
