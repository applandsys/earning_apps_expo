import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../Config';

export const AuthContext =  createContext();

export const AuthProvider =({children})=>{

    const [userInfo, setuserInfo] = useState({});
    const [isloading, setIsloading] =  useState(false);
    const [splashLoading, setSplashLoading] = useState(false);


    const register = (name, email, password) =>{
        
        setIsloading(true);

        axios.post(`${BASE_URL}/api/user/signup`,{name,email,password})
        .then(res=>{
            let userInfo =  res.data;
            setuserInfo(userInfo);
            AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
            setIsloading(false);
            console.log(userInfo);
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
                setuserInfo(userInfo);
                AsyncStorage.setItem("userInfo",JSON.stringify(userInfo));
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
    
          setSplashLoading(false);
        } catch (e) {
          setSplashLoading(false);
          console.log(`is logged in error ${e}`);
        }
      };
    
      useEffect(() => {
        isLoggedIn();
        console.log("yes effected");
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
          }}>
          {children}
        </AuthContext.Provider>
      );
   

}