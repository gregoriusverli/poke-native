import {Box, Container, ScrollView} from 'native-base';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import CardPokedex from '../components/CardPokedex';
import {windowHeight, windowWidth} from '../globarVar';
import {fetchListPoke} from '../store/action';

export default function Pokedex() {
  const dispatch = useDispatch();
  const {listPokemon, loading} = useSelector(state => state.pokeReducer);
  useEffect(() => {
    dispatch(fetchListPoke());
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#00ff00"></ActivityIndicator>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {listPokemon.length > 0 && (
          <View>
            <View style={{backgroundColor: 'red', width: windowWidth}}>
              <Text>Pokedex</Text>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
              {listPokemon.map((poke, i) => {
                return <CardPokedex poke={poke} key={i} />;
              })}
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
  },
  content: {
    width: windowWidth,
    alignItems: 'center',
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
