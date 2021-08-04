import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  Profile,
  StartGame,
  Informasi,
  HasilDiagnosa
} from '../../Pages'
import TabApp from '../BottomTab'
import { screenOptions } from './Config'

const AppStack = createStackNavigator()

const AppStackScreen = () => {
  return (
    <AppStack.Navigator
      headerMode='none'
      screenOptions={screenOptions}>
      <AppStack.Screen name="TabApp" component={TabApp} />
      <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen name="Informasi" component={Informasi} />
      <AppStack.Screen name="StartGame" component={StartGame} />
      <AppStack.Screen name="HasilDiagnosa" component={HasilDiagnosa} />
    </AppStack.Navigator>
  )
}

export default AppStackScreen