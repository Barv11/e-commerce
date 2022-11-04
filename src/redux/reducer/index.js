import {
  GET_ALL_PRODUCTS,
  TOGGLE_PRODUCT_TYPE,
  SEARCH_PRODUCT_BY_NAME,
  SEARCH_PRODUCT_BY_ID,
  CLEAR_PRODUCTS,
  GET_CURRENT_USER,
  USER_LOGIN,
  USER_LOGOUT,
  ORDER_NAME,
  ORDER_PRECIO,
  POST_PRODUCT,
  UPDATE_PRODUCT,
  ADD_CART_PRODUCTS,
  REGISTER_USER,
  GET_USER,
  GET_CART_PRODUCTS,
  GET_ALL_USERS,
  CLEAR_CART_PRODUCTS,
  DELETE_CART_PRODUCT,
} from "../actions/actionsTypes";

const initialState = {
  allProducts: [],
  searchByNameProduct: [],
  searchByIdProduct: {},
  user: {},
  loginAccess: {},
  userFound: {},
  cartProducts: [],
  allUsers: [],
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
    case POST_PRODUCT:
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
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
    case GET_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: action.payload,
      };
    case DELETE_CART_PRODUCT:
      return {
        ...state,
      };
    case CLEAR_CART_PRODUCTS:
      return {
        ...state,
        cartProducts: [],
      };
    case ADD_CART_PRODUCTS:
      return {
        ...state,
      };
    case USER_LOGOUT:
      return {
        ...state,
        loginAccess: {},
      };
    case ORDER_NAME:
      let order =
        action.payload === "AZ"
          ? state.allProducts.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : state.allProducts.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            });
      return {
        ...state,
        allProducts: order,
      };
    case ORDER_PRECIO:
      let order2 =
        action.payload === "ascendente"
          ? state.allProducts.sort(function (a, b) {
              if (a.cost > b.cost) return 1;
              if (b.cost > a.cost) return -1;
              return 0;
            })
          : state.allProducts.sort(function (a, b) {
              if (a.cost > b.cost) return -1;
              if (b.cost > a.cost) return 1;
              return 0;
            });
      return {
        ...state,
        allProducts: order2,
      };
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        userFound: action.payload,
      };
    default:
      return {
        ...state,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
        };
  }
}

export default rootReducer;
