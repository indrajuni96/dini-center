import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Game } from '../../Pages'
import { screenOptions } from './Config'

const GameStack = createStackNavigator()

const GameStackScreen = () => {
  return (
    <GameStack.Navigator
      headerMode='none'
      creenOptions={screenOptions}>
      <GameStack.Screen name="Game" component={Game} />
    </GameStack.Navigator>
  )
}

export default GameStackScreen