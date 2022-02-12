import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';


const Bigbutton = ({title, onpressed}) => {
  return (
     <TouchableOpacity onPress={onpressed}>
      <View style={{height: 45, backgroundColor: '#45285E', alignItems: 'center', justifyContent:'center', borderRadius: 8}}>
         <Text style={{fontSize: 18, color: '#fff'}}>{title}</Text>
      </View>
     </TouchableOpacity> 
    
  )
}

export default Bigbutton