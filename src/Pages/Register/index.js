import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import Styles from './Styles'
import {
  Space,
  Input,
  Button,
  Header,
} from '../../Components'

const Register = ({ navigation: { goBack } }) => {
  const [securePassword, setSecurePassword] = useState(true);

  return (
    <View style={Styles.container}>
      <Header
        title='Daftar'
        onPress={() => goBack()} />

      <Space height={40} />

      <ScrollView
        style={Styles.scrollView}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={Styles.contentForm}>
          <Input
            title='Nama Orang Tua'
            error='Wajib Diisi'
            onChangeText={() => console.log('on change text')} />

          <Input
            number
            title='Nomor Telepon'
            error='Wajib Diisi'
            onChangeText={() => console.log('on change text')} />

          <Input
            title='Alamat'
            onChangeText={() => console.log('on change text')} />

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
            title='Selanjutnya'
            onPress={() => console.log('Selanjutnya')} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Register