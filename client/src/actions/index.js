import axios from 'axios'
import { FETCH_USER, PROGRESS_BAR } from './types'

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const updateXpBar = (percent) => (dispatch) => {
  dispatch({ type: PROGRESS_BAR, payload: percent })
}
// export const addSession = (token) => async (dispatch) => {
//   const res = await axios.post('/api/add_session', token)
//   dispatch({ type: FETCH_USER, payload: res.data })
// }