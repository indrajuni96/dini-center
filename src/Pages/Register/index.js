import React, { useState } from 'react'
import {
  View,
  ScrollView
} from 'react-native'

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
              onPress={() => navigate('HasilDiagnosa')} />
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