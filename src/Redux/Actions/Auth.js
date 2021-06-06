import { ToastAndroid } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import * as Types from './ActionTypes'

const isLoading = (loading) => ({
  type: Types.IS_LOADING,
  isLoading: loading
})

const checkEmail = (email) => ({
  type: Types.CEK_EMAIL,
  data: {
    email
  }
})

const login = ({ userUID }) => ({
  type: Types.LOGIN_USER,
  data: {
    userUID
  }
})

const formRegister = ({ formRegister }) => ({
  type: Types.SET_FORM_REGISTER,
  data: {
    formRegister
  }
})

const register = ({ userUID, formRegister }) => ({
  type: Types.REGISTER_USER,
  data: {
    userUID,
    formRegister
  }
})

export const setIsDiagnosa = (diagnosa) => ({
  type: Types.SET_IS_DIAGNOSA,
  isDiagnosa: diagnosa
})

export const setFormRegister = (data, onPressNext) => async (dispatch) => {
  try {
    dispatch(isLoading(true))

    const responseChekEmail = await firestore().collection('users')
      .where('email', '==', data.email)
      .get()

    if (responseChekEmail.docs.length == 0) {
      dispatch(formRegister({ formRegister: data }))
      onPressNext()
    } else {
      ToastAndroid.show('Email sudah digunakan', ToastAndroid.SHORT);
    }

  } catch (error) {
    console.log(error)
    ToastAndroid.show(error, ToastAndroid.SHORT);
  } finally {
    dispatch(isLoading(false))
  }
}

export const clearFormRegister = () => ({
  type: Types.CLEAR_FORM_REGISTER
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

export const registerUser = (data) => async (dispatch, getState) => {
  try {
    dispatch(isLoading(true))

    const formRegister = getState().AuthStore.formRegister

    formRegister.namaAnak = data.namaAnak

    const responseRegister = await auth().createUserWithEmailAndPassword(formRegister.email.toLowerCase(), formRegister.password)

    await firestore().collection('users')
      .doc(responseRegister.user.uid)
      .set({
        namaOrangTua: formRegister.namaOrangTua,
        noTelepon: formRegister.noTelepon,
        alamat: formRegister.alamat,
        email: formRegister.email,
        namaAnak: data.namaAnak,
      })

    dispatch(register({
      userUID: responseRegister.user.uid,
      formRegister
    }))
  } catch (error) {
    console.log(error)
    ToastAndroid.show(error, ToastAndroid.SHORT);
  } finally {
    dispatch(isLoading(false))
  }
}

export const logoutUser = () => ({
  type: Types.LOGOUT_USER
})