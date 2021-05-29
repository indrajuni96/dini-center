import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'
import { BoySvg } from '../../Assets'

const Home = () => {
  return (
    <View style={Styles.container}>
      <Text>Page Home</Text>

      <BoySvg width={100} height={100} />
    </View>
  )
}

export default Home