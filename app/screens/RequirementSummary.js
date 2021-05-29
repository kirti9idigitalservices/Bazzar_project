import * as React from 'react';
import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

function RequirementSummary({ navigation }) {
    return (
        <View styles={styles.container}>
            <View style={styles.RectangleShapeView}>
            <Image style={styles.image} source={ require('../../assets/Back.png')}/>
            <Text style={styles.textstyle}> Requirement Summary</Text>
            <Image style={styles.image} source={ require('../../assets/Price_.png')}/>
           </View>
            <View>
            <TouchableOpacity
                style={[styles.button, styles.buttonClose]}>
               <Text style={styles.textStyle}>FINISH</Text>
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
            width:'60%',
            marginTop:300,
            marginBottom: 30,
            marginLeft: 70,
           
        },
           
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
           
          },

          image:{
              height: 30,
              width: 30,
              marginLeft: 8,
              marginTop: 15,
          },

});