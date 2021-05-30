import React from 'react'
import {
  View,
  Text,
  Pressable
} from 'react-native'
import IconIonic from 'react-native-vector-icons/dist/Ionicons'

import Styles from './Styles'
import { colors } from '../../Utils'

const Header = ({ isDefault, title = '', onPress }) => {
  if (isDefault) {
    return (
      <View>
        <Text style={Styles.text}>{title}</Text>
      </View>
    )
  }


  return (
    <View style={Styles.content}>
      <Pressable
        style={Styles.pressable}
        android_ripple={Styles.ripple}
        onPress={onPress}>
        <IconIonic name="chevron-back-outline" size={30} color={colors.black} />
      </Pressable>

      <View style={Styles.wrapperText}>
        <Text style={Styles.text}>{title}</Text>
      </View>
    </View>
  )
}

export default Header