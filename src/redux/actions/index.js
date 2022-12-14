import {
  GET_ALL_PRODUCTS,
  TOGGLE_PRODUCT_TYPE,
  SEARCH_PRODUCT_BY_NAME,
  CLEAR_PRODUCTS,
  ORDER_NAME,
  ORDER_PRECIO,
  SEARCH_PRODUCT_BY_ID,
  POST_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ALL_USERS,
  POST_ADMIN,
  ADD_PRODUCT,
  ADD_CART_PRODUCTS,
  REGISTER_USER,
  GET_USER,
  GET_CART_PRODUCTS,
  CLEAR_CART_PRODUCTS,
  DELETE_CART_PRODUCT,
} from "./actionsTypes";
import axios from "axios";
import { USER_LOGIN, USER_LOGOUT, GET_CURRENT_USER } from "./actionsTypes";

let token = null;
export const saveToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const toggleProductType = (type) => async (dispatch) => {
  const productos = await axios.get("https://gametech.up.railway.app/productos");
  const filterProduct = productos.data.filter((p) => p.type === type);
  dispatch({ type: TOGGLE_PRODUCT_TYPE, payload: filterProduct });
};

export const getAllProductos = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: token,
    },
  };
  console.log(token);
  const productos = await axios.get("https://gametech.up.railway.app/productos", config);
  dispatch({ type: GET_ALL_PRODUCTS, payload: productos.data });
};

export function postProduct(payload) {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  console.log(config);
  return async function (dispatch) {
    const product = await axios.post(
      "https://gametech.up.railway.app/productos/create",
      payload,
      config
    );
    return dispatch({
      type: POST_PRODUCT,
      payload: product,
    });
  };
}

export const updateProduct = (product) => async (dispatch) => {
  const { id, name, brand, img, details, cost, type } = product;

  const response = await axios.put("https://gametech.up.railway.app/productos?id=" + id, {
    name,
    brand,
    img,
    details,
    cost,
    type,
  });

  dispatch({ type: UPDATE_PRODUCT, payload: response.data });
};

export const deleteProduct = (id) => async (dispatch) => {
  const response = await axios.put("https://gametech.up.railway.app/productos/"+id);

  dispatch({ type: DELETE_PRODUCT, payload: response.data })
}

export const searchProductByName = (name) => async (dispatch) => {
  const productos = await axios.get("https://gametech.up.railway.app/productos");
  const productosbyName = productos.data.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
  dispatch({ type: SEARCH_PRODUCT_BY_NAME, payload: productosbyName });
};

export const searchProductById = (id) => async (dispatch) => {
  const producto = await axios.get("https://gametech.up.railway.app/productos/" + id);
  const productosbyId = producto.data;
  dispatch({ type: SEARCH_PRODUCT_BY_ID, payload: productosbyId });
};

export const clearProducts = () => (dispatch) => {
  dispatch({ type: CLEAR_PRODUCTS });
};

export const getCurrentUser = (obj) => (dispatch) => {
  return dispatch({ type: GET_CURRENT_USER, payload: obj });
};
export const userLogin = (obj) => async (dispatch) => {
  if (obj === "clear") {
    dispatch({ type: USER_LOGIN, payload: {} });
  } else {
    const login = await axios.post("https://gametech.up.railway.app/user/login", obj);
    dispatch({ type: USER_LOGIN, payload: login });
  }
};

export const userRegister = (user) => async (dispatch) => {
  const register = await axios.post(
    "https://gametech.up.railway.app/user/create/signup",
    user
  );
  dispatch({ type: REGISTER_USER, payload: register });
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

export function ordennames(payload) {
  return function (dispatch) {
    return dispatch({
      type: ORDER_NAME,
      payload,
    });
  };
}

export function orderprecio(payload) {
  return function (dispatch) {
    return dispatch({
      type: ORDER_PRECIO,
      payload,
    });
  };
}

export const getAllUsers = () => async (dispatch) =>{
    const users = await axios.get("https://gametech.up.railway.app/user/create");
    dispatch({ type: GET_ALL_USERS, payload: users.data });
}


export const getCartProduct = (id) => async (dispatch) => {
  const obj = { id: id };
  console.log(obj);
  const productos = await axios.post("https://gametech.up.railway.app/cart/get", obj);
  dispatch({ type: GET_CART_PRODUCTS, payload: productos });
};

export const clearCartProduct = () => (dispatch) => {
  dispatch({ type: CLEAR_CART_PRODUCTS });
};

export const addCartProduct = (id, array) => async (dispatch) => {
  const obj = { id: id, productosCarrito: array };
  console.log(obj);
  const a = await axios.post("https://gametech.up.railway.app/cart/create", obj);
  dispatch({ type: ADD_CART_PRODUCTS });
};

export const getUser = (stringToken) => async (dispatch) => {
  const myUser = { token: stringToken.toString() };
  const userFound = await axios.post(
    "https://gametech.up.railway.app/user/login/find",
    myUser
  );
  dispatch({ type: GET_USER, payload: userFound.data });
};

export const deleteCartProduct = (id) => async (dispatch) => {
  axios.post("https://gametech.up.railway.app/cart/delete", { id: id });
  dispatch({ type: DELETE_CART_PRODUCT });
};
