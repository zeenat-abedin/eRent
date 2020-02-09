import { SET_CURRENT_USER, CLEAR_USER } from "./actionType";

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});
export const clearCurrentUser = () => ({
  type: CLEAR_USER
});
