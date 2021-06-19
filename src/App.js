import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import { PersistGate } from 'redux-persist/integration/react'

import Routers from './Router'
import { Store, Persistor } from './Redux'

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)

    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
  }, [])

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Routers />
      </PersistGate>
    </Provider>
  )
}