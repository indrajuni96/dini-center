import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  ripple: {
    color: colors.silverLigth
  },
  pressable: {
    borderRadius: 40 / 2,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: SCREEN_HEIGHT * 0.02,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
  },
  contentCard: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.silverLigth,
    paddingVertical: SCREEN_HEIGHT * 0.01,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
  },
  contentCircle: {
    borderWidth: 1,
    borderRadius: SCREEN_HEIGHT * 0.15 / 2,
    height: SCREEN_HEIGHT * 0.15,
    width: SCREEN_HEIGHT * 0.15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  textGame: {
    color: colors.black,
    fontSize: SCREEN_HEIGHT * 0.033,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center'
  },
  contentCircleSmall: {
    borderWidth: 1,
    borderColor: colors.silverLigth,
    borderRadius: 40 / 2,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
    overflow: 'hidden',
    alignSelf: 'flex-end'
  }
})

export default Styles