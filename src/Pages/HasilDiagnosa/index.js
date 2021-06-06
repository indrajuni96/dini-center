import React from 'react'
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

const HasilDiagnosa = () => {
  const dispacth = useDispatch()

  const namaAnak = useSelector(state => state.AuthStore.formRegister.namaAnak)

  return (
    <View style={Styles.container}>
      <Header
        isDefault
        title='Hasil Diagnosa' />

      <Space height={40} />

      <View style={Styles.contentForm}>
        <Input
          editable
          title='Nama Anak'
          value={namaAnak} />

        <Input
          editable
          title='Hasil Diagnosa'
          value='Interaksi Sosial     94%' />

        <Space height={30} />

        <Button
          red
          title='Dashboard'
          onPress={() => dispacth(setIsDiagnosa(true))} />
      </View>
    </View>
  )
}

export default HasilDiagnosa