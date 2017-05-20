import { createAction } from 'redux-actions'
import ACTIONS from '../constants/app'

const initSuccess = createAction(
  ACTIONS.INIT, (appProps = {}) => appProps
)
const allAppActions = (dispatch) => ({
  init: () => {
    dispatch(initSuccess())
  }
})
export default allAppActions
