import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Dimensions ,Button, StyleSheet, Text, View, Image,ImageBackground, TouchableOpacity, TextInput , ScrollView, Modal, Alert , Pressable} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import Bigbutton from '../components/Bigbutton';
import Topnav from '../components/Topnav';
import Line from '../components/Line';
import Balance from '../components/Balance';
import {BASE_URL} from '../Config';

const Payment = ({navigation}) => {

    const [paymentcheck, setPaymentcheck] = useState(0);

   return (
    <View style={styles.container}> 
      <Topnav title="Payment" navigation={navigation} />
      <ScrollView style={styles.scrollView}>

        <View style={{flexDirection: 'column', marginHorizontal: 10}}>
            
            <Balance></Balance>

            <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 20, marginHorizontal: 3}}>
                <View>
                    <Text style={{fontSize: 15}}> 50 Peoples Pay : </Text>
                </View>
                <View>
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>$ 10 </Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 5, marginHorizontal: 3}}>
                <View>
                    <Text style={{fontSize: 15}}> App Fee (10%) : </Text>
                </View>
                <View>
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}>$ 0.50 </Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: 20, marginHorizontal: 3}}>
                <View>
                    <Text style={{fontSize: 15, color: '#EF6B64'}}> Total Cost : </Text>
                </View>
                <View>
                    <Text style={{fontSize: 17, fontWeight: 'bold', color: '#EF6B64'}}>$ 0.50 </Text>
                </View>
            </View>

            <View style={{marginVertical: 30}}>
                <Line></Line>
            </View>

            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Select Payment Method</Text>
            </View>

            <View style={styles.iconrow}>
                <View style={styles.card}>
                    <View>
                        <Image
                                    source={require('../../assets/illustration/mobile-payment.png')} 
                                    style={{width: 50, height: 50}}
                                />

                    </View>
                    <View>
                        <Text>Mobile Banking</Text>
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
                                source={require('../../assets/illustration/money.png')} 
                                style={{width: 50, height: 50}}
                            />

                    </View>
                    <View>
                        <Text>Available Dollar</Text>
                    </View>

                    <TouchableOpacity onPress={()=>{setPaymentcheck(2)}}>
                    
                    {
                        paymentcheck==2?(<View style={{marginTop: 20}}><Image source={require('../../assets/icons/select_circle_active.png')} style={{height: 21, width: 21, marginRight: 5}}></Image></View>):( <View style={{marginTop: 20}}><Image source={require('../../assets/icons/select_circle.png')} style={{height: 21, width: 21, marginRight: 5}}></Image></View>)
                    }

                    </TouchableOpacity>
                  
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

export default Payment;