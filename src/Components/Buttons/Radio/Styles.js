import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
  pressable: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: colors.white
  },
  radio: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
  },
  text: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.02,
    fontFamily: 'Poppins-Regular'
  },
})

export default Styles