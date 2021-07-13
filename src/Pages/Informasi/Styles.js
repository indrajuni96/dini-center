import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: SCREEN_HEIGHT * 0.02,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
  },
  safeAreaView: {
    flex: 1,
  },
  contentBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.silverLigth,
  },
  textTitle: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.02,
    fontFamily: 'Poppins-Regular'
  },
  text: {
    color: colors.black,
    fontSize: SCREEN_HEIGHT * 0.025,
    fontFamily: 'Poppins-Regular',
  }
})

export default Styles