import { combineReducers } from 'redux'
import authReducer from './authReducer'
import xpReducer from './xpReducer'

//these are the keys that appear in the state object
export default combineReducers({
  auth: authReducer,
  percent: xpReducer
})