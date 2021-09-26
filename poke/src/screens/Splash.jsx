import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import Loading from '../components/Loading';
import {setLoading} from '../store/action';
export default function Splash({navigation}) {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(true));
      navigation.replace('Pokedex');
    }, 3000);
  }, [navigation]);

  return <Loading />;
}
