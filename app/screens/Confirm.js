import * as React from 'react';
import { StyleSheet, Text, View, Image,TextInput} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import  { useState } from "react";
import { RadioButton } from 'react-native-paper';

function RequirementSummary({ navigation }) {
    const [checked, setChecked] = React.useState('');
    return (
        
        <View styles={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.RectangleShapeView}>
            <Image style={styles.image} source={ require('../../assets/Back.png')}/>
            <Text style={styles.textstyle}> Face Mask</Text>
            <Image style={styles.image} source={ require('../../assets/Price_.png')}/>
           </View>
           
           <Text style={{fontSize:15,marginTop: 8, marginRight:200, marginLeft: 12,}}>Are you looking to sell</Text>
         
            <View style={styles.radioview}>
                <View style={{flexDirection:'row'}}>
               
                <RadioButton style={styles.radio}
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}/>
                    <Text style={{fontSize:15,marginTop: 8, marginRight:240,}}>Yes</Text>
             </View>
              

            <View style={{flexDirection:'row'}}>
           
             <RadioButton style={styles.radio}
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')} />
              <Text style={{fontSize:15, marginTop:8,marginRight:255,}}>No</Text>
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

    radioview:{
      marginLeft: 20,  
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

          radio:{
            height: 30,
            width: 30,
            borderRadius: 100,
            borderWidth: 2,
          
          },
         

          image:{
              height: 30,
              width: 30,
              marginLeft: 8,
              marginTop: 15,
          },
         
       inputView: {
          backgroundColor: '#ccc',
            borderRadius: 30,
              width: '80%',
               height: 34,
               marginBottom: 5,
               marginTop:5,
               marginLeft: 25,
               

  
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
            width:'50%',
            marginTop:30,
            marginBottom: 30,
            marginLeft: 90,
           
        },

        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
           
          },

});