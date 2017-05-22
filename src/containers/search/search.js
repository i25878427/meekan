import { connect } from 'react-redux'
import Search from '../../components/search/search'
import searchActions from '../../redux/actions/search'

function mapStateToProps (state) {
  return ({ ...state })
}

const mapDispatchToProps = (dispatch) => {
  const allSearchActions = searchActions(dispatch)
  const init = () => {
    allPollsActions.init()
  }
  const searchBy = (value) => {
    allSearchActions.searchBy(value)
  }
  return {
    init,
    searchBy
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
