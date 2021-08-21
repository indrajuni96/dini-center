import React, { useState, useCallback } from 'react'
import {
  Text,
  View,
  Keyboard,
  FlatList,
  SafeAreaView,
  ToastAndroid
} from 'react-native'
import { useDispatch } from 'react-redux'
import { Picker } from '@react-native-picker/picker'
import database from '@react-native-firebase/database'
import { useFocusEffect } from '@react-navigation/native'
import { useNetInfo } from "@react-native-community/netinfo";

import Styles from './Styles'
import Space from '../../Space'
import Input from '../../Inputs'
import Button from '../../Buttons/Button'
import CardDiagnosa from '../../Cards/Diagnosa'
import { colors } from '../../../Utils'
import { setMetode } from '../../../Redux/Actions/Metode'

const FormDiagnosa = ({ navigate }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [namaAnak, setNamaAnak] = useState('')
  const [selectPicker, setSelectPicker] = useState('')
  const [messageError, setMessageError] = useState('')
  const [dataUser, setDataUser] = useState([])
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
      let dataUser = []

      const responseGejala = await database()
        .ref('/gejala')
        .orderByValue('kode')
        .once('value')
      const responseUser = await database()
        .ref('/users')
        .once('value')

      const datas = responseGejala.val()
      const datasUser = responseUser.val()

      for (const key in responseGejala.val()) {
        data.push({
          idGejala: key,
          kode: datas[key].kode,
          namaGejala: datas[key].namaGejala,
          batasBawah: datas[key].batasBawah,
          batasAtas: datas[key].batasAtas,
          select: false,
          nilai: '',
          selectPicker: 30,
          itemPicker: [
            {
              label: 'Sedikit yakin',
              value: 30
            },
            {
              label: 'Cukup yakin',
              value: 50
            },
            {
              label: 'Yakin',
              value: 60
            },
            {
              label: 'Sangat yakin',
              value: 100
            }
          ]
        })
      }

      for (const key in responseUser.val()) {
        if (datasUser[key].level == 'admin') {
          dataUser.push({
            idUser: key,
            namaUser: datasUser[key].namaOrangTua
          })
        }
      }

      data.sort((a, b) => (a.kode > b.kode) ? 1 : -1)

      setDataUser(dataUser)
      setDataDiagnosa(data)
      setSelectPicker(dataUser[0].idUser)
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
    dataFind.selectPicker = value

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
        data[i].nilai = 30
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
        dispatch(setMetode({ namaAnak, selectPicker, formDiagnosa: dataDiagnosa, navigate }))
      } else {
        setMessageError('Wajib Diisi')
      }
    } else {
      ToastAndroid.show('Tidak ada koneksi internet', ToastAndroid.SHORT);
    }
  }

  const listFooterComponent = () => (
    <>
      <Button
        red
        title='Daftar'
        onPress={onPressDaftar} />

      <Space height={10} />
    </>
  )

  if (isLoading) {
    return (
      <View />
    )
  }

  return (
    <View style={Styles.contentForm}>
      <Input
        isHeight
        title='Nama Anak'
        value={namaAnak}
        errors={messageError}
        touched={messageError}
        onKeyPress={() => namaAnak !== '' ? setMessageError('') : setMessageError('Wajib Diisi')}
        onChangeText={(text) => setNamaAnak(text)} />

      <Text style={Styles.textTitle}>Konsultan</Text>

      <View style={Styles.wrapperPicker}>
        <Picker
          mode="dropdown"
          dropdownIconColor={colors.silver}
          selectedValue={selectPicker}
          onValueChange={(value) => setSelectPicker(value)}>
          {dataUser.map((item, index) => (
            <Picker.Item
              style={Styles.textPicker}
              key={item.idUser}
              label={item.namaUser}
              value={item.idUser} />
          ))}
        </Picker>
      </View>

      <Space height={10} />

      <Text style={Styles.textKuesioner}>Kuesioner</Text>

      <SafeAreaView style={Styles.safeAreaView}>
        <FlatList
          data={dataDiagnosa}
          renderItem={({ item }) => (
            <CardDiagnosa
              item={item}
              onPressIya={() => onPressIya(item.kode)}
              onPressTidak={() => onPressTidak(item.kode)}
              onChangeInputNilai={onChangeInputNilai} />)}
          keyExtractor={item => item.kode}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={listFooterComponent} />
      </SafeAreaView>
    </View>
  )
}

export default FormDiagnosa