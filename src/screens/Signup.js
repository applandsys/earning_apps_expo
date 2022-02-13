import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import {  StyleSheet, Text, View,TextInput, Image,Button, TouchableOpacity , SafeAreaView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {AuthContext,AuthProvider} from '../context/AuthContext';

export default function Signup({navigation}) {

    const [name, setName] =  useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const {isloading,register} =  useContext(AuthContext);



    useEffect(() => {
        console.log('effect on Signup ');
      }, []);

  return (

        <SafeAreaView style={styles.container}>
            <Spinner visible={isloading}/>
            <View>
                <Text style={styles.textLogo}>JobFly</Text>
            </View>
            <View style={styles.loginbox}>
                <Text style={styles.signintext }>Create An Account</Text>
                <View style={{ flexDirection: 'row',justifyContent: 'center' }}>
                    <View style={styles.textContent}>
                        <Text>To get more advantages create your account by filling some information.</Text>
                    </View>
                </View>
                <View>          
                    <View style={styles.SectionStyle}>
                        <Image
                            source={require('../../assets/icons/envelop.png')} //Change your icon image here
                            style={styles.ImageStyle}
                        />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Enter Your Name"
                            underlineColorAndroid="transparent"
                            value={name==null?'':name}
                            onChangeText={(text)=>setName(text)}
                        />
                    </View>

                    <View style={styles.SectionStyle}>
                        <Image
                            source={require('../../assets/icons/envelop.png')} //Change your icon image here
                            style={styles.ImageStyle}
                        />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Enter Your Email"
                            underlineColorAndroid="transparent"
                            value={email==null?'':email}
                            onChangeText={(text)=>setEmail(text)}
                        />
                    </View>

                    <View style={styles.SectionStyle}>
                        <Image
                            source={require('../../assets/icons/lock.png')} //Change your icon image here
                            style={styles.ImageStyle}
                        />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Enter Your Password"
                            underlineColorAndroid="transparent"
                            value={password==null?'':password}
                            onChangeText={(text)=>setPassword(text)}
                        />
                    </View>
                </View>

                <View style={{  flexDirection: 'row',justifyContent:'space-between' }}>
                    <View>
                        <Text style={{ marginLeft:20 }}>Remember me ?</Text>
                    </View>
                    <View>
                     <Text style={{ marginRight:20 }}>Forget Password ?</Text> 
                    </View> 
                </View>

                <View style={styles.buttonPurple}>
                 <Button 
                        title="Sign up"
                        color="#45285E"
                        onPress={() =>{  register(name,email,password) } }
                        />           
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginRight: 40, marginTop: 20, marginBottom: 20}}>
                    <View style={{flex: 1, height: 1, backgroundColor: '#C1C1C1'}} />
                    <View>
                        <Text style={{width: 150, textAlign: 'center',  fontSize: 16, fontWeight: "bold"}}>Or sign in with</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: '#C1C1C1'}} />
                </View>
                
               

                <View style={{ flexDirection: 'row',justifyContent: 'center' }}>
                    <View>
                        <Text>Already have an Account </Text>  
                    </View>
                    <View>
                         <TouchableOpacity  onPress={() =>navigation.navigate('Login', { name: 'Login' })}>
                            <Text> Sign In</Text> 
                        </TouchableOpacity> 
                    </View>
                </View>


                <View style={styles.bottomContainer}>
                    <View style={{height: 5, backgroundColor: '#45285E', marginBttom: 40}} />
                </View>
           
            </View>
          <StatusBar style="auto" />
        </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B3B63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo:{
    fontSize: 50,
    color: '#fff',
    marginTop: 50,
    marginBottom:50
  },
  loginbox:{
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'column'
  },
  signintext:{
    fontSize: 25,
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
  },
  textContent:{
    width: '90%', 
    alignItems: 'center', 
    fontSize: 15,
    marginTop: 20
  },
    SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      height: 45,
      borderRadius: 5,
      margin: 10,
  },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    buttonPurple:{
        backgroundColor: '#45285E',
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 40,
        marginLeft: 40,
        marginRight: 40
    }
});