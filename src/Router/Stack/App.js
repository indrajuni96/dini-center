import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  Test,
  Profile,
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
      <AppStack.Screen name="HasilDiagnosa" component={HasilDiagnosa} />
      <AppStack.Screen name="Test" component={Test} />
    </AppStack.Navigator>
  )
}

export default AppStackScreen