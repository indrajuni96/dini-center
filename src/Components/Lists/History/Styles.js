import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    height: SCREEN_HEIGHT * 0.07,
    backgroundColor: colors.white,
    marginBottom: SCREEN_HEIGHT * 0.015
  },
  contentIcon: {
    justifyContent: 'center',
    paddingRight: SCREEN_WIDTH * 0.1,
  },
  textRegular15: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.015,
    fontFamily: 'Poppins-Regular'
  },
  textSemiBold15: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.015,
    fontFamily: 'Poppins-SemiBold'
  },
})

export default Styles