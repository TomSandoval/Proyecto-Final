import axios from "axios";

export const POST_FORM_LOGIN = "POST_FORM_LOGIN";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_NAME = "GET_NAME";
export const DARK_MODE = "DARK_MODE";
export const POST_FORM_REGISTER = "POST_FORM_REGISTER";
export const AXIOS_PRODUCTS_BY_CATEGORY_REQUEST =
  "AXIOS_PRODUCTS_BY_CATEGORY_REQUEST";
export const AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS =
  "AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS";
export const AXIOS_PRODUCTS_BY_CATEGORY_FAILURE =
  "AXIOS_PRODUCTS_BY_CATEGORY_FAILURE";
export const GET_PRODUCTS_CATEGORY = "GET_PRODUCTS_CATEGORY";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const PRODUCT_DETAIL = "PRODUCT_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME";
export const SET_PRODUCTS_HOME = "SET_PRODUCTS_HOME";
export const ERROR_MAIL = "ERROR_MAIL";
export const CLEAN_PRODUCTS = "CLEAN_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const POST_CREATE = "POST_CREATE";
export const SET_CARRITO = "SET_CARRITO";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const AUMENTAR_CANTIDAD = "AUMENTAR_CANTIDAD";
export const DISMINUIR_CANTIDAD = "DISMINUIR_CANTIDAD";
export const TOTAL_DE_COMPRA = "TOTAL_DE_COMPRA";
export const CHANGE_PAGES_PRODUCTS = "CHANGE_PAGES_PRODUCTS";
export const USER_CREATE = "USER_CREATE";
export const ENVIO_DETALLES = "ENVIO_DETALLES";
export const USER_LOGIN = "USER_LOGIN";
export const CLOSE_SESION = "CLOSE_SESION";
export const CHECK_SESION = "CHECK_SESION";
export const DELETE_ALL_CART = "DELETE_ALL_CART";
export const GET_PRODUC_BY_USER = "GET_PRODUC_BY_USER";
export const GET_PRODUCT_ACTIVE = "GET_PRODUCT_ACTIVE";
export const CREATE_ADMIN = "CREATE_ADMIN";
export const LIST_USERS = "LIST_USERS";

export const postForm = (form) => {
  return async function (dispatch) {
    try {
      var json = await axios.post("http://localhost:3001/user/create", form);
      console.log(json);
      dispatch({
        type: USER_CREATE,
        payload: json.data.message,
      });
    } catch (error) {
      console.log(error);
      const errors = {
        nicknameError: "Este nickname ya está en uso. Por favor, elija otro.",
        emailError: "El correo electrónico ya tiene una cuenta.",
        errorDefault: "Ocurrio un error al crear el usuario, intente de nuevo.",
      };
      if (error?.response?.data?.message == errors.nicknameError) {
        dispatch({
          type: "NICKNAME_ERROR",
          payload: errors.nicknameError,
        });
      } else if (error?.response?.data?.message == errors.emailError) {
        dispatch({
          type: "EMAIL_ERROR",
          payload: errors.emailError,
        });
      } else {
        dispatch({
          type: "CREATE_USER_ERROR",
          payload: errors.errorDefault,
        });
      }
    }
  };
};

export const googleLogin = () => async (dispatch) => {
  try {
    const response = axios.get("http://localhost:3001/auth/google");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const cleanUserError = () => {
  return {
    type: "CLEAN_USER_ERROR",
  };
};

export const axiosProductsByCategory = (categoryName) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/categories/${categoryName}`
    );
    const products = response.data;
    dispatch({
      type: AXIOS_PRODUCTS_BY_CATEGORY_SUCCESS,
      payload: { products, categoryName },
    });
  } catch (error) {
    dispatch({ type: AXIOS_PRODUCTS_BY_CATEGORY_FAILURE, error });
  }
};

export const getCategories = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/categories");
      return dispatch({
        type: GET_CATEGORIES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }

    return { type: GET_CATEGORIES, payload: response.data };
  };
};

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
    const response = await axios.get(
      `http://localhost:3001/product?name=${name}&size=6`
    );
    dispatch({
      type: GET_PRODUCT_BY_NAME,
      payload: response.data,
    });
  } catch (error) { }
};

export const prevPageHome = (value, page) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/categories/${value}?page=${page}`
    );
    const products = response.data;
    dispatch({
      type: SET_PRODUCTS_HOME,
      payload: { products, value },
    });
  } catch (error) {
    console.log(error);
  }
};

export const nextPageHome = (value, page) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/categories/${value}?page=${page}`
    );
    const products = response.data;
    dispatch({
      type: SET_PRODUCTS_HOME,
      payload: { products, value },
    });
  } catch (error) {
    console.log(error);
  }
};

export const postLogin = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/login",
        payload
      );
      window.localStorage.setItem("token", JSON.stringify(response.data.token));
      window.localStorage.setItem(
        "tokenExpiration",
        JSON.stringify(response.data.exp)
      );
      window.localStorage.setItem("username", response.data.nickname);
      window.localStorage.setItem("email", response.data.email);
      const user = {
        username: response.data?.nickname,
        email: response.data.email,
      };
      dispatch({
        type: USER_LOGIN,
        payload: user,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const closeSesion = () => {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("tokenExpiration");
  window.localStorage.removeItem("username");
  window.localStorage.removeItem("email");
  return {
    type: CLOSE_SESION,
  };
};
export const checkSesion = () => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const user = {
    username: username,
    email: email,
  }
  return {
    type: CHECK_SESION,
    payload: user,
  };
};

export const checkExpiration = () => {
  const tokenExpiration = window.localStorage.getItem('tokenExpiration');

  if (Date.now() >= tokenExpiration) {
    return closeSesion();
  }
  return checkSesion();
};

export const postCreate = (payload) => {
  return async function (dispatch) {
    try {
      var json = await axios.post("http://localhost:3001/product", payload);
      dispatch({
        type: POST_CREATE,
        payload: json,
      });
      window.localStorage.setItem('roll', 'SELLER')
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductByCategory = (name) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/categories/${name}?page=0&size=6`
    );
    const products = response.data;
    dispatch({
      type: GET_PRODUCTS_CATEGORY,
      payload: products,
    });
  } catch (error) {
    console.log(error);
  }
};

export const cleanProducts = () => {
  return {
    type: CLEAN_PRODUCTS,
  };
};

export const filterByCategory = (name, min, max) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/product/pricerange/category/${name}?max=${max}&min=${min}`
    );
    dispatch({
      type: FILTER_PRODUCTS,
      payload: response.data,
    });
  } catch (error) { }
};

export const changePagesCategory = (name, value) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/categories/${name}?page=${value - 1}&size=6`
    );
    dispatch({
      type: CHANGE_PAGES_PRODUCTS,
      payload: response.data,
    });
  } catch (error) { }
};

export const changePagesName = (name, value) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/product/?name=${name}&page=${value - 1}`
    );
    dispatch({
      type: CHANGE_PAGES_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const filterByName = (name, min, max) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/product/pricerange/name/${name}?max=${max}&min=${min}`
    );
    dispatch({
      type: FILTER_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const changePageFilterNames =
  (name, min, max, value) => async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/product/pricerange/name/${name}?max=${max}&min=${min}&page=${
          value - 1
        }`
      );
      dispatch({
        type: CHANGE_PAGES_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const changePageFilterCategory =
  (name, min, max, value) => async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/product/pricerange/category/${name}?max=${max}&min=${min}&page=${
          value - 1
        }`
      );
      dispatch({
        type: CHANGE_PAGES_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const sortAlphabeticProducts = (name, value) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/product/order/name/${name}?orders=${value}`
    );

    dispatch({
      type: FILTER_PRODUCTS,
      payload: response.data,
    });
  } catch (error) { }
};

export const changePageOrderName =
  (name, filter, value) => async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/product/order/name/${name}?orders=${filter}&page=${
          value - 1
        }`
      );
      dispatch({
        type: CHANGE_PAGES_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const sortPriceProducts = (name, value) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/product/order/name/${name}?orders=${value}`
    );

    dispatch({
      type: FILTER_PRODUCTS,
      payload: response.data,
    });
  } catch (error) { }

}

export const changePageSortPriceName =
  (name, filter, value) => async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/product/order/name/${name}?orders=${filter}&page=${
          value - 1
        }`
      );
      dispatch({
        type: CHANGE_PAGES_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const sortPriceCategory = (name, value) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/categories/order/category/${name}?orders=${value}`
    );
    dispatch({
      type: FILTER_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const changePageSortPriceCategory =
  (name, filter, value) => async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/categories/order/category/${name}?orders=${filter}&page=${
          value - 1
        }`
      );
      dispatch({
        type: CHANGE_PAGES_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const orderByCategory = (name, value) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/categories/order/category/${name}?orders=${value}`
    );

    dispatch({
      type: FILTER_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const changePageOrderCategory =
  (name, filter, value) => async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/categories/order/category/${name}?orders=${filter}&page=${
          value - 1
        }`
      );
      dispatch({
        type: CHANGE_PAGES_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const darkMode = (payload) => {
  return {
    type: "DARK_MODE",
    payload: payload,
  };
};

export const setCarrito = (payload) => {
  return {
    type: SET_CARRITO,
    payload: payload,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};
export const aumentarCantidad = (id) => {
  return {
    type: AUMENTAR_CANTIDAD,
    payload: id,
  };
};
export const disminuirCantidad = (id) => {
  return {
    type: DISMINUIR_CANTIDAD,
    payload: id,
  };
};
export const total = (total) => {
  return {
    type: TOTAL_DE_COMPRA,
    payload: total,
  };
};

export const envioDetalle = (detalles) => {
  console.log(detalles);
  return async function (dispatch) {
    try {
      var json = await axios.post("http://localhost:3001/order", detalles);
      return {
        type: ENVIO_DETALLES,
        payload: detalles,
      };
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAllCart = () => {
  return {
    type: DELETE_ALL_CART,
  };
};

export const shoppinghistory = (payload) => {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/users/shoppinghistory", {
        params: {
          email: payload,
        }
      });
      dispatch({
        type: GET_PRODUC_BY_USER,
        payload: json.data,
      })
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductActive = (email) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/product/active/${email}`
      );
      dispatch({ type: GET_PRODUCT_ACTIVE, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createAdmin = (form) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/admin/createadmin/",
        form
      );
      dispatch({ type: CREATE_ADMIN, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const listUsers = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/admin/listusers");
      const data = response.data;

      dispatch({ type: LIST_USERS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

// const filterProduct = data.filter((product) => product.id == id);
// return { type: PRODUCT_DETAIL, payload: filterProduct[0] };
