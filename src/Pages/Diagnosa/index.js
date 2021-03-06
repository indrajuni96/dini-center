import React, { useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Styles from './Styles'
import {
  Space,
  Input,
  Header,
  Button,
  CardHasilDiagnosa
} from '../../Components'
import { setIsDiagnosa } from '../../Redux/Actions/Auth'
import { BackHandlerNotIsFocusedAction } from '../../Utils'

const Diagnosa = () => {
  const dispatch = useDispatch()

  const { namaAnak, tsukamoto, forwardChaining } = useSelector(state => ({
    namaAnak: state.AuthStore.formRegister.namaAnak,
    tsukamoto: state.AuthStore.tsukamoto,
    forwardChaining: state.AuthStore.forwardChaining
  }))

  BackHandlerNotIsFocusedAction()

  useEffect(() => {
    return () => {
      console.log('will un mount')
      // dispatch(setIsDiagnosa(true))
    }
  }, [])

  return (
    <View style={Styles.container}>
      <Header
        isDefault
        title='Hasil Diagnosa' />

      <Space height={30} />

      <View style={Styles.contentForm}>
        <Input
          isHeight
          editable
          title='Nama Anak'
          value={namaAnak} />

        <Input
          isHeight
          editable
          title='Hasil Fuzzy Tsukamoto'
          value={tsukamoto.defuzifikasi.toString()} />

        <Input
          isHeight
          editable
          title='Hasil Forward Chaining'
          value={forwardChaining.namaPenyakit ? forwardChaining.namaPenyakit : ''} />

        <Space height={5} />

        <View>
          <Text style={Styles.textKuesioner}>Kuesioner yang diisi</Text>
        </View>

        <Space height={5} />

        <SafeAreaView style={Styles.safeAreaView}>
          <FlatList
            data={tsukamoto.fuzzifikasi}
            renderItem={({ item }) => <CardHasilDiagnosa item={item} />}
            keyExtractor={item => item.kode}
            showsVerticalScrollIndicator={false} />
        </SafeAreaView>

        <Space height={10} />

        <Button
          red
          title='Dashboard'
          onPress={() => dispatch(setIsDiagnosa(true))} />

        <Space height={5} />
      </View>
    </View>
  )
}

export default Diagnosa