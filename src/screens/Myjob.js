import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Dimensions ,Button, StyleSheet, Text, View, Image,ImageBackground, TouchableOpacity, TextInput , ScrollView, Modal, Alert , Pressable} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import Bigbutton from '../components/Bigbutton';
import Topnav from '../components/Topnav';
import Line from '../components/Line';
import {BASE_URL} from '../Config';
import Balance from '../components/Balance';

const Myjob = ({navigation}) => {

    const [paymentcheck, setPaymentcheck] = useState(0);

    const [numbersave, setNumbersave] = useState(false);


   return (
    <View style={styles.container}> 
      <Topnav title="My Job" navigation={navigation} />
      <ScrollView style={styles.scrollView}>

        <View style={{flexDirection: 'column', marginHorizontal: 10}}>
            
        
           

       

        </View> 
      </ScrollView>

    </View> //end container
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAF5FF'
    },
    topnav:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 56,
      backgroundColor: '#45285E',
      padding: 10
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    social_icon:{
      marginHorizontal: 10
    },
    list_text:{fontSize: 17},
    card:{justifyContent: 'center', alignItems: 'center',backgroundColor: '#fff' ,margin: 5,  padding: 1, borderRadius: 10, height: 165, width: 165 },
    iconrow:{flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 10, justifyContent: 'center'},
    footer: {
        position: 'absolute',
        left: 0, 
        top:  Dimensions.get('window').height - 150, 
        width:  Dimensions.get('window').width - 20,
    }
  });

export default Myjob;