import * as React from 'react';
import { StyleSheet, View, Image, Text,TextInput,TouchableOpacity,} from "react-native";

function PostR({ navigation }) {

    return (
        
        <View styles={styles.container}>
          
            <View style={styles.RectangleShapeView}>
            <Image style={styles.image} source={ require('../../assets/Back.png')}/>
            <Text style={styles.textstyle}>Post Requirement</Text>
            </View> 
            <View>
                <Text style={{fontSize: 40,color:'#45B39D', marginTop: 30,marginLeft: 5}}>
                    Let Us Provide You Verified Sellers
                </Text>
            </View>
            
         <View style={styles.input}>
            <TextInput
            placeholder="Enter product name" 
              maxLength = {40}  />
            <Image style={styles.image1} source={ require('../../assets/Mick.png')}/>
         </View>  

              
           <View>
            <TouchableOpacity
                style={[styles.button, styles.buttonClose]}>
               <Text style={styles.textStyle1}>Next</Text>
               </TouchableOpacity>
               <Image style={styles.image2} source={ require('../../assets/Illustration.png')}/>

              
         </View>    

           
    </View>
      
    );
  }
  export default PostR;

  
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
    image:{
              height: 33,
              width: 30,
              marginLeft: 8,
              marginTop: 15,
          },

          image1:{
            height: 33,
            width: 30,
            marginLeft: 158,
            marginTop: 15,
        },
   
        image2:{
            height: 280,
            width: 280,
            marginLeft: 40,
            //marginTop: 2,
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

    input: {
        
         height: '10%',
         width: '88%',
         borderWidth: 1,
         borderColor: '#45B39D',
         borderRadius: 1,
         marginLeft:20,
         marginTop: 25,
         flexDirection:'row',
       },

       button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        
      },

      buttonClose: {
        backgroundColor: '#45B39D',
        width:'50%',
        marginLeft: 90,
        marginTop: 30,
       
       
    },
       
    textStyle1: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
       
      },

      
});