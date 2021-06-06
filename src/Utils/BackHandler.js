import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { BackHandler, ToastAndroid } from 'react-native'

export const BackHandlerAction = (isFocused) => {
  useFocusEffect(
    React.useCallback(() => {
      let countClick = 0

      const backAction = () => {
        if (isFocused) {
          if (countClick === 0) {
            countClick++

            ToastAndroid.show("Tekan sekali lagi untuk keluar", ToastAndroid.SHORT)
          } else if (countClick === 1) {
            BackHandler.exitApp()
          }

          setTimeout(() => {
            countClick = 0
          }, 1500)
        }

        return true
      }

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      )

      return () => {
        backHandler.remove()
      }
    }, [])
  )
}