import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Game } from '../../Pages'

const GameStack = createStackNavigator()

const GameStackScreen = () => {
  return (
    <GameStack.Navigator>
      <GameStack.Screen name="Game" component={Game} />
    </GameStack.Navigator>
  )
}

export default GameStackScreen