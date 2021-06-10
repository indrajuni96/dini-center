import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  AuthStackScreen,
  AppStackScreen
} from './Stack'

const RootStack = createStackNavigator()

const RootStackScreen = () => {
  const { userUID, isDiagnosa } = useSelector(state => ({
    userUID: state.AuthStore.userUID,
    isDiagnosa: state.AuthStore.isDiagnosa,
  }))

  return (
    <RootStack.Navigator headerMode={false}>
      {userUID !== null && isDiagnosa
        ? <RootStack.Screen name="App" component={AppStackScreen} />
        : <RootStack.Screen name="Auth" component={AuthStackScreen} />
      }
    </RootStack.Navigator>
  )
}

const Routers = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}

export default Routers