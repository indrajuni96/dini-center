import React from 'react'
import { Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  HomeStackScreen,
  GameStackScreen,
  HistoryStackScreen,
  ProfileStackScreen
} from '../Stack'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Tab = createBottomTabNavigator()

const TabApp = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: '#FF2768',
        style: {
          elevation: 0,
          borderTopWidth: 0,
          height: SCREEN_HEIGHT * 0.08,
          paddingTop: SCREEN_HEIGHT * 0.008,
          paddingBottom: SCREEN_HEIGHT * 0.008,
          backgroundColor: '#ffff',
        }
      }}>
      <Tab.Screen
        name='Home'
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }} />

      <Tab.Screen
        name='Game'
        component={GameStackScreen}
        options={{
          tabBarLabel: 'Game',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gamepad-variant" color={color} size={size} />
          )
        }} />

      <Tab.Screen
        name='History'
        component={HistoryStackScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          )
        }} />

      <Tab.Screen
        name='Profile'
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-grid" color={color} size={size} />
          )
        }} />
    </Tab.Navigator>
  )
}

export default TabApp