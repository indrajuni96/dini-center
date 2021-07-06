import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  FlatList,
  SafeAreaView
} from 'react-native'
import { useSelector } from 'react-redux'
import database from '@react-native-firebase/database'
import { useFocusEffect } from '@react-navigation/native'

import Styles from './Styles'
import {
  Space,
  Header,
  Input,
  Loading,
  CardHasilDiagnosa
} from '../../Components'

const HasilDiagnosa = ({ navigation: { goBack } }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [nilaiTsukamoto, setNilaiTsukamoto] = useState('0')
  const [dataDiagnosa, setDataDiagnosa] = useState([])

  const userUID = useSelector((state) => state.AuthStore.userUID)

  useFocusEffect(useCallback(() => {
    loadData()
  }, []))

  const loadData = async () => {
    try {
      setIsLoading(true)

      let data = []
      const responseHasilDiagnosa = await database()
        .ref(`/hasilDiagnosa/${userUID}`)
        .once('value')

      const datas = responseHasilDiagnosa.val().diagnosa

      for (const key in responseHasilDiagnosa.val().diagnosa) {
        data.push({
          namaGejala: datas[key].namaGejala,
          nilai: datas[key].nilai
        })
      }

      setDataDiagnosa(data)
      setNilaiTsukamoto(responseHasilDiagnosa.val().nilaiTsukamoto.toFixed(2))
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={Styles.container}>
      <Header
        title='Hasil Diagnosa'
        onPress={() => goBack()} />

      <Space height={30} />

      {isLoading ? <Loading isDefault /> :
        <>
          <Input
            isHeight
            editable
            title='Hasil Fuzzy Tsukamoto'
            value={nilaiTsukamoto} />

          <Space height={5} />

          <View>
            <Text style={Styles.textKuesioner}>Kuesioner yang diisi</Text>
          </View>

          <Space height={5} />

          <SafeAreaView style={Styles.safeAreaView}>
            <FlatList
              data={dataDiagnosa}
              renderItem={({ item }) => (
                <CardHasilDiagnosa item={item} />
              )}
              keyExtractor={item => item.namaGejala}
              showsVerticalScrollIndicator={false} />
          </SafeAreaView>

          <Space height={10} />
        </>}
    </View>
  )
}

export default HasilDiagnosa