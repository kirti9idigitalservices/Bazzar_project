import * as React from 'react';
import { StyleSheet, Text, View, Image,TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import  { useState } from "react";

function RequirementSummary({ navigation }) {
    const [Bname, setBNAME] = useState("");
    return (
        
        <View styles={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.RectangleShapeView}>
            <Image style={styles.image} source={ require('../../assets/hamburger.png')}/>
            <Text style={styles.textstyle}> Sell on BAZZAR for free</Text>
           
           </View>
           <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center', }}>
           <Image style={styles.image1} source={ require('../../assets/1.png')}/>
           <Image style={styles.image1} source={ require('../../assets/2.png')}/>
           <Image style={styles.image1} source={ require('../../assets/3.png')}/>
           <Image style={styles.image1} source={ require('../../assets/4.png')}/>
           </View>
           <View  style={styles.imgcont}>
              
               <Text style={styles.inputtext}><Text style={styles.boldtext}>Hi Angle,</Text> Start your journey with online Marketplace for
                <Text style={styles.boldtext}>FREE</Text></Text>
               <View style={styles.inputView}>
    
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Business Name *"
          placeholderTextColor="grey"
          maxLength = {40}
          onChangeText={(Bname) => setBNAME(Bname)}
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
               marginBottom: 10,
               marginTop:20,
               

  
              },
 
          TextInput: {
              height: 35,
              marginLeft: 5,
              paddingLeft: 8,
           },

});