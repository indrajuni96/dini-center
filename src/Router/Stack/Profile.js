import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Profile } from '../../Pages'

const ProfileStack = createStackNavigator()

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  )
}

export default ProfileStackScreen