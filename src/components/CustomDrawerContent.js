import { StatusBar } from 'expo-status-bar';
import React, { useState,useContext } from 'react';
import {  StyleSheet, Text, View,TextInput, Image,Button , TouchableOpacity , SafeAreaView , useWindowDimensions} from 'react-native';

export default function CustomDrawerContent(props) {
    const width = useWindowDimensions().width * 0.3;
  
  //  console.log(props);

    return (
      <>
        <View style={styles.menuContainer}>
          <View
            style={[
              styles.menuItemsCard,
              { backgroundColor: '#fff2df', width: width, height: width },
            ]}>
            <>
              <View
                style={[styles.circleContainer, { backgroundColor: '#FFC56F' }]}>
               
                 <Text>Fuck</Text>
              </View>
            </>
         
          </View>
       
        </View>
      </>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    menuItemsCard: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    circleContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      padding: 10,
    },
  });