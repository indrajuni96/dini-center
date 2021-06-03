import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import Router from './Router'
import { Store } from './Redux'

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }, [])

  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  )
}