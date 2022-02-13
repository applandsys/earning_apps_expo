import React, {createContext, useEffect, useState} from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../Config';

export const AuthContext =  createContext();

export const AuthProvider =({children})=>{

    const [userInfo, setuserInfo] = useState({});
    const [isloading, setIsloading] =  useState(false);
    const [splashLoading, setSplashLoading] = useState(false);
    const [alermessage, setAlermessage] = useState(false);
    const [islogin, setIslogin] = useState(false);

    const register = (name, email, password) =>{
        
        setIsloading(true);

        axios.post(`${BASE_URL}/api/user/signup`,{name,email,password})
        .then(res=>{
            let userInfo =  res.data;
            setuserInfo(userInfo);
            AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
            setIsloading(false);
            setIslogin(true);
        })
        .catch(e=>{
            console.log(`regiser erros is ${e}`)
            setIsloading(false);
        });
        

       // console.log("register funcrtion");
    };

    const login = (email,password)=>{
        setIsloading(true);

        axios.post(`${BASE_URL}/api/user/login`,{email,password})
             .then(res=>{
                let userInfo =  res.data;
                if(userInfo.islogin==false){
                 
                  setAlermessage("Wrong User name or Password");
                 
                }else{
                  setuserInfo(userInfo);
                  AsyncStorage.setItem("userInfo",JSON.stringify(userInfo));
                  setIslogin(true);
                }

                setIsloading(false);
            })
            .catch(e=>{
                console.log(`Login errros is ${e}`);
            });
    }

    const logout = () => {
        setIsloading(true);
    
        axios
          .post(
            `${BASE_URL}/api/user/logout`,
            {},
            {
              headers: {Authorization: `Bearer ${userInfo.access_token}`},
            },
          )
          .then(res => {
            console.log(res.data);
             AsyncStorage.removeItem('userInfo');
              setuserInfo({});
             setIsloading(false);
          })
          .catch(e => {
            console.log(`logout error ${e}`);
            setIsloading(false);
          });
      };


      const isLoggedIn = async () => {
        try {
          setSplashLoading(true);
    
          let userInfo = await AsyncStorage.getItem('userInfo');
              userInfo = JSON.parse(userInfo);
    
          if (userInfo) {
             setuserInfo(userInfo);
          }

          setIslogin(true);
    
          setSplashLoading(false);
        } catch (e) {
          setSplashLoading(false);
          console.log(`is logged in error ${e}`);
        }
      };
    
      useEffect(() => {
        isLoggedIn();
      }, []);


      return (
        <AuthContext.Provider
          value={{
            isloading,
            userInfo,
            splashLoading,
            register,
            login,
            logout,
            islogin,
            alermessage
          }}>
          {children}
        </AuthContext.Provider>
      );
   

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});