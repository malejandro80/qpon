/** @format */

import * as React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import { StyleSheet } from 'react-native'

const CardComponent = () => (
  <Card>
    <Card.Cover
      source={{ uri: 'https://picsum.photos/700' }}
      style={styles.cover}
    />
    <Card.Title title='pizza hut' />
    <Card.Content>
      <Text variant='titleLarge' style={styles.text}>
        10% de descuento en pizza
      </Text>
    </Card.Content>
    <Card.Actions>
      <Button>Redimir</Button>
    </Card.Actions>
  </Card>
)

const styles = StyleSheet.create({
  cover: {
    marginHorizontal: 20,
    marginTop: 10
  },
  text: {
    textAlign: 'left',
    margin: 10 // Alinear el texto a la izquierda y dar margen de 10px
  }
})

export default CardComponent
