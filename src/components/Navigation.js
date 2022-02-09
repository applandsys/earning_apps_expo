import { StatusBar } from 'expo-status-bar';
import React, { useState,useContext } from 'react';
import {  StyleSheet, Text, View,TextInput, Image,Button , TouchableOpacity , SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../src/screens/Login';
import Signup from '../../src/screens/Signup';
import Home from '../../src/screens/Home';
import ClientReport from '../../src/screens/ClientReport';
import Referral from '../../src/screens/Referral';
import Addjob from '../../src/screens/Addjob';

import {AuthContext,AuthProvider} from '../context/AuthContext';

export default function Navigation() {

    const Stack = createNativeStackNavigator();
    const {userInfo} =  useContext(AuthContext);
   

  return (
      <AuthProvider>
        <NavigationContainer> 
            <Stack.Navigator>
            {
                userInfo.access_token?(  
                   <>
                        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                        <Stack.Screen name="ClientReport" component={ClientReport} options={{headerShown: false}}/>
                        <Stack.Screen name="Referral" component={Referral} options={{headerShown: false}}/>               
                        <Stack.Screen name="Addjob" component={Addjob} options={{headerShown: false}}/>               
                   </> 
                ):(
                    <>
                        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/> 
                   </> 

                )
            }

            </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
  
  );
}
