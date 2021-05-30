import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import TabApp from './BottomTab'
import { AuthStackScreen } from './Stack'

const Router = () => {
  const userUID = false

  return (
    <NavigationContainer>
      {userUID ? <TabApp /> : <AuthStackScreen />}
    </NavigationContainer>
  )
}

export default Router