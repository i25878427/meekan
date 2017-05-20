import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import immutableStateInvariant from 'redux-immutable-state-invariant'

// Be sure to ONLY add this middleware in development!
const middleware = process.env.NODE_ENV !== 'production' ?
  [immutableStateInvariant(), thunk, logger] :
  [thunk]


const logger = createLogger()
const configureStore = (initialState) => (
    createStore(
        rootReducer,
        initialState,
        applyMiddleware(immutableStateInvariant(), thunk, logger)
    )
)

export default configureStore
