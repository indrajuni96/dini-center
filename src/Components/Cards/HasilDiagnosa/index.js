import React from 'react'
import {
  View
} from 'react-native'

import Styles from './Styles'
import Input from '../../Inputs'

const CardHasilDiagnosa = ({ item }) => {
  return (
    <View style={Styles.content}>
      <Input
        isHeight
        editable
        title={item.namaGejala}
        value={item.nilai ? item.nilai : ''} />
    </View>
  )
}

export default CardHasilDiagnosa