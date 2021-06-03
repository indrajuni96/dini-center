import React, { useState } from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'
import Space from '../../Space'
import Input from '../../Inputs'
import Button from '../../Buttons/Button'
import CardDiagnosa from '../../Cards/Diagnosa'

const FormDiagnosa = ({ onPress }) => {
  const [G1, setG1] = useState(false)
  const [G2, setG2] = useState(false)
  const [G3, setG3] = useState(false)
  const [G4, setG4] = useState(false)

  const [namaAnak, setNamaAnak] = useState('')

  return (
    <>
      <View>
        <Input
          title='Nama Anak'
          error='Wajib Diisi'
          value={namaAnak}
          onChangeText={(text) => setNamaAnak(text)} />
      </View>

      <CardDiagnosa
        title='Menolak dipeluk ?'
        select={G1}
        onPressIya={() => setG1(true)}
        onPressTidak={() => setG1(false)} />

      <CardDiagnosa
        title='Saat bermain bila didekati malah menjauh ?'
        select={G2}
        onPressIya={() => setG2(true)}
        onPressTidak={() => setG2(false)} />

      <CardDiagnosa
        title='Bicara monoton seperti robot ?'
        select={G3}
        onPressIya={() => setG3(true)}
        onPressTidak={() => setG3(false)} />

      <CardDiagnosa
        title='Kata-kata yang tidak dapat mengerti orang lain ?'
        select={G4}
        onPressIya={() => setG4(true)}
        onPressTidak={() => setG4(false)} />

      <Space height={10} />

      <Button
        red
        title='Daftar'
        onPress={onPress} />
    </>
  )
}

export default FormDiagnosa