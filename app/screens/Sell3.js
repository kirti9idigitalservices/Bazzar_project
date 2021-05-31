import * as React from 'react';
import { StyleSheet, Text, View, Image,TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import  { useState } from "react";

function RequirementSummary({ navigation }) {
    const [eps1, setEPS1] = useState("");
    const [eps2, setEPS2] = useState("");
    const [eps3, setEPS3] = useState("");
    return (
        
        <View styles={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.RectangleShapeView}>
            <Image style={styles.image} source={ require('../../assets/hamburger.png')}/>
            <Text style={styles.textstyle}> Sell on BAZZAR for free</Text>
           
           </View>
           <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center', }}>
           <Image style={styles.image1} source={ require('../../assets/Tick.png')}/>
           <Image style={styles.image1} source={ require('../../assets/2.png')}/>
           <Image style={styles.image1} source={ require('../../assets/3.png')}/>
           <Image style={styles.image1} source={ require('../../assets/4.png')}/>
           </View>
           <View  style={styles.imgcont}>
              
               <Text style={styles.inputtext}> Enter minimum 3 Product Services
             </Text>
     <View style={styles.inputView}>
    
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Product Services 1*"
          placeholderTextColor="grey"
          maxLength = {40}
          onChangeText={(eps1) => setEPS1(eps1)}
        />
       </View>
       <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Product Services 2*"
          placeholderTextColor="grey"
          maxLength = {40}
          onChangeText={(eps2) => setEPS2(eps2)}
        />
          </View>
          <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Product Services 3*"
          placeholderTextColor="grey"
          maxLength = {40}
          onChangeText={(eps3) => setEPS3(eps3)}
        />
      </View>
 
           </View>
            <View>
            <TouchableOpacity
                style={[styles.button, styles.buttonClose]}>
               <Text style={styles.textStyle}>Next</Text>
               </TouchableOpacity>
              
            </View>
        </View>
      
    );
  }
  export default RequirementSummary;

  
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
             marginRight: 50,
             marginLeft:20,
        },

        button: {
            borderRadius: 10,
            padding: 10,
            elevation: 2,
            
          },

          buttonClose: {
            backgroundColor: '#45B39D',
            width:'30%',
            marginLeft: 130,
            marginTop: 30,
           
           
        },
           
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
           
          },

          boldtext:{
             fontWeight: 'bold',
             },


          inputtext:{

            color: 'black',
            textAlign: 'center',
            fontSize: 17,
          },

          
         

          image:{
              height: 30,
              width: 30,
              marginLeft: 8,
              marginTop: 15,
          },
         
          image1:{
            height: 30,
            width: 30,
           marginTop: 15,
           marginRight: 25
        },

        imgcont:{

            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 30,
        },


       inputView: {
          backgroundColor: '#ccc',
            borderRadius: 30,
              width: '80%',
               height: 34,
               marginBottom: 5,
               marginTop:20,
               

  
              },
 
          TextInput: {
              height: 35,
              marginLeft: 5,
              paddingLeft: 8,
           },

});