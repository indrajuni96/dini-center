import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  FlatList,
  SafeAreaView
} from 'react-native'
import { v4 as uuidv4 } from 'uuid'
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
  const [dataForwardChaining, setDataForwardChaining] = useState('')

  const { userUID } = useSelector((state) => ({
    userUID: state.AuthStore.userUID
  }))

  useFocusEffect(useCallback(() => {
    loadData()
  }, []))

  const loadData = async () => {
    try {
      setIsLoading(true)

      let dataPenyakit = []
      let dataFuzzyTsukamoto = []

      const responseHasilDiagnosa = await database()
        .ref(`/hasilDiagnosa/${userUID}`)
        .once('value')

      const responsePenyakit = await database()
        .ref('/penyakit')
        .once('value')

      const datas = responseHasilDiagnosa.val()
      const datasPenyakit = responsePenyakit.val()

      for (const key in responsePenyakit.val()) {
        dataPenyakit.push({
          idPenyakit: key,
          namaPenyakit: datasPenyakit[key].namaPenyakit,
          batasAtas: datasPenyakit[key].batasAtas,
          batasBawah: datasPenyakit[key].batasBawah
        })
      }

      for (const key in responseHasilDiagnosa.val()) {
        if (datas[key].metode == 'forward chaining') {
          const findPenyakit = dataPenyakit.find((state) => state.idPenyakit == datas[key].idPenyakit)

          setDataForwardChaining(findPenyakit.namaPenyakit)
        }

        if (datas[key].metode == 'fuzzy tsukamoto') {
          for (let i = 0; i < datas[key].diagnosa.length; i++) {
            dataFuzzyTsukamoto.push({
              key: uuidv4(),
              namaGejala: datas[key].diagnosa[i].namaGejala,
              nilaiInput: datas[key].diagnosa[i].nilaiInput
            })
          }

          setDataDiagnosa(dataFuzzyTsukamoto)
          setNilaiTsukamoto(datas[key].nilaiTsukamoto)
        }
      }
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
            title='Hasil Forward Chaining'
            value={dataForwardChaining ? dataForwardChaining : ''} />

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
              renderItem={({ item }) => <CardHasilDiagnosa item={item} />}
              keyExtractor={item => item.key}
              showsVerticalScrollIndicator={false} />
          </SafeAreaView>

          <Space height={10} />
        </>}
    </View>
  )
}

export default HasilDiagnosa