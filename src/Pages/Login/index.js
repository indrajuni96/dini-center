import React, { useState } from 'react'
import {
  View,
  ScrollView
} from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'

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
    setIsLoading(true)
    console.log(values)

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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}>
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <>
                  <Input
                    email
                    title='Email'
                    value={values.email}
                    errors={errors.email}
                    touched={touched.email}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')} />

                  <Input
                    icon
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

      </View>

      {isLoading ? <Loading /> : null}
    </>
  )
}

export default Login