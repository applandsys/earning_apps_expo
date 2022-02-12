import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Dimensions ,Button, StyleSheet, Text, View, Image,ImageBackground, TouchableOpacity, TextInput , ScrollView, Modal, Alert , Pressable} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import Bigbutton from '../components/Bigbutton';
import Topnav from '../components/Topnav';
import Line from '../components/Line';
import {BASE_URL} from '../Config';
import Balance from '../components/Balance';

const Referral = ({navigation}) => {

    const [paymentcheck, setPaymentcheck] = useState(0);

    const [numbersave, setNumbersave] = useState(false);


   return (
    <View style={styles.container}> 
      <Topnav title="Referral" navigation={navigation} />
      <ScrollView style={styles.scrollView}>

        <View style={{flexDirection: 'column', marginHorizontal: 10}}>
            
        
              <View style={{justifyContent: 'center', alignItems:'center', marginVertical: 20}}>
                  <Image
                            source={require('../../assets/icons/Invite-bro.png')} 
                            style={{width:305, height: 221}}
                        />
              </View>


            <View style={{marginVertical: 20, marginHorizontal: 20}}>

              <View style={{flexDirection: 'row',  marginVertical: 5}}>
                  <View style={{marginRight: 10}}>
                  <Image
                              source={require('../../assets/icons/account.png')} 
                              style={{width:34, height: 34}}
                          />
                  </View> 
                  <View >
                      <Text style={styles.list_text}>Will get 10 Dollars for open account</Text>
                  </View>  
              </View>

              
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                  <View style={{marginRight: 10}}>
                  <Image
                              source={require('../../assets/icons/crown.png')} 
                              style={{width:34, height: 34}}
                          />
                  </View> 
                  <View >
                      <Text style={styles.list_text}>Will get 10 Dollars for upgrade account</Text>
                  </View>  
              </View>

  
              <View style={{flexDirection: 'row',  marginVertical: 5}}>
                  <View style={{marginRight: 10}}>
                  <Image
                              source={require('../../assets/icons/money-withdrawal.png')} 
                              style={{width:34, height: 34}}
                          />
                  </View> 
                  <View >
                      <Text style={styles.list_text}>Will get 10 Dollars for 1st time cashout</Text>
                  </View>  
              </View>

            </View>

            <View style={{marginVertical: 30}}>
                <Line></Line>
            </View>

            <View>
               <View style={{ marginHorizontal: 5}}>
                 <Text style={{fontSize: 16, fontWeight: 'bold'}}>Referral Code</Text>
               </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', alignItem: 'center'}}>
               <View style={{flex: 2, marginHorizontal: 5}}>
                  <View style={{ backgroundColor: '#fff',justifyContent:'center', height:45, padding: 5, borderRadius: 5, marginTop: 8}}> 
                      <TextInput
                          placeholder="L1gef9m2"
                          underlineColorAndroid="transparent"
                          onChangeText={(text)=>console.log(text)}
                      />
                  </View>
               </View>
               <View style={{flex: 1, marginTop: 9}}>
                  <Bigbutton title="Copy"/> 
               </View>
            </View>


            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 50, marginBottom: 20}}>
                <View style={styles.social_icon}>
                     <Image
                              source={require('../../assets/icons/facebook.png')} 
                              style={{width:43, height: 43}}></Image>
                </View>
                <View style={styles.social_icon}>
                    <Image
                              source={require('../../assets/icons/messenger.png')} 
                              style={{width:43, height: 43}}></Image>
                </View>
                <View style={styles.social_icon}>
                <Image
                              source={require('../../assets/icons/whatsapp.png')} 
                              style={{width:43, height: 43}}></Image>
                </View>
                <View style={styles.social_icon}>
                    <Image
                              source={require('../../assets/icons/gmail.png')} 
                              style={{width:43, height: 43}}></Image>
                </View>
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={{textAlign: 'center', fontSize: 14}}>Share this referral code with your friends to get $10 Dollar</Text>
            </View>
         

       

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

export default Referral;