import React from 'react'
import {
  View,
  Text
} from 'react-native'

import Styles from './Styles'
import { BoySvg } from '../../Assets'
import { BackHandlerAction } from '../../Utils'

const Home = ({ navigation: { isFocused } }) => {
  BackHandlerAction(isFocused)

  return (
    <View style={Styles.container}>
      <Text>Page Home</Text>

      <BoySvg width={100} height={100} />
    </View>
  )
}

export default Home