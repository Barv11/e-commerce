import {
  GET_ALL_PRODUCTS,
  TOGGLE_PRODUCT_TYPE,
  SEARCH_PRODUCT_BY_NAME,
  CLEAR_PRODUCTS,
  ORDER_NAME,
  ORDER_PRECIO,
  SEARCH_PRODUCT_BY_ID,
  POST_IMAGE,
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
  GET_ONE_USER,
  GET_INTEL,
  GET_AMD,
  EDIT_DISCOUNT,
  EDIT_STOCK,
} from "./actionsTypes";
import axios from "axios";
import { USER_LOGIN, USER_LOGOUT, GET_CURRENT_USER } from "./actionsTypes";

// let url = "https://gametech.up.railway.app";
let url = "http://localhost:3001"

let token = null;
export const saveToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const toggleProductType = (type) => async (dispatch) => {
  const productos = await axios.get(`${url}/productos`);
  const filterProduct = productos.data.filter((p) => p.type === type);
  dispatch({ type: TOGGLE_PRODUCT_TYPE, payload: filterProduct });
};

export const getAllProductos = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: token,
    },
  };
  
  const productos = await axios.get(`${url}/productos`, config);
  dispatch({ type: GET_ALL_PRODUCTS, payload: productos.data });
};

export const postImage = (file) => async (dispatch) => {
  const data = new FormData();
  data.append("file", file[0]);
  data.append("upload_preset", "pc-images");
  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dyodnn524/image/upload",
    {
      method: "POST",
      body: data,
    }
  );
  const img = await response.json();
  
  return dispatch({
    type: POST_IMAGE,
    payload: img.url,
  });
};

export function postProduct(payload) {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  
  return async function (dispatch) {
    const product = await axios.post(
      `${url}/productos/create`,
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
  const response = await axios.put(`${url}/productos?id=` + id, {
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
  const response = await axios.put(`${url}/productos/` + id);
  dispatch({ type: DELETE_PRODUCT, payload: response.data });
};

export const searchProductByName = (name) => async (dispatch) => {
  const productos = await axios.get(`${url}/productos`);
  const productosbyName = productos.data.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
  dispatch({ type: SEARCH_PRODUCT_BY_NAME, payload: productosbyName });
};

export const searchProductById = (id) => async (dispatch) => {
  if(id === 'clear') {
    return dispatch({ type: SEARCH_PRODUCT_BY_ID, payload: [] });  
  }
  const producto = await axios.get(`${url}/productos/` + id);
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
    const login = await axios.post(`${url}/user/login`, obj);
    dispatch({ type: USER_LOGIN, payload: login });
  }
};

export const userRegister = (user) => async (dispatch) => {
  const register = await axios.post(`${url}/user/create/signup`, user);
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

export const getAllUsers = () => async (dispatch) => {
  const users = await axios.get(`${url}/user/create`);
  dispatch({ type: GET_ALL_USERS, payload: users.data });
};

export const getCartProduct = (id) => async (dispatch) => {
  const obj = { id: id };
  
  const productos = await axios.post(`${url}/cart/get`, obj);
  dispatch({ type: GET_CART_PRODUCTS, payload: productos });
};

export const clearCartProduct = () => (dispatch) => {
  dispatch({ type: CLEAR_CART_PRODUCTS });
};

export const addCartProduct = (id, array) => async (dispatch) => {
  const obj = { id: id, productosCarrito: array };
  
  const a = await axios.post(`${url}/cart/create`, obj);
  dispatch({ type: ADD_CART_PRODUCTS });
};

export const getUser = (stringToken) => async (dispatch) => {
  const myUser = { token: stringToken.toString() };
  const userFound = await axios.post(`${url}/user/login/find`, myUser);
  dispatch({ type: GET_USER, payload: userFound.data });
};

export const deleteCartProduct = (id) => async (dispatch) => {
  axios.post(`${url}/cart/delete`, { id: id });
  dispatch({ type: DELETE_CART_PRODUCT });
};

export const getOneUser = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  const myUser = await axios.get(`${url}/user/login/name`, config)
  dispatch({type: GET_ONE_USER, payload: myUser})
}

export const editDiscount = (id, descuento) => async (dispatch) => {
  axios.post(`${url}/discount`, {productId:id, discount:descuento});
  console.log(descuento)
  console.log(id)
  dispatch({type: EDIT_DISCOUNT})
}

export const editStock = (id, stockProd) => async (dispatch) => {
  axios.post(`${url}/stock`, {productId:id, stock:stockProd});
  dispatch({type: EDIT_STOCK})
}

export const getIntel = (pcType) => async (dispatch) => {
  console.log(pcType)
  const allIntel = await axios.get(`${url}/productos/intel?pcType=${pcType}`)
  dispatch({type: GET_INTEL, payload: allIntel.data})
}

export const getAmd = (pcType) => async (dispatch) => {
  const allAmd = await axios.get(`${url}/productos/amd?pcType=${pcType}`)
  dispatch({type: GET_AMD, payload: allAmd.data})
  }
