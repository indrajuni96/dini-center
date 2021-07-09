import { combineReducers } from 'redux'

import AuthReducer from './Auth'
import MetodeReducer from './Metode'

const RootReducers = combineReducers({
  AuthStore: AuthReducer,
  MetodeStore: MetodeReducer
})

export default RootReducers