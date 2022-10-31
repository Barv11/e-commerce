import {
  GET_ALL_PRODUCTS,
  TOGGLE_PRODUCT_TYPE,
  SEARCH_PRODUCT_BY_NAME,
  CLEAR_PRODUCTS,
  POST_PRODUCT
} from "./actionsTypes";
import axios from "axios";
import { USER_LOGIN, USER_LOGOUT, GET_CURRENT_USER } from "./actionsTypes";

// export function getallproductos() {
//   return async function (dispatch) {
//     var json = await axios.get("http://localhost:3001/products");
//     return dispatch({
//       type: "GET_PRODUCTS",
//       payload: json.data,
//     });
//   };
// }

export const toggleProductType = (type) => async (dispatch) => {
  const productos = await axios.get("http://localhost:3001/productos");
  const filterProduct = productos.data.filter((p) => p.type === type);
  dispatch({ type: TOGGLE_PRODUCT_TYPE, payload: filterProduct });
};

export const getAllProductos = () => async (dispatch) => {
  const productos = await axios.get("http://localhost:3001/productos");
  dispatch({ type: GET_ALL_PRODUCTS, payload: productos.data });
};

// export const postProduct = () => async (dispatch) => {
//   const product = await axios.post("http://localhost:3001/productos");
//   dispatch({ type: POST_PRODUCT, payload: product.data })
// }
export function postProduct(payload) {
  return async function (dispatch) {
      const product = await axios.post("http://localhost:3001/productos/create", payload)
      return dispatch({
        type: POST_PRODUCT,
        payload: product
      })
  }
}

export const searchProductByName = (name) => async (dispatch) => {
  const productos = await axios.get("http://localhost:3001/productos");
  const productosbyName = productos.data.filter((p) => p.name.includes(name));
  dispatch({ type: SEARCH_PRODUCT_BY_NAME, payload: productosbyName });
};

export const clearProducts = () => dispatch => {
  dispatch({ type: CLEAR_PRODUCTS })
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
