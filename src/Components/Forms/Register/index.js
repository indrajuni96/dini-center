import React from 'react'
import {
  View,
  Keyboard,
  ScrollView,
  ToastAndroid
} from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNetInfo } from "@react-native-community/netinfo";

import Styles from './Styles'
import Space from '../../Space'
import Input from '../../Inputs'
import Button from '../../Buttons/Button'
import { setFormRegister } from '../../../Redux/Actions/Auth'

const FormRegister = ({ securePassword, onPressNext, onPressSecurePassword }) => {
  const dispatch = useDispatch()

  const { isConnected } = useNetInfo()

  const formRegister = useSelector((state) => state.AuthStore.formRegister)

  const initialValues = {
    namaOrangTua: formRegister.namaOrangTua || '',
    noTelepon: formRegister.noTelepon || '',
    alamat: formRegister.alamat || '',
    email: formRegister.email || '',
    password: formRegister.password || ''
  }

  const validationSchema = Yup.object().shape({
    namaOrangTua: Yup.string()
      .required('Wajib Diisi')
      .trim('Wajib Diisi'),
    // noTelepon: Yup.string()
    //   .required('Wajib Diisi')
    //   .trim('Wajib Diisi'),
    alamat: Yup.string()
      .required('Wajib Diisi')
      .trim('Wajib Diisi'),
    email: Yup.string()
      .required('Wajib Diisi')
      .trim('Wajib Diisi')
      .email('Format tidak cocok dengan email'),
    password: Yup.string()
      .required('Wajib Diisi')
      .trim('Wajib Diisi')
      .min(6, 'Minimum 6 karakter')
  })

  const onSubmit = (values) => {
    Keyboard.dismiss()

    if (isConnected) {
      dispatch(setFormRegister(values, onPressNext))
    } else {
      ToastAndroid.show('Tidak ada koneksi internet', ToastAndroid.SHORT);
    }
  }

  return (
    <ScrollView
      style={Styles.scrollView}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <View style={Styles.contentForm}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <>
              <Input
                isHeight
                title='Nama Orang Tua'
                value={values.namaOrangTua}
                errors={errors.namaOrangTua}
                touched={touched.namaOrangTua}
                onBlur={handleBlur('namaOrangTua')}
                onChangeText={handleChange('namaOrangTua')} />

              <Input
                isHeight
                number
                title='Nomor Telepon'
                value={values.noTelepon}
                errors={errors.noTelepon}
                touched={touched.noTelepon}
                onBlur={handleBlur('noTelepon')}
                onChangeText={handleChange('noTelepon')} />

              <Input
                isHeight
                title='Alamat'
                value={values.alamat}
                errors={errors.alamat}
                touched={touched.alamat}
                onBlur={handleBlur('alamat')}
                onChangeText={handleChange('alamat')} />

              <Input
                isHeight
                email
                title='Email'
                value={values.email}
                errors={errors.email}
                touched={touched.email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')} />

              <Input
                isHeight
                icon
                securePassword={securePassword}
                title='Password'
                value={values.password}
                errors={errors.password}
                touched={touched.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                onPress={onPressSecurePassword} />

              <Space height={30} />

              <Button
                red
                title='Selanjutnya'
                onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  )
}

export default FormRegister