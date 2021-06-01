import * as React from 'react';
import { StyleSheet, Text, View, Image,TextInput} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import  { useState } from "react";



function Sell7 ({ navigation }) {
    return (
        
        <View styles={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.RectangleShapeView}>
            <Image style={styles.image} source={ require('../../assets/Back.png')}/>
            <Text style={styles.textstyle}> Face Mask</Text>
            <Image style={styles.image} source={ require('../../assets/Price_.png')}/>
           </View>

          <Text style={{fontSize:20, marginLeft:90, marginTop:10,}}>Just one more step!</Text> 

          <Text style={{marginLeft:10, marginTop:15, fontSize:15,}}>Requirement Details</Text>  
 
            <View style={styles.input}>
            <TextInput
                 style={styles.TextInput}
                  placeholder="Please provide product details like Size ,Color ,Type , Material etc."
                   placeholderTextColor="gray"
                     maxLength = {40}
                     multiline={true}
                    onChangeText={(Bname) => setBNAME(Bname)}
        />

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
export default Sell7;



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

     inputtext:{

            color: 'black',
            textAlign: 'center',
            fontSize: 17,
            marginTop: 8,
          },
     
          image:{
              height: 30,
              width: 30,
              marginLeft: 8,
              marginTop: 15,
          },
         
    
        
        input: {
             textAlignVertical: 'top',
             height: '30%',
             width: '90%',
             borderWidth: 1,
             borderColor: 'black',
             borderRadius: 1,
             marginLeft: 20,
             marginTop: 10,
           },
            
 
          TextInput: {
              height: 35,
              marginLeft: 5,
              paddingLeft: 8,
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
      




});
