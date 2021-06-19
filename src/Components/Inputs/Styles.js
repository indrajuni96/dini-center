import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  content: {
  },
  text: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.02,
    fontFamily: 'Poppins-Regular'
  },
  contentInput: {
    height: SCREEN_HEIGHT * 0.055,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.silverLigth,
  },
  textInput: {
    flex: 1,
    color: colors.black,
    fontSize: SCREEN_HEIGHT * 0.02,
    fontFamily: 'Poppins-Regular',
    paddingVertical: 0,
  },
  contentError: {
    height: SCREEN_HEIGHT * 0.04
  },
  textError: {
    color: colors.red,
    fontSize: SCREEN_HEIGHT * 0.016,
    fontFamily: 'Poppins-Regular'
  },
})

export default Styles