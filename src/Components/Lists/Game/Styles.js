import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    height: SCREEN_HEIGHT * 0.08,
    backgroundColor: colors.white,
    marginBottom: SCREEN_HEIGHT * 0.015,
    borderBottomWidth: 2,
    borderBottomColor: colors.silverLigthSmoke
  },
  contentIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.2,
  },
  contentText: {
    justifyContent: 'center',
  },
  textRegular15: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.015,
    fontFamily: 'Poppins-Regular'
  },
  textSemiBold15: {
    color: colors.black,
    fontSize: SCREEN_HEIGHT * 0.017,
    fontFamily: 'Poppins-SemiBold'
  },
})

export default Styles