import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  ToastAndroid
} from 'react-native'
import { useDispatch } from 'react-redux'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useNetInfo } from "@react-native-community/netinfo";

import Styles from './Styles'
import {
  Space,
  Button,
  CardLadingPage
} from '../../Components'
import {
  DataCarousel,
  BackHandlerAction
} from '../../Utils'
import { clearFormRegister } from '../../Redux/Actions/Auth'

const LandingPage = ({ navigation: { navigate, isFocused } }) => {
  const [activeSlide, setActiveSlide] = useState(0)

  const dispatch = useDispatch()

  BackHandlerAction(isFocused)

  const { isConnected } = useNetInfo()

  let carouselRef = useRef()

  const _renderItem = ({ item, index }) => (
    <CardLadingPage
      svg={item.landingSvg}
      title={item.textTitle} />
  )

  const onPress = (routerName) => {
    if (isConnected) {
      dispatch(clearFormRegister())
      navigate(routerName)
    } else {
      ToastAndroid.show('Tidak ada koneksi internet', ToastAndroid.SHORT);
    }
  }

  return (
    <View style={Styles.container}>
      <View style={Styles.wrapperDinicenter}>
        <Text style={Styles.textDini}>Dini</Text>
        <Text style={Styles.textCenter}>center</Text>
      </View>

      <View style={Styles.wrapperCarousel}>
        <Carousel
          ref={c => carouselRef = c}
          data={DataCarousel.landingPage}
          renderItem={_renderItem}
          firstItem={0}
          sliderWidth={500}
          itemWidth={500}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          loop={true}
          loopClonesPerSide={2}
          enableMomentum={true}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={(item) => setActiveSlide(item)} />

        <Pagination
          carouselRef={carouselRef}
          tappableDots={!!carouselRef}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          activeDotIndex={activeSlide}
          dotsLength={DataCarousel.landingPage.length}
          containerStyle={Styles.pagination}
          dotStyle={Styles.dot} />
      </View>

      <View style={Styles.wrapperButton}>
        <Button
          red
          title='Masuk'
          onPress={() => onPress('Login')} />

        <Space height={10} />

        <Button
          title='Daftar'
          onPress={() => onPress('Register')} />
      </View>
    </View>
  )
}

export default LandingPage