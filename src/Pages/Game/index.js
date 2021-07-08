import React, { useState, useCallback } from 'react'
import {
  View,
  FlatList,
  SafeAreaView
} from 'react-native'
import database from '@react-native-firebase/database'
import { useFocusEffect } from '@react-navigation/native'

import Styles from './Styles'
import { BackHandlerAction } from '../../Utils'
import {
  Space,
  Header,
  Loading,
  ListGame
} from '../../Components'

const Game = ({ navigation: { navigate, isFocused } }) => {
  BackHandlerAction(isFocused)

  const [isLoading, setIsLoading] = useState(false)
  const [dataGame, setDataGame] = useState([])

  useFocusEffect(useCallback(() => {
    loadData()
  }, []))

  const loadData = async () => {
    try {
      setIsLoading(true)

      let data = []
      const responseGame = await database()
        .ref('/game')
        .once('value')

      const datas = responseGame.val()

      for (const key in responseGame.val()) {
        data.push({
          key,
          namaGame: datas[key].namaGame
        })
      }

      setDataGame(data)
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
        title='Game' />

      <Space height={30} />

      {isLoading ? <Loading isDefault /> :
        <SafeAreaView style={Styles.safeAreaView}>
          <FlatList
            data={dataGame}
            renderItem={({ item }) => (
              <ListGame
                item={item}
                onPress={() => console.log('game')} />
            )}
            keyExtractor={item => item.key}
            showsVerticalScrollIndicator={false} />
        </SafeAreaView>}
    </View>
  )
}

export default Game