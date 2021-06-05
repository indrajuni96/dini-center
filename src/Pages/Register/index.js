import React, { useState, useCallback } from 'react'
import {
  View,
  BackHandler,
  ToastAndroid
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useNetInfo } from "@react-native-community/netinfo";

import Styles from './Styles'
import {
  Space,
  Header,
  FormRegister,
  FormDiagnosa
} from '../../Components'

const Register = ({ navigation: { goBack, navigate } }) => {
  const [isNext, setIsNext] = useState(false)
  const [securePassword, setSecurePassword] = useState(true);

  const { isConnected } = useNetInfo()

  useFocusEffect(useCallback(() => {
    backHandlerAction()
  }, [isNext]))

  const backHandlerAction = () => {
    const backAction = () => {
      if (isNext) {
        setIsNext(false)
      } else {
        goBack()
      }

      return true
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)

    return () => backHandler.remove()
  }

  const onPress = (routerName) => {
    if (isConnected) {
      navigate(routerName)
    } else {
      ToastAndroid.show('Tidak ada koneksi internet', ToastAndroid.SHORT);
    }
  }

  return (
    <View style={Styles.container}>
      <Header
        title='Daftar'
        onPress={() => isNext ? setIsNext(false) : goBack()} />

      <Space height={40} />

      {isNext ?
        <FormDiagnosa
          onPress={() => onPress('HasilDiagnosa')}
          onPressNext={() => setIsNext(false)} />
        : <FormRegister
          securePassword={securePassword}
          onPressNext={() => setIsNext(true)}
          onPressSecurePassword={() => setSecurePassword(state => !state)} />}
    </View>
  )
}

export default Register