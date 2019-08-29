import { combineReducers } from 'redux'
import authReducer from './authReducer'

//these are the keys that appear in the state object
export default combineReducers({
  auth: authReducer
})