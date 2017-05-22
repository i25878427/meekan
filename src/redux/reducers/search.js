import { handleActions } from 'redux-actions'
import ACTIONS from '../constants/polls'

const defaultState = {
  searchValue: ''
}

export default handleActions({
  [ACTIONS.SEARCH_BY]: (state, { payload }) => {
    debugger
    return { ...state, searchValue: payload.searchValue }
  }
}, defaultState)
