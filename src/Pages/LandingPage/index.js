import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'
import { Space } from '../../Components'

const LandingPage = () => {
  return (
    <View style={Styles.container}>
      <Space height={20} />

      <View style={Styles.wrapperDinicenter}>
        <Text style={Styles.textDini}>Dini</Text>
        <Text style={Styles.textCenter}>center</Text>
      </View>
    </View>
  )
}

export default LandingPage