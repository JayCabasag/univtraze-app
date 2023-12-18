import { View, Text, Image, StyleSheet } from 'react-native'
import SplashImage from '../assets/splash.png'
import React from 'react'

const LoadingScreen = () => {
  console.log(SplashImage)
  return (
    <View style={styles.container}>
      <Image source={SplashImage} style={styles.loading} />
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  loading: {
    flex: 1,
    width: '100%'
  }
})
