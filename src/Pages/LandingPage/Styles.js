import { StyleSheet, Dimensions } from 'react-native'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

import { colors } from '../../Utils'

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
    fontSize: SCREEN_HEIGHT * 0.03,
    fontFamily: 'Poppins-Bold'
  },
  textCenter: {
    color: colors.red,
    fontSize: SCREEN_HEIGHT * 0.03,
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