import { ToastAndroid } from 'react-native'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'

import * as Types from './ActionTypes'

export const isLoading = (loading) => ({
  type: Types.IS_LOADING,
  isLoading: loading
})

const login = ({ userUID, user }) => ({
  type: Types.LOGIN_USER,
  data: {
    userUID,
    user
  }
})

const formRegister = ({ formRegister }) => ({
  type: Types.SET_FORM_REGISTER,
  data: {
    formRegister
  }
})

const register = ({ userUID, user, diagnosa, tsukamoto, dataForwardChaining }) => ({
  type: Types.REGISTER_USER,
  data: {
    userUID,
    user,
    diagnosa,
    tsukamoto,
    dataForwardChaining
  }
})

export const setIsDiagnosa = (diagnosa) => ({
  type: Types.SET_IS_DIAGNOSA,
  isDiagnosa: diagnosa
})

export const setFormRegister = (data, onPressNext) => async (dispatch) => {
  try {
    dispatch(isLoading(true))

    let emails = []
    const responseCheckEmail = await database()
      .ref('/users')
      .once('value')

    const datas = responseCheckEmail.val()

    for (const key in responseCheckEmail.val()) {
      emails.push(datas[key].email.toLowerCase())
    }

    if (!emails.includes(data.email.toLowerCase())) {
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

    const responseUser = await database()
      .ref(`/users/${responseLogin.user.uid}`)
      .once('value')

    dispatch(setIsDiagnosa(true))
    dispatch(login({
      userUID: responseLogin.user.uid,
      user: responseUser.val()
    }))
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

export const registerUser = ({ namaAnak, diagnosa, tsukamoto, dataForwardChaining, navigate }) => async (dispatch, getState) => {
  try {
    dispatch(isLoading(true))

    const formRegister = getState().AuthStore.formRegister

    formRegister.level = 'user'
    formRegister.namaAnak = namaAnak

    const responseRegister = await auth().createUserWithEmailAndPassword(formRegister.email.toLowerCase(), formRegister.password)

    await database()
      .ref(`/users/${responseRegister.user.uid}`)
      .set({
        level: formRegister.level,
        namaOrangTua: formRegister.namaOrangTua,
        noTelepon: formRegister.noTelepon,
        alamat: formRegister.alamat,
        email: formRegister.email,
        namaAnak: formRegister.namaAnak,
      })

    await database()
      .ref(`/hasilDiagnosa/${responseRegister.user.uid}`)
      .set({
        diagnosa,
        nilaiTsukamoto: tsukamoto.defuzifikasi
      })

    dispatch(register({
      userUID: responseRegister.user.uid,
      user: formRegister,
      diagnosa,
      tsukamoto,
      dataForwardChaining
    }))

    navigate('Diagnosa')
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