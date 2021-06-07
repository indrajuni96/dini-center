import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Test, Game } from '../../Pages'
import { screenOptions } from './Config'

const GameStack = createStackNavigator()

const GameStackScreen = () => {
  return (
    <GameStack.Navigator
      headerMode='none'
      screenOptions={screenOptions}>
      <GameStack.Screen name="Game" component={Game} />
      <GameStack.Screen name="Test" component={Test} />
    </GameStack.Navigator>
  )
}

export default GameStackScreen