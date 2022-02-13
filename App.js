import { StatusBar } from 'expo-status-bar';
import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './src/components/Navigation';
import {AuthContext,AuthProvider} from './src/context/AuthContext';
import {AppContext,AppProvider} from './src/context/AppContext';

export default function App() {
  return (
    <AppProvider>
        <AuthProvider>
          <Navigation></Navigation>
        </AuthProvider>
    </AppProvider>
   
  );
}

