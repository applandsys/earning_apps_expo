import React, {createContext, useEffect, useState} from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../Config';

export const AppContext = createContext();

export const AppProvider = ({children})=>{

    const userInfo =    AsyncStorage.getItem('userInfo'); 

    const [balance, setBalance] = useState(userInfo);


   const getMyStringValue = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('userInfo')
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch(e) {
          // read error
        }
      
        console.log('Done.')
      
      }

    const userBalance =()=>{
       
    }

    return (
        <AppContext.Provider value={{balance,getMyStringValue}}>
             {children}
        </AppContext.Provider>
    );

}