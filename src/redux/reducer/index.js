import {
  GET_ALL_PRODUCTS,
  TOGGLE_PRODUCT_TYPE,
  SEARCH_PRODUCT_BY_NAME,
  SEARCH_PRODUCT_BY_ID,
  CLEAR_PRODUCTS,
  GET_CURRENT_USER,
  USER_LOGIN,
  USER_LOGOUT,
} from "../actions/actionsTypes";

const initialState = {
  allProducts: [],
  searchByNameProduct: [],
  searchByIdProduct: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case TOGGLE_PRODUCT_TYPE:
      return {
        ...state,
        allProducts: action.payload,
      };
    case SEARCH_PRODUCT_BY_NAME:
      return {
        ...state,
        searchByNameProduct: action.payload,
      };
    case SEARCH_PRODUCT_BY_ID:
      return {
        ...state,
        searchByIdProduct: action.payload,
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        allProducts: [],
        searchByNameProduct: [],
        searchByIdProduct: {},
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
