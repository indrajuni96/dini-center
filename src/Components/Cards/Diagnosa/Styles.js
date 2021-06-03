import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  content: {
    marginBottom: SCREEN_HEIGHT * 0.025
  },
  text: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.02,
    fontFamily: 'Poppins-Regular'
  },
  wrapperRadio: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})

export default Styles