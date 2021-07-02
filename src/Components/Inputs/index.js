import React from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  Dimensions
} from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import Styles from './Styles'
import Space from '../Space'
import { colors } from '../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Input = ({ isHeight, editable, securePassword, number, email, icon, title, value, touched, errors, onChangeText, onKeyPress, onBlur, onPress }) => {
  const height = isHeight ? SCREEN_HEIGHT * 0.055 : null

  return (
    <View style={Styles.content}>
      <Text style={Styles.text}>{title}</Text>

      <View style={[Styles.contentInput, { height }]}>
        <TextInput
          editable={!editable ? true : false}
          secureTextEntry={securePassword}
          value={value}
          style={Styles.textInput}
          onBlur={onBlur}
          onKeyPress={onKeyPress}
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

      <View style={Styles.contentError}>
        <Text style={Styles.textError}>{touched && errors ? errors : ''}</Text>
      </View>
    </View>
  )
}

export default Input