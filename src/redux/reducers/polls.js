import { handleActions } from 'redux-actions'
import ACTIONS from '../constants/polls'

const defaultState = {
  list: []
}

export default handleActions({
  [ACTIONS.INIT]: (state, { payload }) => {
    debugger
    return { ...state,list: payload.polls }
  }
}, defaultState)
