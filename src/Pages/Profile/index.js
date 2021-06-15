import React from 'react'
import {
  View,
  ScrollView
} from 'react-native'
import { useSelector } from 'react-redux'

import Styles from './Styles'
import {
  Space,
  Header,
  Input,
  Button
} from '../../Components'

const Profile = ({ navigation: { goBack } }) => {
  const user = useSelector(state => state.AuthStore.user)

  return (
    <View style={Styles.container}>
      <Header
        title='Profile'
        onPress={() => goBack()} />

      <Space height={40} />

      <ScrollView
        style={Styles.scrollView}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={Styles.contentForm}>
          <Input
            editable
            title='Nama Anak'
            value={user ? user.namaAnak : ''} />

          <Input
            editable
            title='Nama Orang Tua'
            value={user ? user.namaOrangTua : ''} />

          <Input
            editable
            title='Nomor Telepon'
            value={user ? user.noTelepon : ''} />

          <Input
            editable
            title='Alamat'
            value={user ? user.alamat : ''} />

          <Input
            editable
            title='Email'
            value={user ? user.email : ''} />

          <Input
            editable
            securePassword
            title='Password'
            value='******' />

          <Space height={30} />

          <Button
            red
            title='Ubah Profile'
            onPress={() => console.log('ubah profile')} />
        </View>

        <Space height={30} />
      </ScrollView>
    </View>
  )
}

export default Profile