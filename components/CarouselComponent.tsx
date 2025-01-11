/** @format */

import * as React from 'react'
import { Dimensions, View, StyleSheet } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import CardComponent from './CardComponent'
import { Text } from 'react-native-paper'

const { width: screenWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  slide: {
    width: screenWidth * 0.7, // Ajustar el ancho de las tarjetas para que quepan 1.5
    marginHorizontal: screenWidth * 0.05 // Agregar margen horizontal entre las tarjetas
  },
  text: {
    textAlign: 'left',
    margin: 10
  }
})

function Index() {
  return (
    <>
      <Text variant='headlineLarge' style={styles.text}>
        Promociones Flash
      </Text>
      <View style={styles.container}>
        <Carousel
          loop
          width={screenWidth}
          height={screenWidth * 0.9}
          autoPlay={true}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          // onSnapToItem={index => console.log('current index:', index)}
          renderItem={({ item }) => (
            <View key={item} style={styles.slide}>
              <CardComponent />
            </View>
          )}
        />
      </View>
    </>
  )
}

export default Index
