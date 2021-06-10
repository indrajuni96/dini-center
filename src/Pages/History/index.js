import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'
import { BackHandlerAction } from '../../Utils'

const History = ({ navigation: { isFocused } }) => {
  BackHandlerAction(isFocused)

  return (
    <View style={Styles.container}>
      <Text>Page History</Text>
    </View>
  )
}

export default History