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
             
             <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row'}}>
            <RadioButton style={styles.radio}
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')} />
              <Text style={{fontSize:15, marginTop:8}}>I will update later</Text>
              </View>
              <View style={{flexDirection:'row', marginLeft: 40,}}>
             
                <RadioButton style={styles.radio}
                    value="one"
                    status={ checked === 'one' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('one')}/>
                    <Text style={{fontSize:15,marginTop: 8}}>I am exempted</Text>
             </View>
             

            <View style={{flexDirection:'row', marginLeft: 40,}}>
          <RadioButton style={styles.radio}
              value="two"
              status={ checked === 'two' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('two')} />
              <Text style={{fontSize:15, marginTop:8}}>I don't remember</Text>
       </View>

       
       <View style={{flexDirection:'row',marginLeft: 40,}}>
          <RadioButton style={styles.radio}
              value="three"
              status={ checked === 'three' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('three')} />
              <Text style={{fontSize:15, marginTop:8}}>I don't have it</Text>
            </View>

        
             
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

      
 
          TextInput: {
              height: 35,
              marginLeft: 5,
              paddingLeft: 8,
           },

});