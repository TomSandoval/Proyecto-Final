import {
  SET_CARRITO,
  POST_FORM_REGISTER,
  AXIOS_PRODUCTS_BY_CATEGORY_REQUEST,
  AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS,
  AXIOS_PRODUCTS_BY_CATEGORY_FAILURE,
  GET_CATEGORIES,
  PRODUCT_DETAIL,
  CLEAN_DETAIL,
  SET_PRODUCTS_HOME,
  POST_FORM_LOGIN,
  ERROR_MAIL,
  GET_PRODUCTS_CATEGORY,
  CLEAN_PRODUCTS,
  FILTER_PRODUCTS,
  POST_CREATE,
  GET_PRODUCT_BY_NAME,
  DARK_MODE,
  DELETE_PRODUCT,
  AUMENTAR_CANTIDAD,
  TOTAL_DE_COMPRA,
  DISMINUIR_CANTIDAD,
  CHANGE_PAGES_PRODUCTS,
  USER_CREATE,
  DELETE_ALL_CART
} from "./actions";

const initialState = {
  allProducts: [],
  isLoading: false,
  products: [],
  categories: [],
  productDetail: {},
  error: null,
  userCreateError:null,
  userCreateSuccesfull: null,
  errorMail: null,
  darkModes: false,
  errorMail:null,
  carrito:JSON.parse(localStorage.getItem('carrito')) ||[],
  totalDeCompra:'',
  carritoTotal:[],
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

    case SET_PRODUCTS_HOME: {
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload.value]: action.payload.products,
        },
      };
    }
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
    case GET_PRODUCTS_CATEGORY: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case GET_PRODUCT_BY_NAME: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case POST_FORM_REGISTER:
      return {
        ...state,
      };
    case POST_FORM_LOGIN:
      return {
        ...state,
      };
    case POST_CREATE:
      return{
        ...state
      }
    case "EMAIL_ERROR": {
      return {
        ...state,
        userCreateError: action.payload
      }
    }
    case "NICKNAME_ERROR": {
      return {
        ...state,
        userCreateError: action.payload
      }
    }
    case "CREATE_USER_ERROR": {
      return {
        ...state,
        userCreateError: action.payload
      }
    }
    case "CLEAN_USER_ERROR": {
      return {
        ...state,
        userCreateError: action.payload
      }
    }
    case USER_CREATE : {
      return {
        ...state,
        userCreateSuccesfull: "Usuario Creado con exito"
      }
    }
    case CLEAN_PRODUCTS: {
      return {
        ...state,
        products: [],
      };
    }
    case FILTER_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case TOTAL_DE_COMPRA: {
      return {
        ...state,
        totalDeCompra: action.payload
      }
    }
    case SET_CARRITO: {
      localStorage.setItem('carrito', JSON.stringify([...state.carrito , action.payload]))
      return {
        ...state,
        carrito: JSON.parse(localStorage.getItem('carrito'))
      }
    }
    case DELETE_PRODUCT: {
      localStorage.setItem('carrito', JSON.stringify(state.carrito.filter((carritoId) => {
        return carritoId.id !== action.payload
      })))
      return {
        ...state,
        carrito:state.carrito.filter((carritoId) => {
          return carritoId.id !== action.payload
        })
      }
    }
    case AUMENTAR_CANTIDAD: {
      localStorage.setItem('carrito', JSON.stringify(state.carrito.map((producto) => {
        if (producto.id === action.payload) {
          return {
            ...producto,
            cantidad: producto.cantidad + 1
          };
        }
        return producto;
      })))
      return {
        ...state,
        carrito:state.carrito.map((producto) => {
          if (producto.id === action.payload) {
            return {
              ...producto,
              cantidad: producto.cantidad + 1
            };
          }
          return producto;
        })
      }
    }
    case DISMINUIR_CANTIDAD: {
      localStorage.setItem('carrito', JSON.stringify(state.carrito.map((producto) => {
        if (producto.id === action.payload) {
          return {
            ...producto,
            cantidad: producto.cantidad - 1
          };
        }
        return producto;
      })))
      return {
        ...state,
        carrito:state.carrito.map((producto) => {
          if (producto.id === action.payload) {
            return {
              ...producto,
              cantidad: producto.cantidad - 1
            };
          }
          return producto;
        })
      }
    }
    
    case CHANGE_PAGES_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case DARK_MODE: {
      return {
        ...state,
        darkModes: action.payload,
      };
    }
  case 'DELETE_ALL_CART':
    return {
      ...state,
      carritoTotal: [],
      totalDeCompra: 0,
    };

    default:
      return state;
  }
};

export default rootReducer;
