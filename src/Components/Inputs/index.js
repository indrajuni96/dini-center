import React from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable
} from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import Styles from './Styles'
import Space from '../Space'
import { colors } from '../../Utils'

const Input = ({ securePassword, number, email, icon, title, value, error = '', onChangeText, onPress }) => {
  return (
    <View style={Styles.content}>
      <Text style={Styles.text}>{title}</Text>

      <View style={Styles.contentInput}>
        <TextInput
          secureTextEntry={securePassword}
          value={value}
          style={Styles.textInput}
          onChangeText={onChangeText}
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType={number ? 'numeric' : email ? 'email-address' : 'default'} />

        {icon ?
          <Pressable
            onPress={onPress}>
            <IconFontAwesome
              size={30}
              name={securePassword ? 'eye-slash' : 'eye'}
              color={securePassword ? colors.silverLigth : colors.black} />
          </Pressable>
          : null}
      </View>

      <Space height={5} />

      <View style={Styles.contentError}>
        <Text style={Styles.textError}>{ }</Text>
      </View>
    </View>
  )
}

export default Input