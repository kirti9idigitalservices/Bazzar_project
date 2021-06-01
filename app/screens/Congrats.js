import * as React from 'react';
import { StyleSheet, Text, View, Image, } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import  { useState } from "react";

function Congrats({ navigation }) {
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
                         <Text style={styles.textStyle}>Kitchenware Items</Text>
                       </TouchableOpacity>
                </View>

                   <Text>Add all your Product/Services to start getting enquiries</Text>
          </View>
          
                    <View style={styles.RectangleShapeView1}>
                    <View style={styles.SquareShapeView} >
                        <Text >Add Photo</Text>

                    </View>
                    <View style={{flexDirection:'column'}}>
                    <View style={styles.RectangleShapeView2}>
                    <Text >Product/Services Name</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.RectangleShapeView3}>
                        <Text>Rs</Text>
                        </View>
                        <View style={styles.RectangleShapeView3}>
                        <Text>Unit</Text>
                        </View>
                     </View>
                     </View>
                    </View>

                  
                    <View style={styles.RectangleShapeView1}>
                    <View style={styles.SquareShapeView} >
                        <Text >Add Photo</Text>

                    </View>
                    <View style={{flexDirection:'column'}}>
                    <View style={styles.RectangleShapeView2}>
                    <Text >Product/Services Name</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.RectangleShapeView3}>
                        <Text>Rs</Text>
                        </View>
                        <View style={styles.RectangleShapeView3}>
                        <Text>Unit</Text>
                        </View>
                     </View>
                     </View>
                    </View>

                   
                    <View style={styles.RectangleShapeView1}>
                    <View style={styles.SquareShapeView} >
                        <Text >Add Photo</Text>

                    </View>
                    <View style={{flexDirection:'column'}}>
                    <View style={styles.RectangleShapeView2}>
                    <Text >Product/Services Name</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.RectangleShapeView3}>
                        <Text>Rs</Text>
                        </View>
                        <View style={styles.RectangleShapeView3}>
                        <Text>Unit</Text>
                        </View>
                     </View>
                     </View>
                    </View>

                   
                    <View style={styles.RectangleShapeView1}>
                    <View style={styles.SquareShapeView} >
                        <Text >Add Photo</Text>

                    </View>
                    <View style={{flexDirection:'column'}}>
                    <View style={styles.RectangleShapeView2}>
                    <Text >Product/Services Name</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.RectangleShapeView3}>
                        <Text>Rs</Text>
                        </View>
                        <View style={styles.RectangleShapeView3}>
                        <Text>Unit</Text>
                        </View>
                     </View>
                     </View>
                    </View>


                    
                    <View style={styles.RectangleShapeView1}>
                    <View style={styles.SquareShapeView} >
                        <Text >Add Photo</Text>

                    </View>
                    <View style={{flexDirection:'column'}}>
                    <View style={styles.RectangleShapeView2}>
                    <Text >Product/Services Name</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.RectangleShapeView3}>
                        <Text>Rs</Text>
                        </View>
                        <View style={styles.RectangleShapeView3}>
                        <Text>Unit</Text>
                        </View>
                     </View>
                     </View>
                    </View>

                    
              
      </View>      
    );
  }

     export default Congrats;

  
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

       
     
         RectangleShapeView1: {
 
        
          width: '90%',
          height: 85,
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 2,
          flexDirection: 'row',
           marginLeft: 15,
           marginTop:5,
          },

          
         RectangleShapeView2: {
 
        
          width: '76%',
          height: 40,
          borderWidth: 1,
          borderColor: 'grey',
          borderRadius: 2,
          marginLeft: 15,
          marginTop:5,
          backgroundColor:'white',
          },

          RectangleShapeView3: {
 
        
            width: '35%',
            height: 23,
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 2,
             marginLeft: 15,
             marginTop:5,
             backgroundColor:'white',
            },
  



          SquareShapeView: {
 
            width: '30%',
            height: 72,
            borderColor: 'grey',
          borderRadius: 1,
          flexDirection: 'row',
           marginLeft: 5,
           marginTop:4.5,
           backgroundColor:'white',
         
          },

});