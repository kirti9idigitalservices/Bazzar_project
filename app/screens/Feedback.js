import * as React from 'react';
import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Button } from "react-native";

function Feedback({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Feedback</Text>
              <TextInput
               style={styles.input}
             placeholder="Please leave your comments and suggestion to help us improve." 
               maxLength = {100}
                   multiline={true}
                  />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Feedback</Text>
        </Pressable>
        <Button
          title="Requirements"
          onPress={() => navigation.navigate('RequirementSummary')}
        />
      </View>
     
    );
  }
  export default Feedback;

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 2
    },
    modalView: {
     // margin: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.75,
      shadowRadius: 4,
      elevation: 5, 
      height:'45%',
      width: '90%',
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#45B39D',
      width:'60%',
      marginTop:15,
      marginBottom: 30,
      
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
     
    },
    modalText: {
      marginBottom: 5,
      textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 27,
        color: '#45B39D',
    },
     input: {
      textAlignVertical: 'top',
       height: '60%',
       width: '90%',
       borderWidth: 1,
       borderColor: 'black',
       borderRadius: 1,
     },
  });