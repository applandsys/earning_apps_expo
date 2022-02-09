import {Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Topnav = ({title,navigation}) => {
  return (
    <>
       <View style={styles.topnav}>
            <View>
            <TouchableOpacity  onPress={() => navigation.goBack()} >
                <Image
                    source={require('../../assets/icons/left_arrow.png')} 
                    style={styles.ImageStyle}
                />
            </TouchableOpacity>    
            </View>
            <View> 
                <View style={{alignSelf: 'center', paddingRight: 5}}> 
                    <Text style={{fontWeight:'bold', color: '#fff', fontSize: 20}}>{title}</Text>
                </View>
            </View>
            <View> 
                <Image
                    source={require('../../assets/icons/bell.png')} 
                    style={styles.ImageStyle}
                />
            </View>
        </View>
    </>
  );
};

export default Topnav;


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
