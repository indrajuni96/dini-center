import { StyleSheet, Dimensions } from 'react-native'

import { colors } from '../../Utils'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: SCREEN_HEIGHT * 0.02
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SCREEN_WIDTH * 0.03,
  },
  wrapperDinicenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDini: {
    color: colors.black,
    fontSize: SCREEN_HEIGHT * 0.025,
    fontFamily: 'Poppins-Bold'
  },
  textCenter: {
    color: colors.red,
    fontSize: SCREEN_HEIGHT * 0.025,
    fontFamily: 'Poppins-Bold'
  },
  contentCard: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.silverLigth,
    marginHorizontal: SCREEN_WIDTH * 0.03,
    paddingVertical: SCREEN_HEIGHT * 0.01,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textSelamat: {
    color: colors.black,
    fontSize: SCREEN_HEIGHT * 0.02,
    fontFamily: 'Poppins-SemiBold'
  },
  textName: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.02,
    fontFamily: 'Poppins-Regular'
  },
  contentDate: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textDate: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.015,
    fontFamily: 'Poppins-Regular'
  }
})

export default Styles