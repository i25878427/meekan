import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configure_store'
import reducer from './redux/reducers'
import App from './containers/app/app'

const configureStore2 = configureStore()

render(<Provider store={configureStore2}>
    <App />
  </Provider>, 
  document.getElementById('app')
)


