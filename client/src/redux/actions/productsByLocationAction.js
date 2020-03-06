import { GET_PRODUCTS_BY_LOCATION } from '../actions/actionType'
import axios from '../../config/axios'
export const getProductsByLocation = (location) => dispatch => {
  axios.get(`fetchProducts/${location}`, location).then(res => {
    dispatch({
      type: GET_PRODUCTS_BY_LOCATION,
      payload: res
    })
  }).catch(err => {
    console.log(err)
  })
}
