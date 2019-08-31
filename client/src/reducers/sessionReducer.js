import { SHOW_SESSION} from '../actions/types'

export default function(state = false, action) {
  switch (action.type) {
    case SHOW_SESSION:
       return action.payload
    default:
      return state
  }
}