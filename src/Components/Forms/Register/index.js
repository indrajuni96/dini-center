import React from 'react'

import Space from '../../Space'
import Input from '../../Inputs'
import Button from '../../Buttons/Button'

const FormRegister = ({ securePassword, onPressNext, onPressSecurePassword }) => {
  return (
    <>
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
        onPress={onPressSecurePassword}
        onChangeText={() => console.log('on change text')} />

      <Space height={30} />

      <Button
        red
        title='Selanjutnya'
        onPress={onPressNext} />
    </>
  )
}

export default FormRegister