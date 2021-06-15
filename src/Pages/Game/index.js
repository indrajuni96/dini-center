import React from 'react'
import {
  View,
  ScrollView
} from 'react-native'

import Styles from './Styles'
import { BackHandlerAction } from '../../Utils'
import {
  Space,
  Header
} from '../../Components'

const Game = ({ navigation: { navigate, goBack, isFocused } }) => {
  BackHandlerAction(isFocused)

  return (
    <View style={Styles.container}>
      <Header
        isDefault
        title='Game' />

      <Space height={40} />

      <ScrollView
        style={Styles.scrollView}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={Styles.contentForm}>


        </View>
      </ScrollView>
    </View>
  )
}

export default Game