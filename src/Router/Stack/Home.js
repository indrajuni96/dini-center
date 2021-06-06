import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../Pages'
import { screenOptions } from './Config'

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      headerMode='none'
      screenOptions={screenOptions}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen