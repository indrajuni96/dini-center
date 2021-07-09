import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Styles from './Styles'
import {
  Space,
  Input,
  Header,
  Button
} from '../../Components'
import { setIsDiagnosa } from '../../Redux/Actions/Auth'
import { BackHandlerNotIsFocusedAction } from '../../Utils'

const Diagnosa = () => {
  const dispatch = useDispatch()

  const { namaAnak, diagnosa, tsukamoto, forwardChaining } = useSelector(state => ({
    namaAnak: state.AuthStore.formRegister.namaAnak,
    diagnosa: state.AuthStore.diagnosa,
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

        <Space height={30} />

        <Button
          red
          title='Dashboard'
          onPress={() => dispatch(setIsDiagnosa(true))} />
      </View>
    </View>
  )
}

export default Diagnosa