import React, { useState, useCallback } from 'react'
import {
  View,
  BackHandler
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'

import Styles from './Styles'
import {
  Space,
  Header,
  Loading,
  FormRegister,
  FormDiagnosa
} from '../../Components'
import { getDataMetode } from '../../Redux/Actions/Metode'
import { clearFormRegister } from '../../Redux/Actions/Auth'

const Register = ({ navigation: { goBack, navigate } }) => {
  const [isNext, setIsNext] = useState(false)
  const [securePassword, setSecurePassword] = useState(true);

  const dispatch = useDispatch()

  const { isLoading } = useSelector(state => ({
    isLoading: state.AuthStore.isLoading
  }))

  useFocusEffect(useCallback(() => {
    dispatch(getDataMetode())

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
    dispatch(clearFormRegister())
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.contentHeader}>
        <Header
          title='Daftar'
          onPress={() => isNext ? setIsNext(false) : onBack()} />
      </View>

      <Space height={20} />

      <View style={Styles.contentForm}>
        {isNext ?
          <FormDiagnosa
            navigate={navigate}
            onPressNext={() => setIsNext(false)} />
          : <FormRegister
            securePassword={securePassword}
            onPressNext={() => setIsNext(true)}
            onPressSecurePassword={() => setSecurePassword(state => !state)} />}
      </View>

      {isLoading ? <Loading /> : null}
    </View>
  )
}

export default Register