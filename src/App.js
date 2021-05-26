import React, { useEffect } from 'react'
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'

import Router from './Router'

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }, [])

  return (
    <Router />
  )
}