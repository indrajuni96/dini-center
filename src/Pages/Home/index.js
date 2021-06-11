import React from 'react'
import {
  View,
  Text,
  Pressable
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'

import Styles from './Styles'
import { BoySvg } from '../../Assets'
import { colors, BackHandlerAction } from '../../Utils'
import {
  Space
} from '../../Components'

const Home = ({ navigation: { isFocused, navigate } }) => {
  BackHandlerAction(isFocused)

  return (
    <View style={Styles.container}>
      <View style={Styles.contentHeader}>
        <View style={Styles.wrapperDinicenter}>
          <Text style={Styles.textDini}>Dini</Text>
          <Text style={Styles.textCenter}>center</Text>
        </View>

        <BoySvg width={45} height={45} />
      </View>

      <Space height={40} />

      <View style={Styles.contentCard}>
        <View style={Styles.cardHeader}>
          <Text style={Styles.textSelamat}>Selamat pagi,</Text>

          <Pressable onPress={() => navigate('Profile')}>
            <FontAwesome name="user-circle-o" size={30} color={colors.silver} />
          </Pressable>
        </View>

        <Text style={Styles.textName}>
          Nicolas
        </Text>

        <Space height={40} />

        <View style={Styles.contentDate}>
          <FontAwesome name="user-circle-o" size={15} color={colors.silver} />

          <Space width={5} />

          <Text style={Styles.textDate}>
            1 January 2021
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Home