import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font'; 
import { Poppins_400Regular } from '@expo-google-fonts/poppins'; 
import Login from './assets/screens/Login';
import Register from './assets/screens/Register';
import ForgotPassword from './assets/screens/ForgotPassword';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

 
  return (
    <View style={styles.container}>
      <Login fontFamily="Poppins_400Regular" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
