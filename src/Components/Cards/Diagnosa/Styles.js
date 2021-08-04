import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  content: {
    marginBottom: SCREEN_HEIGHT * 0.025
  },
  text: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.022,
    fontFamily: 'Poppins-Regular'
  },
  wrapperRadio: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  wrapperPicker: {
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.silverLigth,
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_HEIGHT * 0.07,
  },
})

export default Styles