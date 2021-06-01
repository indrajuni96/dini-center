import { combineReducers } from 'redux'

import AuthReducer from './Auth'

const RootReducers = combineReducers({
  AuthStore: AuthReducer
})

export default RootReducers