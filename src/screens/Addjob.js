import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, Image, TouchableOpacity,  Modal} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import BottomNavigator from '../components/BottomNavigator'
import Topnav from '../components/Topnav';

const Addjob = ({navigation}) => {
  

  const [modalVisible, setModalVisible] = useState(false);

  const modalstatus = ()=>{
   // setModalVisible(false);
    console.log('Modal status'+modalVisible);
  }

  return (
    <View style={styles.container}> 

      <View style={{flexDirection: 'column', marginHorizontal: 10}}>

        <Topnav title="Add Job" navigation={navigation} />

        <View style={{height: 150, backgroundColor: '#ccc', marginTop: 20, borderRadius: 10, alignItems: 'center', justifyContent:'center'}}>
          <Image
                source={require('../../assets/icons/upload_icon.png')} 
                style={{width: 131, height: 83}}
            />
        </View>

        <View style={{marginVertical: 15}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Job Type</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 8}}>
            <TouchableOpacity>
              <View>Select Job Type</View><View> <Image source={require('../../assets/icons/down_arrow.png')} style={{width: 25, height: 25}}></Image> </View>
            </TouchableOpacity>   
          </View>
        </View>
        

      </View> 
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
    card:{justifyContent: 'center', alignItems: 'center',backgroundColor: '#fff' ,margin: 2,  padding: 1, borderRadius: 10, height: 109, width: 109 },
    iconrow:{flexDirection: 'row', alignItems: 'center', marginTop: 5, marginHorizontal: 10}
  });

export default Addjob;