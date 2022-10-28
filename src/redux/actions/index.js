import axios from "axios";

export function getallproductos() {
  return async function (dispatch) {
    var json = await axios("http://localhost:3001/products/");
    return dispatch({
      type: "GET_PRODUCTS",
      payload: json.data,
    });
  };
}
