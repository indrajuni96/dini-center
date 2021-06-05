import React, { useState, useCallback } from 'react'
import {
  View,
  BackHandler
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'

import Styles from './Styles'
import {
  Space,
  Header,
  FormRegister,
  FormDiagnosa
} from '../../Components'
import { clearFormRegister } from '../../Redux/Actions/Auth'

const Register = ({ navigation: { goBack, navigate } }) => {
  const [isNext, setIsNext] = useState(false)
  const [securePassword, setSecurePassword] = useState(true);

  const dispacth = useDispatch()

  useFocusEffect(useCallback(() => {
    backHandlerAction()
  }, [isNext]))

  const backHandlerAction = () => {
    const backAction = () => {
      if (isNext) {
        setIsNext(false)
      } else {
        onBack()
      }

      return true
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)

    return () => backHandler.remove()
  }

  const onBack = () => {
    goBack()
    dispacth(clearFormRegister())
  }

  return (
    <View style={Styles.container}>
      <Header
        title='Daftar'
        onPress={() => isNext ? setIsNext(false) : onBack()} />

      <Space height={40} />

      {isNext ?
        <FormDiagnosa
          navigate={navigate}
          onPressNext={() => setIsNext(false)} />
        : <FormRegister
          securePassword={securePassword}
          onPressNext={() => setIsNext(true)}
          onPressSecurePassword={() => setSecurePassword(state => !state)} />}
    </View>
  )
}

export default Register