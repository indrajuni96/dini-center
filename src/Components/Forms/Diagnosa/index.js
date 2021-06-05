import React, { useState, useCallback } from 'react'
import {
  View,
  FlatList
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import Styles from './Styles'
import Space from '../../Space'
import Input from '../../Inputs'
import Button from '../../Buttons/Button'
import CardDiagnosa from '../../Cards/Diagnosa'
import { DataDiagnosa } from '../../../Utils'

const FormDiagnosa = ({ onPress }) => {
  const [namaAnak, setNamaAnak] = useState('')
  const [dataDiagnosa, setDataDiagnosa] = useState([])

  useFocusEffect(useCallback(() => {
    loadData()
  }, []))

  const loadData = () => {
    let data = []

    for (let i = 0; i < DataDiagnosa.length; i++) {
      data.push({
        kode: DataDiagnosa[i].kode,
        namaGejala: DataDiagnosa[i].namaGejala,
        select: false
      })
    }

    setDataDiagnosa(data)
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

    datas = datas.filter(data => data.kode !== selectKode)

    newData = [...datas, dataFind]
    newData.sort((a, b) => a.kode > b.kode ? 1 : -1)

    setDataDiagnosa(newData)
  }

  return (
    <View style={Styles.contentForm}>
      <View>
        <Input
          title='Nama Anak'
          error='Wajib Diisi'
          value={namaAnak}
          onChangeText={(text) => setNamaAnak(text)} />
      </View>

      <FlatList
        data={dataDiagnosa}
        renderItem={({ item }) => (
          <CardDiagnosa
            select={item.select}
            title={item.namaGejala}
            onPressIya={() => onPressIya(item.kode)}
            onPressTidak={() => onPressTidak(item.kode)} />)}
        keyExtractor={item => item.kode} />

      <Space height={10} />

      <Button
        red
        title='Daftar'
        onPress={onPress} />
    </View>
  )
}

export default FormDiagnosa