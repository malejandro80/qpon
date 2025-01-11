/** @format */

// Home.js
import * as React from 'react'
import { Button, View, Text } from 'react-native'
import CardComponent from '../components/CardComponent'
import CarouselComponent from '../components/CarouselComponent'

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Home Screen eepa</Text>
      <CarouselComponent />
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

export default Home
