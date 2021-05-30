import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: SCREEN_HEIGHT * 0.04,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
})

export default Styles