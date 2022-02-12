import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Dimensions ,Button, StyleSheet, Text, View, Image,ImageBackground, TouchableOpacity, TextInput , ScrollView, Modal, Alert , Pressable} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import Bigbutton from '../components/Bigbutton';
import Topnav from '../components/Topnav';
import Line from '../components/Line';
import {BASE_URL} from '../Config';
import Balance from '../components/Balance';

const Mobilebank = ({navigation}) => {

    const [paymentcheck, setPaymentcheck] = useState(0);

    const [numbersave, setNumbersave] = useState(false);


   return (
    <View style={styles.container}> 
      <Topnav title="Payment" navigation={navigation} />
      <ScrollView style={styles.scrollView}>

        <View style={{flexDirection: 'column', marginHorizontal: 10}}>
            
            <View style={[styles.iconrow]}>
                <View style={styles.card}>
                    <View>
                        <Image
                            source={require('../../assets/illustration/bkash_logo.png')} 
                            style={{width:106, height: 70}}
                        />

                    </View>
        
                    <TouchableOpacity onPress={()=>{setPaymentcheck(1)}}>
                    
                    {
                        paymentcheck==1?(<View style={{marginTop: 20}}><Image source={require('../../assets/icons/select_circle_active.png')} style={{height: 21, width: 21, marginRight: 5}}></Image></View>):( <View style={{marginTop: 20}}><Image source={require('../../assets/icons/select_circle.png')} style={{height: 21, width: 21, marginRight: 5}}></Image></View>)
                    }

                    </TouchableOpacity>

                   

                </View> 
                <View style={styles.card}>
                    <View>
                        <Image
                                source={require('../../assets/illustration/rocket_logo.png')} 
                                style={{width:106, height: 70}}
                            />

                    </View>
                  
                    <TouchableOpacity onPress={()=>{setPaymentcheck(2)}}>
                    
                    {
                        paymentcheck==2?(<View style={{marginTop: 20}}><Image source={require('../../assets/icons/select_circle_active.png')} style={{height: 21, width: 21, marginRight: 5}}></Image></View>):( <View style={{marginTop: 20}}><Image source={require('../../assets/icons/select_circle.png')} style={{height: 21, width: 21, marginRight: 5}}></Image></View>)
                    }

                    </TouchableOpacity>
                  
                </View>  
            </View>

            <View style={[styles.iconrow]}>
                <View style={styles.card}>
                    <View>
                        <Image
                            source={require('../../assets/illustration/nagad_logo.png')} 
                            style={{width:59, height: 82}}
                        />

                    </View>
                    <View>
                        <Text>Mobile Banking</Text>
                    </View>

                    <TouchableOpacity onPress={()=>{setPaymentcheck(3)}}>
                    
                    {
                        paymentcheck==3?(<View style={{marginTop: 20}}><Image source={require('../../assets/icons/select_circle_active.png')} style={{height: 21, width: 21, marginRight: 5}}></Image></View>):( <View style={{marginTop: 20}}><Image source={require('../../assets/icons/select_circle.png')} style={{height: 21, width: 21, marginRight: 5}}></Image></View>)
                    }

                    </TouchableOpacity>

                   

                </View> 
                <View style={styles.card}>
                    <View>
                        <Image
                                source={require('../../assets/illustration/upay_logo.png')} 
                                style={{width:90, height: 94}}
                            />

                    </View>
                    <View>
                        <Text>Available Dollar</Text>
                    </View>

                    <TouchableOpacity onPress={()=>{setPaymentcheck(4)}}>
                    
                    {
                        paymentcheck==4?(<View style={{marginTop: 20}}><Image source={require('../../assets/icons/select_circle_active.png')} style={{height: 21, width: 21, marginRight: 5}}></Image></View>):( <View style={{marginTop: 20}}><Image source={require('../../assets/icons/select_circle.png')} style={{height: 21, width: 21, marginRight: 5}}></Image></View>)
                    }

                    </TouchableOpacity>
                  
                </View>  
            </View>

            <View>
                <View style={{marginVertical: 15, marginHorizontal:25}}>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Account Number</Text>
                    </View>
                    <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 8}}> 
                            <TextInput
                                placeholder="Example: $1 USD"
                                underlineColorAndroid="transparent"
                                
                                onChangeText={(text)=>console.log(text)}
                            />
                    </View>
                </View>
            </View>


            <View style={{flexDirection: 'row', marginHorizontal: 25, marginVertical: 25}}>
                <TouchableOpacity onPress={()=>{setNumbersave(!numbersave)}}>
                <View>
                    {
                        numbersave==true?(<Image source={require('../../assets/icons/thik_check.png')} style={{height: 21, width: 21, marginRight: 5}}></Image>):(<Image source={require('../../assets/icons/blank_check.png')} style={{height: 21, width: 21, marginRight: 5}}></Image>)
                    }
                </View>
                </TouchableOpacity>
              
                <View>
                    <Text style={{fontSize: 16}}>Save this number</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Bigbutton title="Payment" onpressed={()=>console.log('yes')}/>
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
    card:{justifyContent: 'center', alignItems: 'center',backgroundColor: '#fff' ,margin: 5,  padding: 1, borderRadius: 10, height: 165, width: 165 },
    iconrow:{flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 10, justifyContent: 'center'},
    footer: {
        position: 'absolute',
        left: 0, 
        top:  Dimensions.get('window').height - 150, 
        width:  Dimensions.get('window').width - 20,
    }
  });

export default Mobilebank;