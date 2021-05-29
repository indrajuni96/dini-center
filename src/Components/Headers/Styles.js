import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
  wrapperText: {
    flex: 1,
    alignItems: 'center',
    marginRight: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: SCREEN_HEIGHT * 0.025,
    fontFamily: 'Poppins-SemiBold'
  },
})

export default Styles