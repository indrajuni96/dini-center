import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import TabApp from './BottomTab'
import { AuthStackScreen } from './Stack'

const Router = () => {
  const userUID = useSelector(state => state.AuthStore.userUID)

  return (
    <NavigationContainer>
      {userUID == null ? <AuthStackScreen /> : <TabApp />}
    </NavigationContainer>
  )
}

export default Router