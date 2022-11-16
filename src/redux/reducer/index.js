import {
  GET_ALL_PRODUCTS,
  GET_DELETED_PRODUCTS,
  TOGGLE_PRODUCT_TYPE,
  TOGGLE_DELETED_PRODUCT_TYPE,
  RESTORE_PRODUCT,
  SEARCH_PRODUCT_BY_NAME,
  SEARCH_PRODUCT_BY_ID,
  CLEAR_PRODUCTS,
  GET_CURRENT_USER,
  USER_LOGIN,
  USER_LOGOUT,
  ORDER_NAME,
  ORDER_PRECIO,
  POST_IMAGE,
  CLEAR_MESSAGE,
  POST_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  ADD_CART_PRODUCTS,
  REGISTER_USER,
  GET_USER,
  CLEAR_USER,
  GET_CART_PRODUCTS,
  GET_ALL_USERS,
  CLEAR_CART_PRODUCTS,
  DELETE_CART_PRODUCT,
  CLEAR_REVIEWS,
  CLEAR_SEARCH_REVIEW,
  SEARCH_REVIEW,
  CREATE_REVIEWS,
  PRODUCT_REVIEWS,
  REVIEWS_BY_USER,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  GET_ONE_USER,
  GET_INTEL,
  GET_AMD,
  EDIT_DISCOUNT,
  EDIT_STOCK,
  ADD_FAVORITO_PRODUCT,
  GET_ALL_FAVORITOS,
  DELETE_ALL_FAVORITO,
} from "../actions/actionsTypes";

const initialState = {
  allProducts: [],
  deletedProducts: [],
  searchByNameProduct: [],
  searchByIdProduct: {},
  user: {},
  loginAccess: {},
  userFound: {},
  cartProducts: [],
  allUsers: [],
  url: "",
  message: "",
  productReviews: [],
  userReviews: [],
  reviewSearched: {},
  userProfile: {},
  productsIntel: [],
  productsAmd: [],
  favoritos: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_DELETED_PRODUCTS:
      return {
        ...state,
        deletedProducts: action.payload,
      };
    case TOGGLE_PRODUCT_TYPE:
      return {
        ...state,
        allProducts: action.payload,
      };
    case TOGGLE_DELETED_PRODUCT_TYPE:
      return {
        ...state,
        deletedProducts: action.payload,
      };
    case RESTORE_PRODUCT:
      return {
        ...state,
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
    case ADD_FAVORITO_PRODUCT:
      return {
        ...state,
      };
    case GET_ALL_FAVORITOS:
      return {
        ...state,
        favoritos: action.payload,
      };
    case DELETE_ALL_FAVORITO:
      return {
        ...state,
        favoritos: [],
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        allProducts: [],
        searchByNameProduct: [],
        searchByIdProduct: {},
        url: "",
        message: "",
      };
    case POST_IMAGE:
      return {
        ...state,
        url: action.payload,
      };
    case POST_PRODUCT:
      return {
        ...state,
        message: action.payload,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        message: action.payload,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: "",
      };
    case DELETE_PRODUCT:
      return {
        ...state,
      };
    case GET_CURRENT_USER:
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
          ? state.allProducts.sort(function(a, b) {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : state.allProducts.sort(function(a, b) {
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
          ? state.allProducts.sort(function(a, b) {
              if (a.cost > b.cost) return 1;
              if (b.cost > a.cost) return -1;
              return 0;
            })
          : state.allProducts.sort(function(a, b) {
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
    case CLEAR_USER:
      return {
        ...state,
        userFound: {},
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case CLEAR_REVIEWS:
      return {
        ...state,
        productReviews: [],
        userReviews: [],
      };
    case CLEAR_SEARCH_REVIEW:
      return {
        ...state,
        reviewSearched: {},
      };
    case SEARCH_REVIEW:
      return {
        ...state,
        reviewSearched: action.payload,
      };
    case CREATE_REVIEWS:
      return {
        ...state,
      };
    case PRODUCT_REVIEWS:
      return {
        ...state,
        productReviews: action.payload,
      };
    case REVIEWS_BY_USER:
      return {
        ...state,
        userReviews: action.payload,
      };
    case UPDATE_REVIEW:
      return {
        ...state,
      };
    case DELETE_REVIEW:
      return {
        ...state,
      };
    case GET_ONE_USER:
      return {
        ...state,
        userProfile: action.payload,
      };
    case GET_INTEL:
      return {
        ...state,
        productsAmd: [],
        productsIntel: action.payload,
      };
    case GET_AMD:
      return {
        ...state,
        productsIntel: [],
        productsAmd: action.payload,
      };
    case EDIT_DISCOUNT:
      return {
        ...state,
      };
    case EDIT_STOCK:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
    /*  case POST_INFO_VENTA:
      return {
        ...state,
      }; */
  }
}

export default rootReducer;
