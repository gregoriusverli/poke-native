import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import {windowHeight, windowWidth} from '../globarVar';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Wellcome to Poke App</Text>
      <Pressable style={styles.btn}>
        <Text>Show Pokedex</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3DB2FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#F3F0D7',
    width: windowWidth * 0.3,
    height: windowHeight * 0.05,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    marginTop: windowHeight * 0.02,
  },
});
