import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Login, Register, LandingPage } from '../../Pages'

const AuthStack = createStackNavigator()

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      headerMode='none'
      initialRouteName="LandingPage">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="LandingPage" component={LandingPage} />
    </AuthStack.Navigator>
  )
}

export default AuthStackScreen