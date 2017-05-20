import { connect } from 'react-redux'
import App from '../../components/app/app'
import appActions from '../../redux/actions/app'

function mapStateToProps (state) {
  return ({ ...state })
}

const mapDispatchToProps = (dispatch) => {
  const allAppActions = appActions(dispatch)
  const init = () => {
    allAppActions.init()
  }
  return {
    init
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
