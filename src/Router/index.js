import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { HomeStackScreen } from './Stack'

const Router = () => {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  )
}

export default Router