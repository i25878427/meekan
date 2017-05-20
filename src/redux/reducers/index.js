import { combineReducers } from 'redux'
import app from './app'
import polls from './polls'

const rootReducer = combineReducers({
  app,
  polls
})

export default rootReducer
