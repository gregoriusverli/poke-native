import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ActivityIndicator,
} from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/img/splash.jpg')}
        style={styles.container}>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00"></ActivityIndicator>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
