import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import TabApp from './BottomTab'

const Router = () => {
  return (
    <NavigationContainer>
      <TabApp />
    </NavigationContainer>
  )
}

export default Router