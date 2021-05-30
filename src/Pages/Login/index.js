import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'
import {
  Space,
  Header
} from '../../Components'

const Login = ({ navigation: { goBack } }) => {
  return (
    <View style={Styles.container}>
      <Header
        title='Login'
        onPress={() => goBack()} />
    </View>
  )
}

export default Login