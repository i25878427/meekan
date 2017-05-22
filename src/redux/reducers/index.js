import { combineReducers } from 'redux'
import app from './app'
import polls from './polls'
import search from './search'

const rootReducer = combineReducers({
  app,
  polls,
  search
})

export default rootReducer
