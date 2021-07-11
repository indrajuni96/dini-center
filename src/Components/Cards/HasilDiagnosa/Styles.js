import { StyleSheet, Dimensions } from 'react-native'

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window')

const Styles = StyleSheet.create({
  content: {
    marginBottom: SCREEN_HEIGHT * 0.025
  }
})

export default Styles