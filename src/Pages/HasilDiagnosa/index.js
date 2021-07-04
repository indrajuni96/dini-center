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

const HasilDiagnosa = () => {
  const dispatch = useDispatch()

  const { namaAnak, diagnosa, tsukamoto } = useSelector(state => ({
    namaAnak: state.AuthStore.formRegister.namaAnak,
    diagnosa: state.AuthStore.diagnosa,
    tsukamoto: state.AuthStore.tsukamoto
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
          title='Hasil Diagnosa'
          value={tsukamoto.defuzifikasi.toString()} />

        <Space height={30} />

        <Button
          red
          title='Dashboard'
          onPress={() => dispatch(setIsDiagnosa(true))} />
      </View>
    </View>
  )
}

export default HasilDiagnosa