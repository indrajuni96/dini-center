import React from 'react'
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native'

import Styles from './Styles'
import Space from '../Space'

const Loading = (isDefault) => {
  if (isDefault) {
    return (
      <View style={Styles.contentIsDefault}>
        <ActivityIndicator size="large" color='#FF2768' />
      </View>
    )
  }

  return (
    <View style={Styles.content}>
      <ActivityIndicator size="large" color='#ffff' />

      <Space height={20} />

      <Text style={Styles.text}>Loading...</Text>
    </View>
  )
}


export default Loading