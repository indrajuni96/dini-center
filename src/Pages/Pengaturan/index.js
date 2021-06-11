import React from 'react'
import { View, Text } from 'react-native'
import { useDispatch } from 'react-redux'

import Styles from './Styles'
import {
  Space,
  ListPengaturan
} from '../../Components'
import { BackHandlerAction } from '../../Utils'
import { logoutUser } from '../../Redux/Actions/Auth'

const Pengaturan = ({ navigation: { isFocused, navigate } }) => {
  BackHandlerAction(isFocused)

  const dispatch = useDispatch()

  return (
    <View style={Styles.container}>
      <View style={Styles.contentHeader}>
        <Text style={Styles.textHeader}>
          Pengaturan
        </Text>
      </View>

      <Space height={40} />

      <View style={Styles.contentList}>
        <Space height={10} />

        <ListPengaturan
          isOnPress
          title='Profile'
          onPress={() => navigate('Profile')} />

        <Space height={2} />

        <ListPengaturan
          isOnPress
          title='Informasi'
          onPress={() => console.log('Informasi')} />

        <Space height={2} />

        <ListPengaturan
          title='Versi Aplikasi'
          titleRight='0.0.0' />

        <Space height={10} />

        <ListPengaturan
          isOnPress
          title='Keluar'
          onPress={() => dispatch(logoutUser())} />
      </View>
    </View>
  )
}

export default Pengaturan