import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'
import {
  Space,
  Header
} from '../../Components'

const Register = ({ navigation: { goBack } }) => {
  return (
    <View style={Styles.container}>
      <Header
        title='Daftar'
        onPress={() => goBack()} />
    </View>
  )
}

export default Register