import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import AsyncStorage from '@react-native-async-storage/async-storage'

import RootReducers from './Reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['AuthStore']
}

const persistedReducer = persistReducer(persistConfig, RootReducers)
const Store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
const Persistor = persistStore(Store)

export { Store, Persistor }