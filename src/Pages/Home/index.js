import React from 'react'
import {
  View,
  Text,
  Pressable
} from 'react-native'
import { useSelector } from 'react-redux'
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'

import Styles from './Styles'
import { BoySvg } from '../../Assets'
import {
  jam,
  colors,
  tanggal,
  BackHandlerAction
} from '../../Utils'
import {
  Space,
  ListHistory
} from '../../Components'

const Home = ({ navigation: { isFocused, navigate } }) => {
  BackHandlerAction(isFocused)

  const user = useSelector(state => state.AuthStore.user)

  return (
    <View style={Styles.container}>
      <View style={Styles.contentHeader}>
        <View style={Styles.wrapperDinicenter}>
          <Text style={Styles.textDini}>Dini</Text>
          <Text style={Styles.textCenter}>center</Text>
        </View>

        <BoySvg width={45} height={45} />
      </View>

      <Space height={40} />

      <View style={Styles.contentCard}>
        <View style={Styles.cardHeader}>
          <Text style={Styles.textSelamat}>
            {jam()}
          </Text>

          <Pressable onPress={() => navigate('Profile')}>
            <FontAwesome name="user-circle-o" size={30} color={colors.silver} />
          </Pressable>
        </View>

        <Text style={Styles.textName}>
          {user ? user.namaAnak : ''}
        </Text>

        <Space height={40} />

        <View style={Styles.contentDate}>
          <MaterialIcons name="access-time" size={15} color={colors.silver} />

          <Space width={5} />

          <Text style={Styles.textRegular15}>
            {tanggal('d MMMM YYYY')}
          </Text>
        </View>
      </View>

      <Space height={80} />

      <View style={Styles.contentHistory}>
        <View style={Styles.historyHeader}>
          <Text style={Styles.textSemiBold18}>
            History
          </Text>

          <Pressable onPress={() => navigate('History')}>
            <Text style={Styles.textRegular15}>
              lihat semua
            </Text>
          </Pressable>
        </View>

        <Space height={20} />

        <View style={Styles.listHistory}>
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
      </View>
    </View>
  )
}

export default Home