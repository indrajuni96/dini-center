import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'
import {
  Space,
  Header
} from '../../Components'

const Profile = ({ navigation: { goBack } }) => {
  return (
    <View style={Styles.container}>
      <Header
        title='Profile'
        onPress={() => goBack()} />

      <Space height={40} />

    </View>
  )
}

export default Profile