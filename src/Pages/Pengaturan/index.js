import React from 'react'
import {
  View,
  ToastAndroid
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNetInfo } from "@react-native-community/netinfo";

import Styles from './Styles'
import {
  Space,
  Header,
  ListPengaturan
} from '../../Components'
import { BackHandlerAction } from '../../Utils'
import { logoutUser } from '../../Redux/Actions/Auth'

const Pengaturan = ({ navigation: { isFocused, navigate } }) => {
  BackHandlerAction(isFocused)

  const dispatch = useDispatch()

  const { isConnected } = useNetInfo()

  const { user } = useSelector((state) => ({
    user: state.AuthStore.user
  }))

  const onNavigate = (routeName) => {
    if (isConnected) {
      navigate(routeName)
    } else {
      ToastAndroid.show('Tidak ada koneksi internet', ToastAndroid.SHORT);
    }
  }

  return (
    <View style={Styles.container}>
      <Header
        isDefault
        title='Pengaturan' />

      <Space height={30} />

      <View style={Styles.contentList}>
        <Space height={10} />

        {user.level != 'admin' ?
          <>
            <ListPengaturan
              isOnPress
              title='Profile'
              onPress={() => onNavigate('Profile')} />

            <Space height={2} />

            <ListPengaturan
              isOnPress
              title='Hasil Diagnosa'
              onPress={() => onNavigate('HasilDiagnosa')} />

            <Space height={2} />

            <ListPengaturan
              isOnPress
              title='Informasi'
              onPress={() => onNavigate('Informasi')} />

            <Space height={2} />
          </>
          : null}

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