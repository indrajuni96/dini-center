import React, { useState, useEffect, useCallback } from 'react'
import {
  View,
  Text,
  Pressable,
  ToastAndroid
} from 'react-native'
import moment from 'moment'
import Tts from 'react-native-tts'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'
import Voice from '@react-native-community/voice';
import database from '@react-native-firebase/database'
import { useFocusEffect } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import IconIonicons from 'react-native-vector-icons/dist/Ionicons'

import Styles from './Styles'
import { colors } from '../../Utils'
import {
  Space,
  Header,
  Button
} from '../../Components'

const StartGame = ({ route, navigation: { goBack } }) => {
  const { item } = route.params

  const { userUID, user } = useSelector((state) => ({
    userUID: state.AuthStore.userUID,
    user: state.AuthStore.user
  }))

  const [isEnabled, setIsEnabled] = useState(false)

  useFocusEffect(useCallback(() => {
    initialVoice()

    Tts.getInitStatus().then(initialTts())
  }, []))

  useEffect(() => {
    return () => {
      Voice.destroy().then(Voice.removeAllListeners())
    }
  }, [])

  const initialTts = async () => {
    try {
      await Tts.setDefaultLanguage('id')
    } catch (error) {
      console.log(error)
    }
  }

  const initialVoice = () => {
    Voice.onSpeechStart = onSpeechStart
    Voice.onSpeechError = onSpeechError
    Voice.onSpeechResults = onSpeechResults
    Voice.onSpeechEnd = onSpeechEnd
  }

  const onSpeechStart = (e) => {
    // console.log(`onSpeechStart :`)
  }

  const onSpeechError = (e) => {
    setIsEnabled(false)
    ToastAndroid.show('Maaf, waktu sudah habis', ToastAndroid.SHORT);
  }

  const onSpeechResults = async (e) => {
    try {
      let isSuccess = false

      for (let i = 0; i < e.value.length; i++) {
        if (e.value[i].toLowerCase() == item.namaGame.toLowerCase()) {
          isSuccess = true
        }
      }

      if (user.level != 'admin') {
        await database()
          .ref(`/riwayatGame/${uuidv4()}`)
          .set({
            idUser: userUID,
            namaGame: item.namaGame,
            status: isSuccess ? 'Berhasil menggucapkan' : 'Tidak berhasil menggucapkan',
            waktu: moment().format('d-MM-YYYY_h:mm:ss')
          })
      }

      if (isSuccess) {
        ToastAndroid.show('Berhasil menggucapkan', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show('Tidak berhasil menggucapkan', ToastAndroid.SHORT);
      }

      setIsEnabled(false)
    } catch (error) {
      console.log(error)
    }
  }

  const onSpeechEnd = (e) => {
    // console.log('onSpeechEnd')
  }

  const onVoice = () => {
    Tts.stop()
    Tts.speak(item.namaGame)
  }

  const onMulai = async () => {
    try {
      setIsEnabled(true)

      await Voice.start('id')
    } catch (erorr) {
      console.log(error)
    }
  }

  return (
    <View style={Styles.container}>
      <Header
        title='Game'
        onPress={() => isEnabled ? null : goBack()} />

      <Space height={30} />

      <View style={Styles.contentCard}>
        <Space height={50} />

        <View style={[Styles.contentCircle, { borderColor: isEnabled ? colors.black : colors.silverLigth }]}>
          <FontAwesome name={isEnabled ? 'microphone' : 'microphone-slash'} size={30} color={isEnabled ? colors.red : colors.silverLigth} />
        </View>

        <Space height={50} />

        <View>
          <Text style={Styles.textGame}>{item.namaGame}</Text>
        </View>

        <View style={Styles.contentCircleSmall}>
          <Pressable
            disabled={isEnabled}
            style={Styles.pressable}
            android_ripple={Styles.ripple}
            onPress={onVoice}>
            <IconIonicons name="volume-medium" size={25} color="white" />
          </Pressable>
        </View>

        <Space height={10} />
      </View>

      <Space height={50} />

      <Button
        disabled={isEnabled}
        red={!isEnabled}
        title='Mulai'
        onPress={onMulai} />
    </View>
  )
}

export default StartGame