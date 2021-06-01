import React, { useState, useCallback } from 'react'
import {
  View,
  ScrollView,
  BackHandler
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

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

  return (
    <View style={Styles.container}>
      <Header
        title='Daftar'
        onPress={() => isNext ? setIsNext(false) : goBack()} />

      <Space height={40} />

      <ScrollView
        style={Styles.scrollView}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={Styles.contentForm}>
          {isNext ?
            <FormDiagnosa
              onPress={() => navigate('HasilDiagnosa')}
              onPressNext={() => setIsNext(false)} />
            : <FormRegister
              securePassword={securePassword}
              onPressNext={() => setIsNext(true)}
              onPressSecurePassword={() => setSecurePassword(state => !state)} />}
        </View>
      </ScrollView>
    </View>
  )
}

export default Register