import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  FlatList
} from 'react-native'
import { useSelector } from 'react-redux'
import database from '@react-native-firebase/database'
import { useFocusEffect } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'

import Styles from './Styles'
import { BoySvg } from '../../Assets'
import {
  jam,
  colors,
  tanggal,
  BackHandlerAction
} from '../../Utils'
import {
  Space,
  ListHistory
} from '../../Components'

const Home = ({ navigation: { isFocused, navigate } }) => {
  BackHandlerAction(isFocused)

  const { userUID, user } = useSelector((state) => ({
    userUID: state.AuthStore.userUID,
    user: state.AuthStore.user
  }))

  const [dataRiwayatGame, setDataRiwayatGame] = useState([])

  useFocusEffect(useCallback(() => {
    loadData()
  }, []))

  const loadData = async () => {
    try {
      let data = []
      const responseRiwayatGame = await database()
        .ref('/riwayatGame')
        .once('value')

      const datas = responseRiwayatGame.val()

      for (const key in responseRiwayatGame.val()) {
        if (datas[key].idUser == userUID && data.length <= 4) {
          data.push({
            key,
            namaGame: datas[key].namaGame,
            status: datas[key].status,
            waktu: datas[key].waktu
          })
        }
      }

      // data.sort((a, b) => (a.waktu < b.waktu) ? -1 : 1)

      setDataRiwayatGame(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.contentHeader}>
        <View style={Styles.wrapperDinicenter}>
          <Text style={Styles.textDini}>Dini</Text>
          <Text style={Styles.textCenter}>center</Text>
        </View>

        <BoySvg width={45} height={45} />
      </View>

      <Space height={40} />

      <View style={Styles.contentCard}>
        <View style={Styles.cardHeader}>
          <Text style={Styles.textSelamat}>
            {jam()}
          </Text>

          <Pressable onPress={() => navigate('Profile')}>
            <FontAwesome name="user-circle-o" size={30} color={colors.silver} />
          </Pressable>
        </View>

        <Text style={Styles.textName}>
          {user ? user.namaAnak : ''}
        </Text>

        <Space height={40} />

        <View style={Styles.contentDate}>
          <View style={{ marginBottom: 3 }}>
            <MaterialIcons name="access-time" size={15} color={colors.silver} />
          </View>

          <Space width={5} />

          <Text style={Styles.textRegular15}>
            {tanggal('d MMMM YYYY')}
          </Text>
        </View>
      </View>

      <Space height={80} />

      <View style={Styles.contentHistory}>
        <View style={Styles.historyHeader}>
          <Text style={Styles.textSemiBold18}>
            History
          </Text>

          <Pressable onPress={() => navigate('History')}>
            <Text style={Styles.textRegular15}>
              lihat semua
            </Text>
          </Pressable>
        </View>

        <Space height={20} />

        <SafeAreaView>
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
      </View>
    </View>
  )
}

export default Home