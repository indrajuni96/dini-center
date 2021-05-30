import React from 'react'
import {
  View,
  Text,
  Pressable
} from 'react-native'

import Styles from './Styles'
import { colors } from '../../../Utils'

const Button = ({ red, title, onPress }) => {
  const color = red ? colors.white : colors.black
  const borderColor = red ? colors.red : colors.black
  const backgroundColor = red ? colors.red : colors.white

  return (
    <View style={[Styles.content, { borderColor, backgroundColor }]}>
      <Pressable
        style={Styles.pressable}
        android_ripple={Styles.ripple}
        onPress={onPress}>
        <Text style={[Styles.text, { color }]}>{title}</Text>
      </Pressable>
    </View>
  )
}

export default Button