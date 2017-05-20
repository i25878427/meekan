import { createAction } from 'redux-actions'
import ACTIONS from '../constants/polls'
import API from '../../utilities/api'

const initSuccess = createAction(
  ACTIONS.INIT, (appProps = {}) => appProps
)


const allPollsActions = (dispatch) => ({
  
  init: () => {
      const myHeaders = {
      Accept: 'text/plain',
      'Content-Type': 'text/plain',
    }
    API.fetchAPI({
      url: `${API.SERVER_URL}`,
      data: {},
      headers: myHeaders
    }
    ).then(polls => {
     debugger
      dispatch(initSuccess({ polls }))
    }).catch(errorAd => {
      throw (errorAd)
    })
     
  }
})
export default allPollsActions
