import {
  GET_ALL_PRODUCTS,
  TOGGLE_PRODUCT_TYPE,
  SEARCH_PRODUCT_BY_NAME,
  CLEAR_PRODUCTS,
  ORDER_NAME,
  ORDER_PRECIO,
  SEARCH_PRODUCT_BY_ID,
  POST_PRODUCT,
  ADD_PRODUCT
  
} from "./actionsTypes";
import axios from "axios";
import { USER_LOGIN, USER_LOGOUT, GET_CURRENT_USER } from "./actionsTypes";

export const toggleProductType = (type) => async (dispatch) => {
  const productos = await axios.get("http://localhost:3001/productos");
  const filterProduct = productos.data.filter((p) => p.type === type);
  dispatch({ type: TOGGLE_PRODUCT_TYPE, payload: filterProduct });
};

export const getAllProductos = () => async (dispatch) => {
  const productos = await axios.get("http://localhost:3001/productos");
  dispatch({ type: GET_ALL_PRODUCTS, payload: productos.data });
};
export function postProduct(payload) {
  return async function (dispatch) {
      const product = await axios.post("http://localhost:3001/productos/create", payload)
      return dispatch({
        type: POST_PRODUCT,
        payload: product
      })
  }
};

export const searchProductByName = (name) => async (dispatch) => {
  const productos = await axios.get("http://localhost:3001/productos");
  const productosbyName = productos.data.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
  dispatch({ type: SEARCH_PRODUCT_BY_NAME, payload: productosbyName });
};

export const searchProductById = (id) => async (dispatch) => {
  const producto = await axios.get("http://localhost:3001/productos/"+id);
  const productosbyId = producto.data
  dispatch({ type: SEARCH_PRODUCT_BY_ID, payload: productosbyId });
};

export const clearProducts = () => dispatch => {
  dispatch({ type: CLEAR_PRODUCTS })
}

export const addProduct = (payload) => {
  return {type: ADD_PRODUCT, payload}
}

export const getCurrentUser = (obj) => (dispatch) => {
  return dispatch({ type: GET_CURRENT_USER, payload: obj });
};
export const userLogin = (obj) => async (dispatch) => {
  const login = await axios.post("http://localhost:5001/create/signup", obj);
  dispatch({ type: USER_LOGIN, payload: login });
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

export function orderprecio(payload){
  return function (dispatch) {
    return dispatch({
      type: ORDER_PRECIO,
      payload,
    });
  };
}
