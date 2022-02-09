import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';

import BottomNavigator from '../components/BottomNavigator'

const Home = ({navigation}) => {
  const {userInfo, isLoading, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <Spinner visible={isLoading} />
        <View style={styles.topnav}>
            <View>
                <Image
                                source={require('../../assets/icons/menu_icon.png')} 
                                style={styles.ImageStyle}
                            />
            </View>
            <View style={{flexDirection: 'row',backgroundColor: '#fff', padding: 2, borderRadius: 8, }}> 
  
                <View>  
                    <Image
                            source={require('../../assets/illustration/money.png')} 
                            style={styles.ImageStyle}
                        />
                </View>
                <View style={{alignSelf: 'center', paddingRight: 5}}> 
                    <Text style={{fontWeight:'bold'}}>100 Dollar</Text>
                </View>
            </View>
            <View> 
                <Image
                            source={require('../../assets/icons/bell.png')} 
                            style={styles.ImageStyle}
                        />
            </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
            <View style={{marginVertical: 20}}>
                <Text style={{fontSize:28, fontWeight: 'bold'}}>Job Categories</Text>
            </View>
        </View>

        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.iconrow}>
                <View style={styles.card}>
                    <View>
                    <TouchableOpacity onPress={() =>navigation.navigate('Addjob')}>
                    <Image
                                source={require('../../assets/illustration/youtube-icon.png')} 
                                style={{width: 60, height: 50}}
                            />
                     </TouchableOpacity>        

                    </View>
                   
                    <View>
                        <Text>Youtube</Text>
                    </View>
                

                </View> 
                <View style={styles.card}>
                    <View>
                    <Image
                                source={require('../../assets/illustration/facebook.png')} 
                                style={{width: 50, height: 50}}
                            />

                    </View>
                    <View>
                        <Text>Youtube</Text>
                    </View>
                </View>  
                <View style={styles.card}>
                    <View>
                        <Image
                                source={require('../../assets/illustration/instagram.png')} 
                                style={{width: 50, height: 50}}
                            />

                    </View>
                    <View>
                        <Text>Youtube</Text>
                    </View>
                </View> 
            </View>

            <View style={styles.iconrow}>
                <View style={styles.card}>
                    <View>
                    <Image
                                source={require('../../assets/illustration/twitter.png')} 
                                style={{width: 50, height: 50}}
                            />

                    </View>
                    <View>
                        <Text>Youtube</Text>
                    </View>
                

                </View> 
                <View style={styles.card}>
                    <View>
                    <Image
                                source={require('../../assets/illustration/tiktok.png')} 
                                style={{width: 50, height: 50}}
                            />

                    </View>
                    <View>
                        <Text>Youtube</Text>
                    </View>
                </View>  
                <View style={styles.card}>
                    <View>
                        <Image
                                source={require('../../assets/illustration/web.png')} 
                                style={{width: 50, height: 50}}
                            />

                    </View>
                    <View>
                        <Text>Youtube</Text>
                    </View>
                </View> 
            </View>

            <View style={styles.iconrow}>
                <View style={styles.card}>
                    <View>
                    <Image
                                source={require('../../assets/illustration/sharenews.png')} 
                                style={{width: 50, height: 50}}
                            />

                    </View>
                    <View>
                        <Text>Youtube</Text>
                    </View>
                

                </View> 
                <View style={styles.card}>
                    <View>
                    <Image
                                source={require('../../assets/illustration/google-play.png')} 
                                style={{width: 50, height: 50}}
                            />

                    </View>
                    <View>
                        <Text>Youtube</Text>
                    </View>
                </View>  
                <View style={styles.card}>
                    <View>
                        <Image
                                source={require('../../assets/illustration/game-console.png')} 
                                style={{width: 50, height: 50}}
                            />

                    </View>
                    <View>
                        <Text>Youtube</Text>
                    </View>
                </View> 
            </View>

            <View style={styles.iconrow}>
                <View style={styles.card}>
                    <View>
                    <Image
                                source={require('../../assets/illustration/more.png')} 
                                style={{width: 50, height: 50}}
                            />

                    </View>
                    <View>
                        <Text>Youtube</Text>
                    </View>
                

                </View> 
                <View style={styles.card}>
                    <View>
                    <Image
                                source={require('../../assets/illustration/referral.png')} 
                                style={{width: 50, height: 50}}
                            />

                    </View>
                    <View>
                        <Text>Youtube</Text>
                    </View>
                </View>  
                <View style={styles.card}>
                    <View>
                        <Image
                                source={require('../../assets/illustration/medal.png')} 
                                style={{width: 50, height: 50}}
                            />

                    </View>
                    <View>
                        <Text>Youtube</Text>
                    </View>
                </View> 
            </View>

        </View>
  


        <BottomNavigator navigation={navigation}/>

    </View>
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

export default Home;