import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: SCREEN_HEIGHT * 0.02,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
  },
  contentForm: {
    paddingHorizontal: SCREEN_WIDTH * 0.03,
  },
  text: {
    textAlign: 'center',
    fontSize: SCREEN_HEIGHT * 0.025,
    fontFamily: 'Poppins-SemiBold'
  },
  textKuesioner: {
    color: colors.black,
    fontSize: SCREEN_HEIGHT * 0.023,
    fontFamily: 'Poppins-SemiBold'
  },
  safeAreaView: {
    flex: 1,
  }
})

export default Styles