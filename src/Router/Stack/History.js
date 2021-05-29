import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { History } from '../../Pages'

const HistoryStack = createStackNavigator()

const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator
      headerMode='none'>
      <HistoryStack.Screen name="History" component={History} />
    </HistoryStack.Navigator>
  )
}

export default HistoryStackScreen