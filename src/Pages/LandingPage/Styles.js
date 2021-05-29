import { StyleSheet, Dimensions } from 'react-native'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

import { color } from '../../Utils'

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white
  },
  wrapperDinicenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDini: {
    color: color.black,
    fontSize: SCREEN_HEIGHT * 0.03,
    fontFamily: 'Poppins-Bold'
  },
  textCenter: {
    color: color.red,
    fontSize: SCREEN_HEIGHT * 0.03,
    fontFamily: 'Poppins-Bold'
  }
})

export default Styles