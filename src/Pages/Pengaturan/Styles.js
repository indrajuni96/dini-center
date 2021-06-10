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
    justifyContent: 'center',
    alignItems: 'center'
  },
  textHeader: {
    textAlign: 'center',
    fontSize: SCREEN_HEIGHT * 0.025,
    fontFamily: 'Poppins-SemiBold'
  },
  contentList: {
    flex: 1,
    backgroundColor: colors.silverLigthSmoke
  },
})

export default Styles