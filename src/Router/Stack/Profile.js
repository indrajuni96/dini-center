import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Profile } from '../../Pages'
import { screenOptions } from './Config'

const ProfileStack = createStackNavigator()

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      headerMode='none'
      screenOptions={screenOptions}>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  )
}

export default ProfileStackScreen