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
    fontSize: SCREEN_HEIGHT * 0.033,
    fontFamily: 'Poppins-Bold'
  },
  textCenter: {
    color: colors.red,
    fontSize: SCREEN_HEIGHT * 0.033,
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
    fontSize: SCREEN_HEIGHT * 0.023,
    fontFamily: 'Poppins-SemiBold'
  },
  textName: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.023,
    fontFamily: 'Poppins-Regular'
  },
  contentDate: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contentHistory: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderColor: colors.silverLigth,
    paddingTop: SCREEN_HEIGHT * 0.03,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textRegular15: {
    color: colors.silver,
    fontSize: SCREEN_HEIGHT * 0.018,
    fontFamily: 'Poppins-Regular'
  },
  textSemiBold18: {
    color: colors.black,
    fontSize: SCREEN_HEIGHT * 0.022,
    fontFamily: 'Poppins-SemiBold'
  },
  safeAreaView: {
    flex: 1
  }
})

export default Styles