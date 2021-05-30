import React from 'react'
import { View } from 'react-native'

import Styles from './Styles'
import {
  Space,
  Input,
  Header,
  Button
} from '../../Components'

const HasilDiagnosa = ({ navigation: { navigate } }) => {
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
          value='Nicolas' />

        <Input
          editable
          title='Hasil Diagnosa'
          value='Interaksi Sosial     94%' />

        <Space height={30} />

        <Button
          red
          title='Dashboard'
          onPress={() => console.log('dashboard')} />
      </View>
    </View>
  )
}

export default HasilDiagnosa