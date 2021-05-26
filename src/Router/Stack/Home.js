import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../Pages'

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen