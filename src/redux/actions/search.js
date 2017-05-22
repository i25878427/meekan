import { createAction } from 'redux-actions'
import ACTIONS from '../constants/polls'
import API from '../../utilities/api'


const searchBySuccess = createAction(
  ACTIONS.SEARCH_BY, (searchProps = {}) => searchProps
)

const allSearchActions = (dispatch) => ({
  searchBy: (value) => {
    dispatch(searchBySuccess({ searchValue: value }))
  }
})
export default allSearchActions
