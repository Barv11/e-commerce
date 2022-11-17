import {
  GET_ALL_PRODUCTS,
  GET_DELETED_PRODUCTS,
  TOGGLE_PRODUCT_TYPE,
  TOGGLE_DELETED_PRODUCT_TYPE,
  RESTORE_PRODUCT,
  SEARCH_PRODUCT_BY_NAME,
  CLEAR_PRODUCTS,
  ORDER_NAME,
  ORDER_PRECIO,
  SEARCH_PRODUCT_BY_ID,
  POST_IMAGE,
  CLEAR_MESSAGE,
  POST_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ALL_USERS,
  POST_ADMIN,
  ADD_PRODUCT,
  ADD_CART_PRODUCTS,
  REGISTER_USER,
  GET_USER,
  CLEAR_USER,
  GET_CART_PRODUCTS,
  CLEAR_CART_PRODUCTS,
  DELETE_CART_PRODUCT,
  CLEAR_REVIEWS,
  CLEAR_SEARCH_REVIEW,
  SEARCH_REVIEW,
  CREATE_REVIEWS,
  PRODUCT_REVIEWS,
  REVIEWS_BY_USER,
  DELETE_REVIEW,
  UPDATE_REVIEW,
  GET_ONE_USER,
  GET_INTEL,
  GET_AMD,
  EDIT_DISCOUNT,
  EDIT_STOCK,
  GET_ALL_FAVORITOS,
  ADD_FAVORITO_PRODUCT,
  DELETE_FAVORITO,
  DELETE_ALL_FAVORITO,
  UPDATE_USER,
  WELCOME,
} from "./actionsTypes";
import axios from "axios";
import { USER_LOGIN, USER_LOGOUT, GET_CURRENT_USER } from "./actionsTypes";

let url = "https://gametech.up.railway.app";
// let url = "http://localhost:3001";

let token = null;
export const saveToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

export const toggleProductType = (type) => async (dispatch) => {
  try {
    const productos = await axios.get(`${url}/productos`);
    const filterProduct = productos.data.filter((p) => p.type === type);
    dispatch({ type: TOGGLE_PRODUCT_TYPE, payload: filterProduct });
  } catch (error) {
    console.error(error);
  }
};

export const getAllProductos = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: token,
      },
    };

    const productos = await axios.get(`${url}/productos`, config);
    dispatch({ type: GET_ALL_PRODUCTS, payload: productos.data });
  } catch (error) {
    console.error(error);
  }
};

export const getDeleteProducts = () => async (dispatch) => {
  try {
    const deleteds = (await axios.get(`${url}/productos/enabled`)).data;
    dispatch({ type: GET_DELETED_PRODUCTS, payload: deleteds });
  } catch (error) {
    console.error(error);
  }
};

export const toggleDeletedProductType = (type) => async (dispatch) => {
  try {
    const productos = await axios.get(`${url}/productos/enabled`);
    const filterProduct = productos.data.filter((p) => p.type === type);
    dispatch({ type: TOGGLE_DELETED_PRODUCT_TYPE, payload: filterProduct });
  } catch (error) {
    console.error(error);
  }
};

export const restoreProduct = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: token,
      },
    };

    await axios.put(`${url}/productos/restore/${id}`, {}, config);
    dispatch({ type: RESTORE_PRODUCT });
  } catch (error) {
    console.error(error);
  }
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

  dispatch({
    type: POST_IMAGE,
    payload: img.url,
  });
};

export const clearMessage = () => (dispatch) => {
  dispatch({ type: CLEAR_MESSAGE });
};

export const postProduct = (payload) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: token,
      },
    };

    const response = await axios.post(
      `${url}/productos/create`,
      payload,
      config
    );
    dispatch({
      type: POST_PRODUCT,
      payload: response.data.message,
    });
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = (product) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const { id, name, brand, img, details, cost, type } = product;
    const response = await axios.put(
      `${url}/productos/update/${id}`,
      {
        name,
        brand,
        img,
        details,
        cost,
        type,
      },
      config
    );
    dispatch({ type: UPDATE_PRODUCT, payload: response.data.message });
  } catch (error) {
    console.error(error);
  }
};

// export const updateProduct = (product) => async (dispatch) => {
//   const config = {
//     headers: {
//       Authorization: token,
//     },
//   };
//   const { id, name, brand, img, details, cost, type } = product;
//   try {
//     const response = await axios.put(
//       `${url}/productos/update/${id}`,
//       {
//         name,
//         brand,
//         img,
//         details,
//         cost,
//         type,
//       },
//       config
//     );
//     dispatch({ type: UPDATE_PRODUCT, payload: response.data.message });
//   } catch (error) {
//     console.error(error)
//   }
// };

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: token,
      },
    };

    const response = await axios.put(
      `${url}/productos/delete/${id}`,
      {},
      config
    );
    dispatch({ type: DELETE_PRODUCT, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const searchProductByName = (name) => async (dispatch) => {
  try {
    const productos = await axios.get(`${url}/productos`);
    const productosbyName = productos.data.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    dispatch({ type: SEARCH_PRODUCT_BY_NAME, payload: productosbyName });
  } catch (error) {
    console.error(error);
  }
};

export const searchProductById = (id) => async (dispatch) => {
  try {
    if (id === "clear") {
      return dispatch({ type: SEARCH_PRODUCT_BY_ID, payload: [] });
    }
    const producto = await axios.get(`${url}/productos/` + id);
    const productosbyId = producto.data;
    dispatch({ type: SEARCH_PRODUCT_BY_ID, payload: productosbyId });
  } catch (error) {
    console.error(error);
  }
};

export const clearProducts = () => (dispatch) => {
  dispatch({ type: CLEAR_PRODUCTS });
};

export const getCurrentUser = (obj) => (dispatch) => {
  return dispatch({ type: GET_CURRENT_USER, payload: obj });
};
export const userLogin = (obj) => async (dispatch) => {
  try {
    if (obj === "clear") {
      dispatch({ type: USER_LOGIN, payload: {} });
    } else {
      const login = await axios.post(`${url}/user/login`, obj);
      dispatch({ type: USER_LOGIN, payload: login });
    }
  } catch (error) {
    console.error(error);
  }
};

export const userRegister = (user) => async (dispatch) => {
  try {
    const register = await axios.post(`${url}/user/create/signup`, user);
    dispatch({ type: REGISTER_USER, payload: register });
  } catch (error) {
    console.error(error);
  }
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

export const ordennames = (payload) => (dispatch) => {
  dispatch({ type: ORDER_NAME, payload });
};

export const orderprecio = (payload) => (dispatch) => {
  dispatch({ type: ORDER_PRECIO, payload });
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const users = await axios.get(`${url}/user/create`);
    dispatch({ type: GET_ALL_USERS, payload: users.data });
  } catch (error) {
    console.error(error);
  }
};

export const getCartProduct = (id) => async (dispatch) => {
  try {
    const obj = { id: id };

    const productos = await axios.post(`${url}/cart/get`, obj);
    dispatch({ type: GET_CART_PRODUCTS, payload: productos });
  } catch (error) {
    console.error(error);
  }
};

export const clearCartProduct = () => (dispatch) => {
  dispatch({ type: CLEAR_CART_PRODUCTS });
};

export const addCartProduct = (id, array) => async (dispatch) => {
  try {
    const obj = { id: id, productosCarrito: array };
    await axios.post(`${url}/cart/create`, obj);
    dispatch({ type: ADD_CART_PRODUCTS });
  } catch (error) {
    console.error(error);
  }
};

export const getUser = (stringToken) => async (dispatch) => {
  try {
    const myUser = { token: stringToken.toString() };
    const userFound = await axios.post(`${url}/user/login/find`, myUser);
    dispatch({ type: GET_USER, payload: userFound.data });
  } catch (error) {
    console.error(error);
  }
};

export const clearUser = () => (dispatch) => {
  dispatch({ type: CLEAR_USER });
};

export const deleteCartProduct = (id) => async (dispatch) => {
  try {
    await axios.post(`${url}/cart/delete`, { id: id });
    dispatch({ type: DELETE_CART_PRODUCT });
  } catch (error) {
    console.error(error);
  }
};

export const clearReviews = () => (dispatch) => {
  dispatch({ type: CLEAR_REVIEWS });
};

export const clearSearchReview = () => (dispatch) => {
  dispatch({ type: CLEAR_SEARCH_REVIEW });
};

export const createReview = (review) => async (dispatch) => {
  try {
    const response = (await axios.post(`${url}/reviews`, review)).data;
    dispatch({ type: CREATE_REVIEWS, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const searchReview = (id) => async (dispatch) => {
  try {
    const review = (await axios.get(`${url}/reviews/${id}`)).data;
    dispatch({ type: SEARCH_REVIEW, payload: review });
  } catch (error) {
    console.error(error);
  }
};

export const reviewsOfAProduct = (id) => async (dispatch) => {
  try {
    const reviews = (await axios.get(`${url}/reviews?productoId=${id}`)).data;
    dispatch({ type: PRODUCT_REVIEWS, payload: reviews });
  } catch (error) {
    console.error(error);
  }
};

export const reviewsByUser = (id) => async (dispatch) => {
  try {
    const reviews = (await axios.get(`${url}/reviews?userId=${id}`)).data;
    dispatch({ type: REVIEWS_BY_USER, payload: reviews });
  } catch (error) {
    console.error(error);
  }
};

export const updateReview = (review) => async (dispatch) => {
  try {
    const response = (await axios.put(`${url}/reviews`, review)).data;
    dispatch({ type: UPDATE_REVIEW, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const deleteReview = (id) => async (dispatch) => {
  try {
    const response = (await axios.delete(`${url}/reviews/${id}`)).data;
    dispatch({ type: DELETE_REVIEW, payload: response });
  } catch (error) {
    console.error(error);
  }
};
export const getOneUser = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const myUser = await axios.get(`${url}/user/login/name`, config);
    dispatch({ type: GET_ONE_USER, payload: myUser });
  } catch (error) {
    console.error(error);
  }
};

export const editDiscount = (id, descuento) => async (dispatch) => {
try {
  const config = {
    headers: {
      Authorization: token,
    },
  };
	  await axios.post(`${url}/discount`, { productId: id, discount: descuento }, config);
	  dispatch({ type: EDIT_DISCOUNT });
} catch (error) {
  console.error(error)

}
};

export const editStock = (id, stockProd) => async (dispatch) => {
try {
  const config = {
    headers: {
      Authorization: token,
    },
  };
	  await axios.post(`${url}/stock`, { productId: id, stock: stockProd }, config);
	  dispatch({ type: EDIT_STOCK });
} catch (error) {
  console.error(error)

}
};

export const getIntel = (pcType) => async (dispatch) => {
try {
	  const allIntel = await axios.get(`${url}/productos/intel?pcType=${pcType}`);
	  dispatch({ type: GET_INTEL, payload: allIntel.data });
} catch (error) {
  console.error(error)

}
};

export const getAmd = (pcType) => async (dispatch) => {
try {
	  const allAmd = await axios.get(`${url}/productos/amd?pcType=${pcType}`);
	  dispatch({ type: GET_AMD, payload: allAmd.data });
} catch (error) {
  console.error(error)

}
};

export const addFavoritoProduct = (productId, userId) => async (dispatch) => {
try {
	  await axios.post(`${url}/favoritos`, {
	    productId,
	    userId,
	  });
	  dispatch({ type: ADD_FAVORITO_PRODUCT });
} catch (error) {
  console.error(error)

}
};

export const getAllFavoritos = (userId) => async (dispatch) => {
try {
	  if (userId === "clear") {
	    dispatch({ type: GET_ALL_FAVORITOS, payload: [] });
	  } else {
	    const favsProducts = await axios.get(`${url}/favoritos?id=${userId}`);
	    dispatch({ type: GET_ALL_FAVORITOS, payload: favsProducts.data });
	  }
} catch (error) {
  console.error(error)

}
};

export const deleteFavorito = (productId, userId) => async (dispatch) => {
try {
	  await axios.post(`${url}/favoritos/delete`, {
	    productId,
	    userId,
	  });
	  dispatch({ type: DELETE_FAVORITO });
} catch (error) {
  console.error(error)

}
};

export const deleteAllFavorito = (userId) => async (dispatch) => {
try {
	  await axios.post(`${url}/favoritos/deleteAll`, {
	    userId,
	  });
	  dispatch({ type: DELETE_ALL_FAVORITO });
} catch (error) {
  console.error(error)

}
};

export const userUpdate = (userImage) => async (dispatch) => {
try {
	  const obj = { picture: userImage };
	  const config = {
	    headers: {
	      authorization: token,
	    },
	  };
	  const userEdit = await axios.put(`${url}/user/create/edit`, obj, config);
	  dispatch({ type: UPDATE_USER, payload: userEdit });
} catch (error) {
  console.error(error)

}
};

export const setWelcome = (bool) => (dispatch) => {
  dispatch({ type: WELCOME, payload: bool });
};
