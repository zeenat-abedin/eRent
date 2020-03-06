import { combineReducers } from 'redux'
import userReducer from './useReducer'
// import getProducts from './productReducer'
export default combineReducers({
  users: userReducer,
  // displayProducts: getProducts
})
