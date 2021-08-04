import React from 'react'
import {
  View
} from 'react-native'

import Styles from './Styles'
import Input from '../../Inputs'

const CardHasilDiagnosa = ({ item }) => {
  let inputValue = ''

  if (item.nilaiInput == 30) {
    inputValue = 'Sedikit yakin'
  } else if (item.nilaiInput == 50) {
    inputValue = 'Cukup yakin'
  } else if (item.nilaiInput == 60) {
    inputValue = 'Yakin'
  } else {
    inputValue = 'Sangat yakin'
  }

  return (
    <View style={Styles.content}>
      <Input
        isHeight
        editable
        title={item.namaGejala}
        value={inputValue} />
    </View>
  )
}

export default CardHasilDiagnosa