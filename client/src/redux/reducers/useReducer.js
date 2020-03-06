import { SET_CURRENT_USER, CLEAR_USER, GET_PRODUCTS, POST_PRODUCT, GET_CITIES, GET_PRODUCTS_BY_LOCATION, USER_PRODUCTS,GET_SINGLE_PRODUCT } from "../actions/actionType";

const INITIAL_STATE = {
  currentUser: null,
  products: null,
  cites: null,
  userProducts: null,
  singleProduct: null
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
      };
    case POST_PRODUCT:
      let result = payload.data;
      console.log(result);
      return {
        ...state,
        products: result
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload
      };
    case GET_CITIES:
      return {
        ...state,
        cities: payload.data
      };
    case GET_PRODUCTS_BY_LOCATION:
      return {
        ...state,
        citiesByLocation: payload.data
      }
    case USER_PRODUCTS:
      return {
        ...state,
        userProducts: payload
      }
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: payload
      };
    default:
      return state;
  }
};

export default userReducer;
