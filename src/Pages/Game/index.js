import React from 'react'
import {
  View,
  Text,
  Pressable
} from 'react-native'

import Styles from './Styles'
import { BackHandlerAction } from '../../Utils'

const Game = ({ navigation: { navigate, isFocused } }) => {
  BackHandlerAction(isFocused)

  return (
    <View style={Styles.container}>
      <Text>Page Game</Text>

      <Pressable onPress={() => navigate('Test')}>
        <Text>Test page</Text>
      </Pressable>
    </View>
  )
}

export default Game