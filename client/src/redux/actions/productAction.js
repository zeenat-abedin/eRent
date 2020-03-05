import { GET_PRODUCTS, GET_SINGLE_PRODUCT, ERROR_MESSAGE } from "./actionType";
import axios from "../../config/axios";
export const getProducts = () => dispatch =>
  axios.get("/Products/getProducts").then(res =>
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    })
  );

export const getProduct = id => async dispatch => {
  try {
    const res = await axios.get(`/post/${id}`);
    console.log(res.data);
    if (res.data.message) {
      dispatch({
        type: ERROR_MESSAGE,
        payload: res.data.message
      });
    }
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: res.data.data
    });
  } catch (error) {
    console.log(error);
  }
};
