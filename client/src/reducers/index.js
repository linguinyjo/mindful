import { combineReducers } from 'redux'
import authReducer from './authReducer'
import xpReducer from './xpReducer'
import sessionReducer from './sessionReducer'

//these are the keys that appear in the state object
export default combineReducers({
  auth: authReducer,
  percent: xpReducer,
  session: sessionReducer
})