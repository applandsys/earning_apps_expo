import { StatusBar } from 'expo-status-bar';
import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './src/components/Navigation';
import {AuthContext,AuthProvider} from './src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Navigation></Navigation>
    </AuthProvider>
    
  );
}

