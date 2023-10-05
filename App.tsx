/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @refresh reset
 * @format
 */

// import React from 'react';

import React = require('react');
// import MainComponent from './MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { MyContextProvider } from './components/Context';
import Home from './components/Home';
import InstalledApps from './components/InstalledApps';
import SearchBarComponent from './components/SearchBarComponent';
import { Provider } from 'react-redux';
import x from './store/index';
import { PersistGate } from 'redux-persist/integration/react'
const Stack=createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


  return (
    
      <Provider store={x.store}>
        <PersistGate persistor={x.persistor}>
        <NavigationContainer>
          {/* <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            /> */}
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}   options={{
              // headerStyle: {
              //   backgroundColor: 'white',
                
              // },
              
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              // },
              // headerLargeStyle={
              //   backgroundColor: 'white',
              // }
              
              header:()=>(<SearchBarComponent />),
              headerTransparent:true,
              // headerBackground:()=>(<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />)
              // headerTitleAlign:'center'
              }}/>
            {/* <Stack.Screen name="InstalledApps" component={InstalledApps} /> */}
          </Stack.Navigator>

        </NavigationContainer>
        </PersistGate>
      </Provider>
  );
}


export default App;
