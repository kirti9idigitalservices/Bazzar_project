import * as React from 'react';
import { StyleSheet, Text, View, Image,TextInput} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import  { useState } from "react";
import { RadioButton } from 'react-native-paper';

function RequirementSummary({ navigation }) {
    const [eps1, setEPS1] = useState("");
    const [checked, setChecked] = React.useState('');
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
           <Image style={styles.image1} source={ require('../../assets/Tick.png')}/>
           <Image style={styles.image1} source={ require('../../assets/3.png')}/>
           <Image style={styles.image1} source={ require('../../assets/4.png')}/>
           </View>
           
              
         <Text style={styles.inputtext}>Add your GSTIN-built trust and increase business</Text>
            <View style={styles.radioview}>
                <View style={{flexDirection:'row'}}>
                <RadioButton style={styles.radio}
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}/>
                    <Text style={{fontSize:15,marginTop: 8}}>I have GST</Text>
             </View>
              <View style={styles.inputView}>
    
            <TextInput
                style={styles.TextInput}
                placeholder="eg- AXCDPPK4212A21"
                placeholderTextColor="grey"
                maxLength = {40}
                onChangeText={(eps1) => setEPS1(eps1)}/>
            </View>

            <View style={{flexDirection:'row'}}>
          <RadioButton style={styles.radio}
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')} />
              <Text style={{fontSize:15, marginTop:8}}>I will update later</Text>
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
            marginTop: 8,
          },

          radio:{
            height: 30,
            width: 30,
            borderRadius: 100,
            borderWidth: 2,
           
            alignItems: 'center',
            justifyContent: 'center',
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
               marginTop:5,
               marginLeft: 25,
               

  
              },
 
          TextInput: {
              height: 35,
              marginLeft: 5,
              paddingLeft: 8,
           },

});