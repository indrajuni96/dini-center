import React, { useState } from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'
import Space from '../../Space'
import Input from '../../Inputs'
import Button from '../../Buttons/Button'
import Radio from '../../Buttons/Radio'

const FormDiagnosa = ({ onPress }) => {
  const [G1, setG1] = useState(false)
  const [G2, setG2] = useState(false)
  const [G3, setG3] = useState(false)
  const [G4, setG4] = useState(false)

  return (
    <>
      <View>
        <Input
          title='Nama Anak'
          error='Wajib Diisi'
          onChangeText={() => console.log('on change text')} />
      </View>

      <View>
        <Text style={Styles.text}>Menolak dipeluk ?</Text>

        <View style={Styles.wrapperRadio}>
          <Radio
            select={G1 ? true : false}
            onPress={() => setG1(true)} />

          <Radio
            isDefault
            select={!G1 ? true : false}
            onPress={() => setG1(false)} />
        </View>
      </View>

      <Space height={20} />

      <View>
        <Text style={Styles.text}>Saat bermain bila didekati malah menjauh ?</Text>

        <View style={Styles.wrapperRadio}>
          <Radio
            select={G2 ? true : false}
            onPress={() => setG2(true)} />

          <Radio
            isDefault
            select={!G2 ? true : false}
            onPress={() => setG2(false)} />
        </View>
      </View>

      <Space height={20} />

      <View>
        <Text style={Styles.text}>Bicara monoton seperti robot ?</Text>

        <View style={Styles.wrapperRadio}>
          <Radio
            select={G3 ? true : false}
            onPress={() => setG3(true)} />

          <Radio
            isDefault
            select={!G3 ? true : false}
            onPress={() => setG3(false)} />
        </View>
      </View>

      <Space height={20} />

      <View>
        <Text style={Styles.text}>Kata-kata yang tidak dapat mengerti orang lain ?</Text>

        <View style={Styles.wrapperRadio}>
          <Radio
            select={G4 ? true : false}
            onPress={() => setG4(true)} />

          <Radio
            isDefault
            select={!G4 ? true : false}
            onPress={() => setG4(false)} />
        </View>
      </View>

      <Space height={30} />

      <Button
        red
        title='Daftar'
        onPress={onPress} />
    </>
  )
}

export default FormDiagnosa