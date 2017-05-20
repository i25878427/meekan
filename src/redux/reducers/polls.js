import { handleActions } from 'redux-actions'
import ACTIONS from '../constants/polls'

const defaultState = {
  
}

export default handleActions({
  [ACTIONS.INIT]: (state, { payload }) => {
    return { ...state.polls, ...payload.polls }
  },
  [ACTIONS.SEARCH_BY]: (state, { payload }) => {
    return { ...state }
  }
}, defaultState)
