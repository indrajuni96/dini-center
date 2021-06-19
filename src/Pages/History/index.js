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
  ListHistory
} from '../../Components'

const History = ({ navigation: { isFocused } }) => {
  BackHandlerAction(isFocused)

  return (
    <View style={Styles.container}>
      <Header
        isDefault
        title='History' />

      <Space height={40} />

      <ScrollView
        style={Styles.scrollView}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View>
          <ListHistory
            disabled
            title='ayah'
            status='berhasil menggucapkan' />

          <ListHistory
            disabled
            title='ibu'
            status='berhasil menggucapkan' />

          <ListHistory
            disabled
            title='kakak'
            status='tidak berhasil menggucapkan' />

          <ListHistory
            disabled
            title='kakak'
            status='tidak berhasil menggucapkan' />

        </View>
      </ScrollView>
    </View>
  )
}

export default History