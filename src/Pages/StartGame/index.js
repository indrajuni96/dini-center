import React, { useState } from 'react'
import {
  View,
  Text,
  Pressable
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import IconIonicons from 'react-native-vector-icons/dist/Ionicons'

import Styles from './Styles'
import { colors } from '../../Utils'
import {
  Space,
  Header,
  Loading,
  Button
} from '../../Components'

const StartGame = ({ route, navigation: { goBack } }) => {
  const { item } = route.params

  const [isEnabled, setIsEnabled] = useState(false)

  const onMulai = () => {
    setIsEnabled(true)

    setTimeout(() => {
      setIsEnabled(false)
    }, 3000)
  }

  return (
    <View style={Styles.container}>
      <Header
        title='Game'
        onPress={() => isEnabled ? null : goBack()} />

      <Space height={30} />

      <View style={Styles.contentCard}>
        <Space height={50} />

        <View style={[Styles.contentCircle, { borderColor: isEnabled ? colors.black : colors.silverLigth }]}>
          <FontAwesome name="microphone-slash" size={30} color={isEnabled ? colors.red : colors.silverLigth} />
        </View>

        <Space height={50} />

        <View>
          <Text style={Styles.textGame}>{item.namaGame}</Text>
        </View>

        <View style={Styles.contentCircleSmall}>
          <Pressable
            disabled={isEnabled}
            style={Styles.pressable}
            android_ripple={Styles.ripple}
            onPress={() => console.log('voice')}>
            <IconIonicons name="volume-medium" size={25} color="white" />
          </Pressable>
        </View>

        <Space height={10} />
      </View>

      <Space height={50} />

      <Button
        disabled={isEnabled}
        red={!isEnabled}
        title='Mulai'
        onPress={onMulai} />
    </View>
  )
}

export default StartGame