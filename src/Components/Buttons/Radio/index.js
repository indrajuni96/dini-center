import React from 'react'
import {
  View,
  Text,
  Pressable
} from 'react-native'

import Styles from './Styles'
import Space from '../../Space'
import { colors } from '../../../Utils'

const Radio = ({ isDefault, select, onPress }) => {
  const borderColor = select ? colors.red : colors.silver
  const backgroundColor = select ? colors.red : colors.white

  if (!isDefault) {
    return (
      <View style={Styles.content}>
        <Pressable
          style={[Styles.pressable, { borderColor }]}
          onPress={onPress}>
          <View style={[Styles.radio, { backgroundColor }]} />
        </Pressable>

        <Space width={5} />

        <Text style={Styles.text}>Iya</Text>
      </View>
    )
  }

  return (
    <View style={Styles.content}>
      <Pressable
        style={[Styles.pressable, { borderColor }]}
        onPress={onPress}>
        <View style={[Styles.radio, { backgroundColor }]} />
      </Pressable>

      <Space width={5} />

      <Text style={Styles.text}>Tidak</Text>
    </View>
  )
}

export default Radio