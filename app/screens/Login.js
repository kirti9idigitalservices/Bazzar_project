import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
 function Login({navigation}) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/Logo_Icon.png")} />
      <Image style={styles.image1} source={require("../../assets/Logo.png")} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
   
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="black"
          onChangeText={(phone) => setPhone(phone)}
        />
      </View>
 
      <View style={styles.inputView}>
    
        
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
       
      </View>
 
     
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

  <Text style={styles.forgotbutton}>Forgot Password</Text>
    </View>
  );
}

export default Login;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  image: {
   //marginBottom: 30,
    width: 150,
    height: 150,
    marginLeft: 200,
  },

  image1: {
    //marginBottom: 20,
    width: 200,
    height: 100,
  //  marginLeft: 40,
  },

  lock:{
    height:20,
    width:20,
    marginTop:13,
    marginLeft:15,
  },

  eiew:{
    height:20,
    width:20,
    marginTop:13,
    marginLeft: 140,
  },



  loginText:{
    color: 'white',
  },

 
  
 
  inputView: {
    backgroundColor: '#ccc',
    borderRadius: 30,
    width: '80%',
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
   

  
  },
 
  TextInput: {
    height: 45,
    marginLeft: 5,
  },

  forgotbutton: {
    height: 20,
    marginBottom: 10,
    backgroundColor: 'white',
  },
 
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'green',
  },
});