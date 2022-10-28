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
    default:
      return state;
  }
}

export default rootReducer;
