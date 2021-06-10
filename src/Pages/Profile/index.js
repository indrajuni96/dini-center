import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'

const Profile = ({ navigation: { goBack } }) => {
  return (
    <View style={Styles.container}>
      <Text>Page Profile</Text>
    </View>
  )
}

export default Profile