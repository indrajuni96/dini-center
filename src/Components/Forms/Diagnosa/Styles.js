import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  contentForm: {
    flex: 1,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
  },
  contentLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  safeAreaView: {
    flex: 1,
  }
})

export default Styles