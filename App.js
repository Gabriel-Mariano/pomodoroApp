import 'react-native-gesture-handler';
import  './src/config/statusBar';


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import  MyContextProvider  from './src/config/contexts';


import Login from './src/pages/login';
import About from './src/pages/about';
import Home from './src/pages/home';
import Break from './src/pages/break';

const Stack = createStackNavigator();

export default function App() {
  return (
    <MyContextProvider>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="login"
                           screenOptions={{
                            headerShown:false // false remove o cabeçalho   
                        }} 
          >
            <Stack.Screen name="login" component={Login}/>
            <Stack.Screen name="about" component={About}/>
            <Stack.Screen name="home" component={Home}/>
            <Stack.Screen name="break" component={Break}/>
          </Stack.Navigator>
      </NavigationContainer>
    </MyContextProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
