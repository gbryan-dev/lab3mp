import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from '../logo.png';
import illustrated2 from '../illustrated2.png';

const ForgotPassword = ({ fontFamily }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoheader}>
        <Image source={logo} style={styles.logoimg} />
        <Text style={[styles.textLogo, { fontFamily }]}>EduPair</Text>
      </View>

      <Text style={[styles.welcometext, { fontFamily }]}>
        Forgot password? Help us to find your account.
      </Text>

      <Text style={[styles.welcometext2, { fontFamily }]}>
        Enter the email associated with your account and we'll send an email with instructions to reset your password.
      </Text>

      <Image source={illustrated2} style={styles.illustrated2} />

      <TextInput style={[styles.input, { fontFamily }]} placeholder="Email" />

      <TouchableOpacity style={styles.btn}>
        <Text style={[styles.btnText, { fontFamily }]}>Search</Text>
      </TouchableOpacity>

      <Text style={[styles.reghere, { fontFamily }]}>
        Don't have an account? 
        <Text style={styles.boldcoloredText}> Register Here</Text>.
      </Text>
      <Text style={[styles.developer, { fontFamily }]}>Developed by Gbryan Dev</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  logoheader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoimg: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  textLogo: {
    fontSize: 15,
    fontWeight: '400',
  },
  welcometext: {
    marginTop: 20,
    fontSize: 20,
  },
  welcometext2: {
    marginTop: 20,
    fontSize: 15,
    color: 'grey',
  },
  illustrated2: {
    marginTop: 50,
    width: '100%',
    height: 220,
  },
  input: {
    fontSize: 13,
    marginTop: 20,
    width: '100%',
    height: 50,
    placeholderTextColor: '#888',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  btn: {
    marginTop: 30,
    width: '100%',
    height: 50,
    backgroundColor: '#00bf63',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
  reghere: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 13,
  },
  boldcoloredText: {
    color: '#00bf63',
    fontWeight: '500',
  },
  developer: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
    color: 'grey',
  },
});

export default ForgotPassword;
