import { handleActions } from 'redux-actions'
import ACTIONS from '../constants/app'

const defaultState = {

}

export default handleActions({
  [ACTIONS.INIT]: (state, { payload }) => {

    return { ...state }
  }
}, defaultState)
