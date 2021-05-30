import React, { useState } from 'react'
import {
  View,
  ScrollView
} from 'react-native'

import Styles from './Styles'
import {
  Space,
  Input,
  Button,
  Header,
  Loading
} from '../../Components'

const Login = ({ navigation: { goBack } }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [securePassword, setSecurePassword] = useState(true);

  const onLogin = () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <>
      <View style={Styles.container}>
        <Header
          title='Login'
          onPress={() => goBack()} />

        <Space height={40} />

        <ScrollView
          style={Styles.scrollView}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View style={Styles.contentForm}>
            <Input
              email
              title='Email'
              error='Wajib Diisi'
              onChangeText={() => console.log('on change text')} />

            <Input
              icon
              securePassword={securePassword}
              title='Password'
              error='Wajib Diisi'
              onPress={() => setSecurePassword(state => !state)}
              onChangeText={() => console.log('on change text')} />

            <Space height={30} />

            <Button
              red
              title='Masuk'
              onPress={onLogin} />
          </View>
        </ScrollView>

      </View>

      {isLoading ? <Loading /> : null}
    </>
  )
}

export default Login