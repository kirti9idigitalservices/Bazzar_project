import * as React from 'react';
import { StyleSheet, View, Image, Text,TextInput,TouchableOpacity,} from "react-native";

function Share({ navigation }) {

    return (
        
        <View styles={styles.container}>
          <View>
           
               <Image style={styles.image2} source={ require('../../assets/Illustrate.png')}/>
          </View>  

          <View style={styles.input}>
              <View style={{flexDirection:'row',}}>
            <Image style={styles.image1} source={ require('../../assets/Whatsapp.png')}/>
            <Image style={styles.image1} source={ require('../../assets/Twitter.png')}/>
            <Image style={styles.image1} source={ require('../../assets/Hangouts.png')}/>
            <Image style={styles.image1} source={ require('../../assets/Skype.png')}/>
            </View>

            <View style={{flexDirection:'row',}}>
            <Image style={styles.image1} source={ require('../../assets/Message_I.png')}/>
            <Image style={styles.image1} source={ require('../../assets/Messenger.png')}/>
            <Image style={styles.image1} source={ require('../../assets/Gmail.png')}/>
            <Image style={styles.image1} source={ require('../../assets/Email.png')}/>
            </View>
            
         </View>  




        </View>

        
      
    );
  }
  export default Share;

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 2,

    },
    
    image1:{
        height: 73,
        width: 70,
        marginTop: 15,
        marginLeft:5,
        marginRight: 5,
    },
      image2:{
            height: 280,
            width: 280,
            marginLeft: 40,
            
        },
        input: {
        
            height: '40%',
            width: '93%',
            borderWidth: 4,
            borderColor: 'grey',
            borderRadius: 5,
            marginLeft:15,
            marginTop: 25,
    
          },
   

      
});