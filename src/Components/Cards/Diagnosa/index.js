import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { Picker } from '@react-native-picker/picker'

import Styles from './Styles'
import Radio from '../../Buttons/Radio'
import Input from '../../Inputs'
import { colors } from '../../../Utils'

const CardDiagnosa = ({ item, onPressIya, onPressTidak, onChangeInputNilai }) => {
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

        {/* <Input
          number
          title={`Nilai (${item.batasBawah} - ${item.batasAtas})`}
          editable={!item.select}
          value={item.nilai}
          onChangeText={(text) => onChangeInputNilai(item, text)} /> */}

        <View style={Styles.wrapperPicker}>
          <Picker
            mode="dropdown"
            enabled={item.select}
            dropdownIconColor={colors.silver}
            selectedValue={item.selectPicker}
            onValueChange={(value) => onChangeInputNilai(item, value)}>
            {
              item.select ?
                item.itemPicker.map((item, index) => (
                  <Picker.Item
                    key={item.value.toString()}
                    label={item.label}
                    value={item.value}
                    style={Styles.text} />
                ))
                : <Picker.Item
                  label='Pilih'
                  value='Pilih'
                  style={Styles.text} />
            }
          </Picker>
        </View>

      </View>
    </View >
  )
}

export default CardDiagnosa