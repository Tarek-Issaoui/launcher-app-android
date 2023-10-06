/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @refresh reset
 * @format
 */

// import React from 'react';

import React = require('react');
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Home from './components/Home';
import SearchBarComponent from './components/SearchBarComponent';
import { Provider } from 'react-redux';
import x from './store/index';
import { PersistGate } from 'redux-persist/integration/react'
import {MyContextProvider} from './components/Context'
const Stack=createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


  return (
    <MyContextProvider>
      <Provider store={x.store}>
        <PersistGate persistor={x.persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}   options={{
              header:()=>(<SearchBarComponent />),
              headerTransparent:true,
              }}/>
          </Stack.Navigator>
        </NavigationContainer>
        </PersistGate>
      </Provider>
    </MyContextProvider>
  );
}


export default App;
