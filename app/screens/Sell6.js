import * as React from 'react';
import { StyleSheet, Text, View, Image,TextInput ,CheckBox} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import  { useState } from "react";

function RequirementSummary({ navigation }) {
    const [eps1, setEPS1] = useState("");
    const [eps2, setEPS2] = useState("");
    const [eps3, setEPS3] = useState("");
    const [eps4, setEPS4] = useState("");
    const [eps35, setEPS5] = useState("");

    
    const [isSelected, setSelection] = useState(false);


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
           <Image style={styles.image1} source={ require('../../assets/Tick.png')}/>
           <Image style={styles.image1} source={ require('../../assets/4.png')}/>
           </View>
           <View  style={styles.imgcont}>
              
               <Text style={styles.inputtext}> Where is Angle located?
             </Text>
        <View style={styles.inputView}>
    
        <TextInput
          style={styles.TextInput}
          placeholder="Floor/Building/Street*"
          placeholderTextColor="grey"
          maxLength = {40}
          onChangeText={(eps1) => setEPS1(eps1)}
        />
       </View>
       <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Locality(Optional)"
          placeholderTextColor="grey"
          maxLength = {40}
          onChangeText={(eps2) => setEPS2(eps2)}
        />
          </View>
          <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="City*"
          placeholderTextColor="grey"
          maxLength = {40}
          onChangeText={(eps3) => setEPS3(eps3)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="State*"
          placeholderTextColor="grey"
          maxLength = {40}
          onChangeText={(eps4) => setEPS4(eps4)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Pincode*"
          placeholderTextColor="grey"
          maxLength = {40}
          onChangeText={(eps5) => setEPS5(eps5)}
        />
      </View>
 
    </View>
    
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text >I agree all the 
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('') } > terms</Text> and 
        <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('') } > privacy policy</Text></Text>
      </View>
      
    
            <View>
            <TouchableOpacity
                style={[styles.button, styles.buttonClose]}>
               <Text style={styles.textStyle}>Start Selling Now</Text>
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
            width:'40%',
            marginLeft: 100,
            marginTop: 10,
           
           
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
         
          checkboxContainer: {
            flexDirection: "row",
            marginBottom: 20,
          },
          checkbox: {
            alignSelf: "center",
          },

          TextStyle: {
 
            color: 'blue',
            textDecorationLine: 'underline'
         
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