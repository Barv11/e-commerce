import axios from "axios";
import { USER_LOGIN, USER_LOGOUT, GET_CURRENT_USER } from "./actionsTypes";

export function getallproductos() {
  return async function (dispatch) {
    var json = await axios("http://localhost:3001/products/");
    return dispatch({
      type: "GET_PRODUCTS",
      payload: json.data,
    });
  };
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
