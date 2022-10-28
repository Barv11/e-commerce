import {
  GET_CURRENT_USER,
  USER_LOGIN,
  USER_LOGOUT,
} from "../actions/actionsTypes";

const initialState = {
  allproducts: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        allproducts: action.payload,
      };
    case GET_CURRENT_USER:
      console.log(state);
      return {
        ...state,
        currentUser: action.payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        loginAccess: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        loginAccess: {},
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
