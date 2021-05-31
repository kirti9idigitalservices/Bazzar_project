import * as React from 'react';
import { StyleSheet, Text, View, Image,TextInput } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import  { useState } from "react";

function RequirementSummary({ navigation }) {
    const [email, setEmail,] = useState("");
    return (
        
        <View styles={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.RectangleShapeView}>
            <Image style={styles.image} source={ require('../../assets/hamburger.png')}/>
            <Text style={styles.textstyle}> Congratulation! Now you are a Seller on BAZZAR</Text>
           
           </View>
           <View style={{marginTop:3}}> 
           <Text>Product/Services in your catalog</Text>
           <View style={{flexDirection:'row'}}>
           <TouchableOpacity
                style={[styles.button, styles.buttonClose]}>
               <Text style={styles.textStyle}>Jewqllery</Text>
               </TouchableOpacity>
               <TouchableOpacity
                style={[styles.button, styles.buttonClose]}>
               <Text style={styles.textStyle}>Women Clothing</Text>
               </TouchableOpacity>
               <TouchableOpacity
                style={[styles.button, styles.buttonClose]}>
               <Text style={styles.textStyle}>kitchenware Items</Text>
               </TouchableOpacity>

               </View>
           <Text>Add all your Product/Services to start getting enquiries</Text>

           </View>
           <View style={{marginTop:15, marginLeft: 17}}>
          < TextInput
               style={styles.input}
             placeholder=''  
               />
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
             marginTop: 7,
             marginRight: 50,
             marginLeft:10,
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
          
          button: {
            borderRadius: 10,
            elevation: 2,
            alignItems:'center',
            justifyContent: 'center',
            
          },

          buttonClose: {
            backgroundColor: '#45B39D',
            width:'95%',
            height: 40,
            marginLeft: 10,
            marginTop: 10,
            marginRight:13, 
            },

       
        input: {
         textAlignVertical: 'top',
          height: '45%',
          width: '95%',
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 1,
        },

});