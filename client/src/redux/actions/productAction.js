import { GET_PRODUCTS } from './actionType';
import axios from '../../config/axios'
export const getProducts = () => dispatch => (
  axios
    .get('/Products/getProducts').then(res =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      }))
)
