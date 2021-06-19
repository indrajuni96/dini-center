import React from 'react'
import {
  View,
  ScrollView
} from 'react-native'

import Styles from './Styles'
import { BackHandlerAction } from '../../Utils'
import {
  Space,
  Header,
  ListGame
} from '../../Components'

const Game = ({ navigation: { navigate, goBack, isFocused } }) => {
  BackHandlerAction(isFocused)

  return (
    <View style={Styles.container}>
      <Header
        isDefault
        title='Game' />

      <Space height={30} />

      <ScrollView
        style={Styles.scrollView}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View>
          <ListGame
            disabled
            title='ayah' />

          <ListGame
            disabled
            title='ibu' />

          <ListGame
            disabled
            title='kakak' />

          <ListGame
            disabled
            title='kakek' />

          <ListGame
            disabled
            title='kucing' />
        </View>
      </ScrollView>
    </View>
  )
}

export default Game