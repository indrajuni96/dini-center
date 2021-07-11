import React, { useState } from 'react'
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
import {
  Space,
  Input,
  Button,
  Header,
  Loading
} from '../../Components'
import { loginUser } from '../../Redux/Actions/Auth'

const Login = ({ navigation: { goBack } }) => {
  const [securePassword, setSecurePassword] = useState(true);

  const dispatch = useDispatch()

  const { isConnected } = useNetInfo()

  const { isLoading } = useSelector(state => ({
    isLoading: state.AuthStore.isLoading
  }))

  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object().shape({
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
      dispatch(loginUser(values))
    } else {
      ToastAndroid.show('Tidak ada koneksi internet', ToastAndroid.SHORT);
    }
  }

  return (
    <>
      <View style={Styles.container}>
        <Header
          title='Login'
          onPress={() => goBack()} />

        <Space height={30} />

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
                    email
                    isHeight
                    title='Email'
                    value={values.email}
                    errors={errors.email}
                    touched={touched.email}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')} />

                  <Input
                    icon
                    isHeight
                    securePassword={securePassword}
                    title='Password'
                    value={values.password}
                    errors={errors.password}
                    touched={touched.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    onPress={() => setSecurePassword(state => !state)} />

                  <Space height={30} />

                  <Button
                    red
                    title='Masuk'
                    onPress={handleSubmit} />
                </>
              )}
            </Formik>
          </View>
        </ScrollView>

        {isLoading ? <Loading /> : null}
      </View>
    </>
  )
}

export default Login