import { View, Text ,ImageBackground} from 'react-native';
import axios from 'axios';
import React,{useContext, useState, useEffect} from 'react';

import {AuthContext,AuthProvider} from '../context/AuthContext';
import {BASE_URL} from '../Config';


const Balancetext = () => {

  const {userInfo} =  useContext(AuthContext);

  const [balance,setBalance] = useState(0);

  console.log(userInfo.access_token);


  const userBalance = () => {
   // setIsloading(true);

    axios
      .post(
        `${BASE_URL}/api/user/userbalance`,
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.access_token}`},
        },
      )
      .then(res => {
      //  console.log(res.data.balance);
         setBalance(res.data.balance);

      })
      .catch(e => {
        console.log(`logout error ${e}`);
      //  setIsloading(false);
      });
  };


  
  useEffect(() => {
    userBalance();
  }, []);



  return (
    <View>
     <Text style={{fontWeight:'bold'}}>{balance} Dollar</Text>
    </View>
  )
}

export default Balancetext