import React, { useState, useCallback } from 'react'
import {
  View,
  Keyboard,
  FlatList,
  ToastAndroid,
  ActivityIndicator
} from 'react-native'
import { useDispatch } from 'react-redux'
import database from '@react-native-firebase/database'
import { useFocusEffect } from '@react-navigation/native'
import { useNetInfo } from "@react-native-community/netinfo";

import Styles from './Styles'
import Space from '../../Space'
import Input from '../../Inputs'
import Loading from '../../Loading'
import Button from '../../Buttons/Button'
import CardDiagnosa from '../../Cards/Diagnosa'
import { setMetode } from '../../../Redux/Actions/Metode'

const FormDiagnosa = ({ navigate }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [namaAnak, setNamaAnak] = useState('')
  const [messageError, setMessageError] = useState('')
  const [dataDiagnosa, setDataDiagnosa] = useState([])

  const dispatch = useDispatch()

  const { isConnected } = useNetInfo()

  useFocusEffect(useCallback(() => {
    loadData()
  }, []))

  const loadData = async () => {
    try {
      setIsLoading(true)

      let data = []
      const responseGejala = await database()
        .ref('/gejala')
        .orderByValue('kode')
        .once('value')

      const datas = responseGejala.val()

      for (const key in responseGejala.val()) {
        data.push({
          idGejala: key,
          kode: datas[key].kode,
          namaGejala: datas[key].namaGejala,
          batasBawah: datas[key].batasBawah,
          batasAtas: datas[key].batasAtas,
          select: false,
          nilai: ''
        })
      }

      data.sort((a, b) => (a.kode > b.kode) ? 1 : -1)

      setDataDiagnosa(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const onChangeInputNilai = (item, value) => {
    let newData
    let datas = dataDiagnosa

    const dataFind = datas.find(data => data.kode == item.kode)
    dataFind.nilai = value

    datas = datas.filter(data => data.kode !== item.kode)

    newData = [...datas, dataFind]
    newData.sort((a, b) => a.kode > b.kode ? 1 : -1)

    setDataDiagnosa(newData)
  }

  const onPressIya = (selectKode) => {
    let data = dataDiagnosa

    for (let i = 0; i < data.length; i++) {
      if (data[i].kode == selectKode) {
        data[i].select = true
      }
    }

    setDataDiagnosa([...data])
  }

  const onPressTidak = (selectKode) => {
    let newData
    let datas = dataDiagnosa

    const dataFind = datas.find(data => data.kode == selectKode)
    dataFind.select = false
    dataFind.nilai = ''

    datas = datas.filter(data => data.kode !== selectKode)

    newData = [...datas, dataFind]
    newData.sort((a, b) => a.kode > b.kode ? 1 : -1)

    setDataDiagnosa(newData)
  }

  const onPressDaftar = () => {
    Keyboard.dismiss()

    if (isConnected) {
      if (namaAnak !== '') {
        dispatch(setMetode({ namaAnak, formDiagnosa: dataDiagnosa, navigate }))
      } else {
        setMessageError('Wajib Diisi')
      }
    } else {
      ToastAndroid.show('Tidak ada koneksi internet', ToastAndroid.SHORT);
    }
  }

  // if (isLoading) {
  //   return (
  //     <Loading isDefault />
  //   )
  // }

  return (
    <View style={Styles.contentForm}>
      <View>
        <Input
          isHeight
          title='Nama Anak'
          value={namaAnak}
          errors={messageError}
          touched={messageError}
          onKeyPress={() => namaAnak !== '' ? setMessageError('') : setMessageError('Wajib Diisi')}
          onChangeText={(text) => setNamaAnak(text)} />
      </View>

      <FlatList
        data={dataDiagnosa}
        renderItem={({ item }) => (
          <CardDiagnosa
            item={item}
            select={item.select}
            title={item.namaGejala}
            titleInput={`Nilai (${item.batasBawah} - ${item.batasAtas})`}
            onPressIya={() => onPressIya(item.kode)}
            onPressTidak={() => onPressTidak(item.kode)}
            onChangeInputNilai={onChangeInputNilai} />)}
        keyExtractor={item => item.kode}
        showsVerticalScrollIndicator={false} />

      <Space height={10} />

      <Button
        red
        title='Daftar'
        onPress={onPressDaftar} />
    </View>
  )
}

export default FormDiagnosa