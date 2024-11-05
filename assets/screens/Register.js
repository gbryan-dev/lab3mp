import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from '../logo.png';

const Register = ({ fontFamily }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoheader}>
        <Image source={logo} style={styles.logoimg} />
        <Text style={[styles.textLogo, { fontFamily }]}>EduPair</Text>
      </View>

      <Text style={[styles.welcometext, { fontFamily }]}>
        Create your account,<br/>It's quick and easy.
      </Text>

      <View style={styles.flexinputs}>
        <TextInput style={[styles.halfinput, { fontFamily }]} placeholder="First Name" />
        <TextInput style={[styles.halfinput, { fontFamily }]} placeholder="Last Name" />
      </View>

      <TextInput style={[styles.input, { fontFamily }]} placeholder="Email Address" />
      <TextInput style={[styles.input, { fontFamily }]} placeholder="Phone Number" />
      <TextInput style={[styles.input, { fontFamily }]} placeholder="Username" />
      <TextInput style={[styles.input, { fontFamily }]} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.btn}>
        <Text style={[styles.btnText, { fontFamily }]}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={[styles.reghere, { fontFamily }]}>
        Already have an account? <Text style={styles.boldcoloredText}>Login Here</Text>.
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
  welcometext: {
    marginTop: 20,
    fontSize: 20,
  },
  input: {
    fontSize: 13,
    marginTop: 20,
    width: "100%",
    height: 50,
    backgroundColor: "white",
    placeholderTextColor: "#888",
    padding: 10,
    borderRadius: 5,
  },
  flexinputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfinput: {
    fontSize: 13,
    placeholderTextColor: "#888",
    marginTop: 20,
    width: "48%",
    height: 50,
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

export default Register;
