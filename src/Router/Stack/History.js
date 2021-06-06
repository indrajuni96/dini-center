import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { History } from '../../Pages'
import { screenOptions } from './Config'

const HistoryStack = createStackNavigator()

const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator
      headerMode='none'
      creenOptions={screenOptions}>
      <HistoryStack.Screen name="History" component={History} />
    </HistoryStack.Navigator>
  )
}

export default HistoryStackScreen