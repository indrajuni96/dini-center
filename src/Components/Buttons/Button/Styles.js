import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  content: {
    height: SCREEN_HEIGHT * 0.085,
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  pressable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: SCREEN_HEIGHT * 0.025,
    fontFamily: 'Poppins-SemiBold'
  },
  ripple: {
    color: colors.silverLigth
  }
})

export default Styles