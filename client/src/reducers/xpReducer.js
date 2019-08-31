import { PROGRESS_BAR } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
    case PROGRESS_BAR:
       return action.payload 
    default:
      return state
  }
}