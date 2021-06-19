import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  content: {
    height: SCREEN_HEIGHT * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
  },
  text: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.023,
    fontFamily: 'Poppins-Regular',
  }
})

export default Styles