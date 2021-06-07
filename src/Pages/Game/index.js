import React from 'react'
import {
  View,
  Text,
  Pressable
} from 'react-native'

import Styles from './Styles'

const Game = ({ navigation: { navigate } }) => {
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