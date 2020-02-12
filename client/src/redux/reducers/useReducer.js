import { SET_CURRENT_USER, CLEAR_USER } from "../actions/actionType";

const INITIAL_STATE = {
  currentUser: null
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
    default:
      return state;
  }
};

export default userReducer;
