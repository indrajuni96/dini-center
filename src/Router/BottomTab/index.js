import React from 'react'
import { Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {
  Home,
  Game,
  History,
  Pengaturan
} from '../../Pages'
import { setTabBarVisible } from './Config'

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
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }} />

      <Tab.Screen
        name='Game'
        component={Game}
        options={({ route }) => ({
          tabBarLabel: 'Game',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="gamepad-variant" color={color} size={size} />
          ),
          tabBarVisible: setTabBarVisible(route)
        })}
      />

      <Tab.Screen
        name='History'
        component={History}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          )
        }} />

      <Tab.Screen
        name='Pengaturan'
        component={Pengaturan}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-grid" color={color} size={size} />
          )
        }} />
    </Tab.Navigator>
  )
}

export default TabApp