import React from 'react'
import {
  View,
  Text,
  Pressable
} from 'react-native'
import { useDispatch } from 'react-redux'

import Styles from './Styles'
import { BoySvg } from '../../Assets'
import { logoutUser } from '../../Redux/Actions/Auth'

const Home = () => {
  const dispatch = useDispatch()

  return (
    <View style={Styles.container}>
      <Text>Page Home</Text>

      <BoySvg width={100} height={100} />

      <Pressable onPress={() => dispatch(logoutUser())}>
        <Text>Logout</Text>
      </Pressable>

    </View>
  )
}

export default Home