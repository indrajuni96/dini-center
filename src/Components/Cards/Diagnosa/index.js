import React from 'react'
import { View, Text } from 'react-native'

import Styles from './Styles'
import Radio from '../../Buttons/Radio'

const CardDiagnosa = ({ title, select, onPressIya, onPressTidak }) => {
  return (
    <View style={Styles.content}>
      <Text style={Styles.text}>{title}</Text>

      <View style={Styles.wrapperRadio}>
        <Radio
          select={select ? true : false}
          onPress={onPressIya} />

        <Radio
          isDefault
          select={!select ? true : false}
          onPress={onPressTidak} />
      </View>
    </View>
  )
}

export default CardDiagnosa