import React from 'react'
import {
  View,
  Text,
  Pressable
} from 'react-native'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'

import Styles from './Styles'
import { colors } from '../../../Utils'

const ListGame = ({ disabled, item, onPress }) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={Styles.content}>
      <View style={Styles.contentIcon}>
        <AntDesign
          size={28}
          color={colors.black}
          name="play" />
      </View>

      <View style={Styles.contentText}>
        <Text style={Styles.textSemiBold15}>
          {item.namaGame}
        </Text>
      </View>
    </Pressable>
  )
}

export default ListGame