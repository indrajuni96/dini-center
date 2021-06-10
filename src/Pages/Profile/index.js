import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'
import { BackHandlerAction } from '../../Utils'

const Profile = ({ navigation: { isFocused } }) => {
  BackHandlerAction(isFocused)

  return (
    <View style={Styles.container}>
      <Text>Page Profile</Text>
    </View>
  )
}

export default Profile