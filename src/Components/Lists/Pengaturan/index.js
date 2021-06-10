import React from 'react'
import {
  View,
  Text,
  Pressable
} from 'react-native'
import IconIonic from 'react-native-vector-icons/dist/Ionicons'

import Styles from './Styles'
import { colors } from '../../../Utils'

const ListPengaturan = ({ isOnPress, title, titleRight, onPress }) => {

  if (isOnPress) {
    return (
      <Pressable
        onPress={onPress}
        style={Styles.content}>
        <Text style={Styles.text}>
          {title}
        </Text>

        <IconIonic
          size={25}
          color={colors.silver}
          name="chevron-forward-outline" />
      </Pressable>
    )
  }

  return (
    <View style={Styles.content}>
      <Text style={Styles.text}>
        {title}
      </Text>

      <Text style={Styles.text}>
        {titleRight}
      </Text>
    </View>
  )
}

export default ListPengaturan