import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  contentForm: {
    flex: 1,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
  },
  contentLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  safeAreaView: {
    flex: 1,
  },
  wrapperPicker: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.silverLigth,
    width: '100%',
    height: SCREEN_HEIGHT * 0.07,
  },
  textPicker: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.022,
    fontFamily: 'Poppins-Regular'
  },
  textTitle: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.02,
    fontFamily: 'Poppins-Regular'
  },
  textKuesioner: {
    color: colors.black,
    fontSize: SCREEN_HEIGHT * 0.023,
    fontFamily: 'Poppins-SemiBold'
  },
})

export default Styles