import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../Pages'

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      headerMode='none'>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen