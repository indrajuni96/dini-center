import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { useSelector } from 'react-redux'
import database from '@react-native-firebase/database'
import { useFocusEffect } from '@react-navigation/native'

import Styles from './Styles'
import {
  Space,
  Header,
  Input,
  Loading
} from '../../Components'

const Informasi = ({ navigation: { goBack } }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [nilaiAnak, setNilaiAnak] = useState('0')
  const [dataPenyakit, setDataPenyakit] = useState({})

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
      let dataRiwayatGame = []

      const responseHasilDiagnosa = await database()
        .ref(`/hasilDiagnosa/${userUID}`)
        .once('value')

      const responseRiwayatGame = await database()
        .ref('/riwayatGame')
        .once('value')

      const responsePenyakit = await database()
        .ref('/penyakit')
        .once('value')

      const datas = responseHasilDiagnosa.val()
      const datasPenyakit = responsePenyakit.val()
      const datasRiwayatGame = responseRiwayatGame.val()

      for (const key in responsePenyakit.val()) {
        dataPenyakit.push({
          idPenyakit: key,
          namaPenyakit: datasPenyakit[key].namaPenyakit,
          tipeAutis: datasPenyakit[key].tipeAutis,
          penanganan: datasPenyakit[key].penanganan,
          batasAtas: datasPenyakit[key].batasAtas,
          batasBawah: datasPenyakit[key].batasBawah
        })
      }

      for (const key in responseHasilDiagnosa.val()) {
        if (datas[key].metode == 'forward chaining') {
          const findPenyakit = dataPenyakit.find((state) => state.idPenyakit == datas[key].idPenyakit)

          setDataPenyakit(findPenyakit)
        }
      }

      for (const key in responseRiwayatGame.val()) {
        if (datasRiwayatGame[key].idUser == userUID) {
          dataRiwayatGame.push({
            key,
            namaGame: datasRiwayatGame[key].namaGame,
            status: datasRiwayatGame[key].status
          })
        }
      }

      const countGameBerhasil = dataRiwayatGame.filter((riwayatGame) => riwayatGame.status == 'Berhasil menggucapkan')

      const resultCountGame = (countGameBerhasil.length / dataRiwayatGame.length * 100).toFixed(0)
      setNilaiAnak(resultCountGame)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={Styles.container}>
      <Header
        title='Informasi'
        onPress={() => goBack()} />

      <Space height={30} />

      {isLoading ? <Loading isDefault /> :
        <>
          <Input
            isHeight
            editable
            title='Diagnosa'
            value={dataPenyakit ? dataPenyakit.namaPenyakit : ''} />

          <View style={Styles.contentBorder}>
            <Text style={Styles.textTitle}>Penilaian Perkembangan Anak</Text>

            <Text style={Styles.text}>
              {nilaiAnak != 'NaN' ? nilaiAnak : '0'} %
            </Text>
          </View>

          <Space height={10} />

          <View>
            <Text style={Styles.textTitle}>Penanganan</Text>

            <Text style={Styles.text}>
              {dataPenyakit.penanganan ? dataPenyakit.penanganan : ''}
            </Text>
          </View>

          <Space height={10} />
        </>}
    </View>
  )
}

export default Informasi