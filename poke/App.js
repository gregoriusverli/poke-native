import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/store';
import Home from './src/screens/Home';
import Pokedex from './src/screens/Pokedex';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Splash from './src/screens/Splash';
import {NativeBaseProvider} from 'native-base';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Pokedex"
              options={{
                headerShown: false,
              }}
              component={Pokedex}
            />
            <Stack.Screen
              name="splash"
              options={{
                headerShown: false,
              }}
              component={Splash}
            />
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
