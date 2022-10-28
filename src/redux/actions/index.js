import {
  GET_ALL_PRODUCTS,
  TOGGLE_PRODUCT_TYPE,
  SEARCH_PRODUCT_BY_NAME,
  CLEAR_PRODUCTS
} from "./actionsTypes";
import axios from "axios";

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

export const searchProductByName = (name) => async (dispatch) => {
  const productos = await axios.get("http://localhost:3001/productos");
  const productosbyName = productos.data.filter((p) => p.name.includes(name));
  dispatch({ type: SEARCH_PRODUCT_BY_NAME, payload: productosbyName });
};

export const clearProducts = () => dispatch => {
  dispatch({ type: CLEAR_PRODUCTS })
}