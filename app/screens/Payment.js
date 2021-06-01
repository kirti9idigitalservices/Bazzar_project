import * as React from 'react';
import { StyleSheet, Text, View, Image,TextInput} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import  { useState } from "react";


function Payment ({ navigation }) {
    return (
        
        <View styles={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.RectangleShapeView}>
            <Image style={styles.image} source={ require('../../assets/Back.png')}/>
            <Text style={styles.textstyle}>Pay with Bazzar</Text>
           
           </View>

           <View style={styles.inputView}>
    <Text style={{marginTop:8, marginLeft:6,}}>+91</Text>
    <TextInput
      style={styles.TextInput}
    
      placeholder="Seller mobile number"
      placeholderTextColor="grey"
      maxLength = {40}
      onChangeText={(eps1) => setEPS1(eps1)}
    />
       <Image style={styles.icon} source={ require('../../assets/Mob_Details.png')}/>

   </View>
   <View style={styles.inputView}>
   <Image style={styles.icon} source={ require('../../assets/Cart.png')}/>
    <TextInput
      style={styles.TextInput}

      placeholder="Product Name"
      placeholderTextColor="grey"
      maxLength = {40}
      onChangeText={(eps2) => setEPS2(eps2)}
    />
   
      </View>
      <View style={styles.inputView}>
      <Image style={styles.icon} source={ require('../../assets/Pay_I.png')}/>
    <TextInput
      style={styles.TextInput}
      placeholder="Price"
      placeholderTextColor="grey"
      maxLength = {40}
      onChangeText={(eps3) => setEPS3(eps3)}
    />
  </View>

    
             
           <View>
            <TouchableOpacity
                style={[styles.button, styles.buttonClose]}>
               <Text style={styles.textStyle}>Pay Now</Text>
               </TouchableOpacity>
              
            </View>    

           </View>

);

}
export default Payment;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 2,

    },

    RectangleShapeView: {
        width: '100%',
        height: 60,
        backgroundColor: '#45B39D',
        flexDirection: 'row',
       
        },

        textstyle:{

            fontWeight: 'bold' ,
            color: 'black',
            textAlign: 'center',
             fontSize: 20,
             marginTop: 15,
             marginRight: 150,
             marginLeft:20,
        },

        
        image:{
            height: 30,
            width: 30,
            marginLeft: 8,
            marginTop: 15,
        },
        icon:{
            height: 30,
            width: 30,
            marginLeft: 8,
            marginTop: 3,
        },
        
        button: {
            borderRadius: 10,
            padding: 10,
            elevation: 2,
            
          },

          buttonClose: {
            backgroundColor: '#45B39D',
            width:'50%',
            marginLeft: 90,
            marginTop: 30,
           
           
        },
           
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
           
          },

      
          inputView: {
            backgroundColor: 'white',
              borderRadius: 30,
                width: '80%',
                 height: 40,
                 marginBottom: 5,
                 marginTop:20,
                 flexDirection: 'row',
                 marginLeft: 35,
                 
  
    
                },
   
            TextInput: {
                height: 35,
                marginLeft: 5,
                paddingLeft: 8,
                marginRight: 60,
             },

});

           
