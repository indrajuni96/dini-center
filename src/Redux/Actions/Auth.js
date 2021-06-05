import { ToastAndroid } from 'react-native'
import auth from '@react-native-firebase/auth'

import * as Types from './ActionTypes'

const isLoading = (loading) => ({
  type: Types.IS_LOADING,
  isLoading: loading
})

const login = ({ userUID }) => ({
  type: Types.LOGIN_USER,
  data: {
    userUID
  }
})

export const setFormRegister = (data) => ({
  type: Types.SET_FORM_REGISTER,
  data
})

export const loginUser = (data) => async (dispatch) => {
  try {
    dispatch(isLoading(true))

    const responseLogin = await auth().signInWithEmailAndPassword(data.email.toLowerCase(), data.password)

    dispatch(login({ userUID: responseLogin.user.uid }))
  } catch (error) {
    console.log(error)

    let errorMessage = 'Terjadi kesalahan!!!'

    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') errorMessage = 'Email atau Password Anda salah'

    if (error.code === 'auth/network-request-failed') errorMessage = 'Tidak ada koneksi internet'

    ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
  } finally {
    dispatch(isLoading(false))
  }
}