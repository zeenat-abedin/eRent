import { POST_PRODUCT } from './actionType';
import axios from '../../config/axios'
export const postProduct = (product) => dispatch => (
  axios
    .post('/products/addProduct', {
      product
    }).then(res =>
      dispatch({
        type: "POST_PRODUCT",
        payload: res.data
      }))
)
