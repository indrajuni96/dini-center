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
  wrapperDinicenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDini: {
    color: colors.black,
    fontSize: SCREEN_HEIGHT * 0.035,
    fontFamily: 'Poppins-Bold'
  },
  textCenter: {
    color: colors.red,
    fontSize: SCREEN_HEIGHT * 0.035,
    fontFamily: 'Poppins-Bold'
  },
  wrapperCarousel: {
    flex: 1,
    alignItems: 'center',
  },
  wrapperButton: {
  },
  pagination: {
    backgroundColor: colors.white
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.black,
  }
})

export default Styles