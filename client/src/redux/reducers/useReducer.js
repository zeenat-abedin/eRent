import { SET_CURRENT_USER, CLEAR_USER, GET_PRODUCTS, POST_PRODUCT } from "../actions/actionType";

const INITIAL_STATE = {
  currentUser: null,
  products: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    case CLEAR_USER:
      return {
        ...state,
        currentUser: null
      }
    case POST_PRODUCT:
      let result = payload.data
      console.log(result)
      return {
        ...state,
        products: result
      }
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload
      }
    default:
      return state;
  }
};

export default userReducer;
