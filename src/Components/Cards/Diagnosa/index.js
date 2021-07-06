import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'
import Radio from '../../Buttons/Radio'
import Input from '../../Inputs'

const CardDiagnosa = ({ item, title, titleInput, select, onPressIya, onPressTidak, onChangeInputNilai }) => {
  return (
    <View style={Styles.content}>
      <Text style={Styles.text}>{item.namaGejala}</Text>

      <View style={Styles.wrapperRadio}>
        <Radio
          select={item.select ? true : false}
          onPress={onPressIya} />

        <Radio
          isDefault
          select={!item.select ? true : false}
          onPress={onPressTidak} />

        <Input
          number
          title={titleInput}
          editable={!select}
          value={item.nilai}
          onChangeText={(text) => onChangeInputNilai(item, text)} />
      </View>
    </View>
  )
}

export default CardDiagnosa