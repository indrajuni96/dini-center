import React from 'react'
import {
  View,
  Text,
} from 'react-native'

import Styles from './Styles'
import Space from '../Space'
import {
  TimeSvg,
  DoctorSvg,
  ProcessSvg
} from '../../Assets'

const Button = ({ svg, title }) => {
  return (
    <View style={Styles.content}>

      {svg === 'TimeSvg' ? <TimeSvg width={180} height={180} /> : null}
      {svg === 'DoctorSvg' ? <DoctorSvg width={180} height={180} /> : null}
      {svg === 'ProcessSvg' ? <ProcessSvg width={180} height={180} /> : null}

      <Space height={20} />

      <View style={Styles.wrapperText}>
        <Text style={Styles.text}>{title}</Text>
      </View>
    </View>
  )
}

export default Button