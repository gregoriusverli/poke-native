import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import {windowHeight, windowWidth} from '../globarVar';
import {Button, ButtonGroup} from 'native-base';
export default function Home({navigation}) {
  function goPokedex() {
    navigation.replace('splash');
  }
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          goPokedex();
        }}>
        Show Pokedex
      </Button>
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
