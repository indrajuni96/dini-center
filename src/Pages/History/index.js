import React, { useState, useCallback } from 'react'
import {
  View,
  FlatList,
  SafeAreaView,
} from 'react-native'
import { useSelector } from 'react-redux'
import database from '@react-native-firebase/database'
import { useFocusEffect } from '@react-navigation/native'

import Styles from './Styles'
import { BackHandlerAction } from '../../Utils'
import {
  Space,
  Header,
  Loading,
  ListHistory
} from '../../Components'

const History = ({ navigation: { isFocused } }) => {
  BackHandlerAction(isFocused)

  const { userUID, user } = useSelector((state) => ({
    userUID: state.AuthStore.userUID,
    user: state.AuthStore.user
  }))

  const [isLoading, setIsLoading] = useState(false)
  const [dataRiwayatGame, setDataRiwayatGame] = useState([])

  useFocusEffect(useCallback(() => {
    loadData()
  }, []))

  const loadData = async () => {
    try {
      setIsLoading(true)

      let data = []
      const responseRiwayatGame = await database()
        .ref('/riwayatGame')
        .once('value')

      const datas = responseRiwayatGame.val()

      for (const key in responseRiwayatGame.val()) {
        if (datas[key].idUser == userUID) {
          data.push({
            key,
            namaGame: datas[key].namaGame,
            status: datas[key].status
          })
        }
      }

      // data.sort((a, b) => (a.waktu < b.waktu) ? -1 : 1)

      setDataRiwayatGame(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={Styles.container}>
      <Header
        isDefault
        title='History' />

      <Space height={30} />

      {isLoading ? <Loading isDefault /> :
        <SafeAreaView style={Styles.safeAreaView}>
          <FlatList
            data={dataRiwayatGame}
            renderItem={({ item }) => (
              <ListHistory
                disabled
                item={item} />
            )}
            keyExtractor={item => item.key}
            showsVerticalScrollIndicator={false} />
        </SafeAreaView>
      }
    </View>
  )
}

export default History