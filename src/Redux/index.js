import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import RootReducers from './Reducers'

const Store = createStore(
  RootReducers,
  composeWithDevTools(applyMiddleware(thunk)))

export { Store }