import {
  GET_ALL_PRODUCTS,
  TOGGLE_PRODUCT_TYPE,
  SEARCH_PRODUCT_BY_NAME,
  CLEAR_PRODUCTS,
} from "../actions/actionsTypes";

const initialState = {
  allProducts: [],
  searchByNameProduct: [],
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
    case CLEAR_PRODUCTS:
      return {
        ...state,
        allProducts: [],
        searchByNameProduct: [],
      };
    default:
      return state;
  }
}

export default rootReducer;
