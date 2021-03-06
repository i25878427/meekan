import { connect } from 'react-redux'
import Polls from '../../components/polls/polls'
import pollsActions from '../../redux/actions/polls'

function mapStateToProps (state) {
  return ({ ...state })
}

const mapDispatchToProps = (dispatch) => {
  const allPollsActions = pollsActions(dispatch)
  const init = () => {
    allPollsActions.init()
  }
  const searchBy = (value) => {
    allPollsActions.searchBy(value)
  }
  return {
    init,
    searchBy
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Polls)
