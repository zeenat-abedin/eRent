import { SET_CURRENT_USER } from "./actionType";

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});