import { handleActions } from 'redux-actions'
import ACTIONS from '../constants/polls'

const defaultState = {
  
}

export default handleActions({
  [ACTIONS.INIT]: (state, { payload }) => {

    return { ...state.polls, ...payload.polls }
  }
}, defaultState)
