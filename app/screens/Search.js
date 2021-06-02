import * as React from 'react';
import { StyleSheet, View, Image,} from "react-native";
import { Searchbar } from 'react-native-paper';

function Search({ navigation }) {

  
    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
  
    
    return (
        
        <View styles={styles.container}>
          
            <View style={styles.RectangleShapeView}>
            <Image style={styles.image} source={ require('../../assets/Back.png')}/>
            <Searchbar
             style={styles.searchbar}
                placeholder="Search for products"
                onChangeText={onChangeSearch}
                value={searchQuery}/>
            <Image style={styles.image} source={ require('../../assets/Mic.png')}/>
           
           </View>        
    </View>
      
    );
  }
  export default Search;

  
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
    searchbar:{
      width:'75%',
      marginLeft:5,
      backgroundColor: '#45B39D',
    },  

});