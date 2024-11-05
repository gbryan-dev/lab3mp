import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from '../logo.png';
import illustrated1 from '../illustrated1.png';

const Login = ({ fontFamily }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoheader}>
        <Image source={logo} style={styles.logoimg} />
        <Text style={[styles.textLogo, { fontFamily }]}>EduPair</Text>
      </View>

      <Text style={[styles.welcometext, { fontFamily }]}>
        Hello,<br/>Welcome to EduPair!
      </Text>

      <Text style={[styles.welcometext2, { fontFamily }]}>
        Before continuing, please login first.
      </Text>

      <Image source={illustrated1} style={styles.illustrated1} />

      <TextInput style={[styles.input, { fontFamily }]} placeholder="Username" />
      <TextInput style={[styles.input, { fontFamily }]} placeholder="Password" secureTextEntry />

      <View style={{ justifyContent: 'space-between', alignItems: 'flex-end'}}>
      <Text style={[styles.forgotpass, { fontFamily }]}>Forgot Password ?</Text>
      </View>

     

      <TouchableOpacity style={styles.btn}>
        <Text style={[styles.btnText, { fontFamily }]}>Login</Text>
      </TouchableOpacity>

      <Text style={[styles.reghere, { fontFamily }]}>
        Don't have an account? <Text style={styles.boldcoloredText}>Register Here</Text>.
      </Text>
      <Text style={[styles.developer, { fontFamily }]}>Developed by Gbryan Dev</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 30,
  },
  logoheader: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
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
  forgotpass: {
    marginTop: 10,
    fontSize: 12
  },
  welcometext: {
    marginTop: 20,
    fontSize: 20,
  },
  welcometext2: {
    marginTop: 20,
    fontSize: 15,
  },
  illustrated1: {
    marginTop: 50,
    width: "100%",
    height: 240,
  },
  input: {
    fontSize: 13,
    marginTop: 20,
    width: "100%",
    height: 50,
    placeholderTextColor: "#888",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  btn: {
    marginTop: 30,
    width: "100%",
    height: 50,
    backgroundColor: "#00bf63",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    textAlign: 'center',
  },
  reghere: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 13,
  },
  boldcoloredText: {
    color: "#00bf63",
    fontWeight: '500',
  },
  developer: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
    color: 'grey',
  },
});

export default Login;
