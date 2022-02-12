import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Button, StyleSheet, Text, View, Image, TouchableOpacity, TextInput , ScrollView, Modal, Alert , Pressable} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Spinner from 'react-native-loading-spinner-overlay';

import Bigbutton from '../components/Bigbutton';
import Topnav from '../components/Topnav';
import {BASE_URL} from '../Config';
import { TouchableHighlight } from 'react-native-web';

const Addjob = ({navigation}) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [countryVisible, setCountryVisible] = useState(false);
  const [videnceVisible, setEvidenceVisible] = useState(false);

  const evidencelist = ['Image','Video'];

  const [evidencecheck,setEvidencecheck] = useState(0);
  const [evidanceitem,setEvidanceitem] = useState('Select Image or Video');

  const [results, setResults] = useState([]);
  const [country, setCountry] = useState([]);
  const [countrycheck,setCountrycheck] = useState(0);
  const [countryitem, setCountryitem] = useState('Select Country');

  const [descrtiption, setDescrtiption] = useState(null);

  const [yourlink, setYourlink] = useState(null);
  const [jobcheck,setJobcheck] = useState(0);
  const [jobitem,setJobitem] = useState('Select Job Type');

  const [hirepeople,setHirepeople] =  useState(null);
  const [payperson,setPayperson] =  useState(null);
  

  const [imagebase64, setImagebase64] = useState(null);

  const evidancechecked = (key,item)=>{
      setEvidencecheck(key);
      setEvidenceVisible(false);
      setEvidanceitem(item);
  }

  const uploadImage = ()=>{
    let options = {
      mediaType : 'photo',
      quality: 1,
      includeBase64: true
    }

    launchImageLibrary(options, response => {
      if(response.didCancel){
        console.log('cancled');
      }else if(response.errorCode=='permission'){
        console.log(response.errorCode);
      }else if(response.errorCode=='permission'){
        console.log(response.errorCode);
      }else if(response.assets[0].fileSize > 2097152){
        console.log(response.assets[0].fileSize);
      }else{
        setImagebase64(response.assets[0].base64);
      }
    });
  }
  

  const jobchecked = (key,item)=>{
      setModalVisible(false);
      setJobcheck(key);
      setJobitem(item);
  }

  const countrychecked = (key,item)=>{
    setCountryVisible(false);
    setCountrycheck(key);
    setCountryitem(item);
  }


  const getjoblist = () =>{
    axios.get(`${BASE_URL}/api/user/joblist`)
    .then(res=>{
        let jobresponse =  res.data.job;
        setResults(jobresponse ?? []);
    })
    .catch(e=>{
        console.log(`regiser erros is ${e}`)
    });
  };

  
  const countryblist = () =>{      
    axios.get(`${BASE_URL}/api/user/countrylist`)
    .then(res=>{
        let country =  res.data.country;
        setCountry(country ?? []);
    })
    .catch(e=>{
        console.log(`regiser erros is ${e}`)
    });
  };

  useEffect(() => {
    getjoblist();
    countryblist();
  }, [])


  const paymentProcess = (payperson,hirepeople,jobcheck,yourlink,descrtiption,countrycheck,evidencecheck,imagebase64) =>{
   
      let postdata = {payperson,hirepeople,jobcheck,yourlink,descrtiption,countrycheck,evidencecheck,imagebase64};

      axios.post(`${BASE_URL}/api/user/addjob`,postdata)
      .then(res=>{
          let response =  res.data;
        
          console.log(response);
          navigation.navigate('Payment');
      })
      .catch(e=>{
          console.log(`adjob erros is ${e}`)
      });
    
  };
  
  return (
    <View style={styles.container}> 

      <Topnav title="Add Job" navigation={navigation} />

      <ScrollView style={styles.scrollView}>
      <View style={{flexDirection: 'column', marginHorizontal: 10}}>

       
        <View style={{height: 150, backgroundColor: '#ccc', marginTop: 20, borderRadius: 10, alignItems: 'center', justifyContent:'center'}}>

       
          <View>
          {
              imagebase64==null?( 
                <TouchableOpacity onPress={()=>{uploadImage()}}>
                  <Image
                    source={require('../../assets/icons/upload_icon.png')} 
                    style={{width: 131, height: 83}}
                  />
                </TouchableOpacity>
                
              ):( <Image
                    source={{uri: imagebase64}}
                  style={{width: 131, height: 83}}
              />)
              
            }
          </View>
      
         
        </View>

        <View style={{marginVertical: 15}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Job Type</Text>
          </View>
          <Pressable onPress={()=>setModalVisible(true)}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 8}}> 
              <View><Text>{jobitem}</Text></View>
              <View> 
                  <Image source={require('../../assets/icons/down_arrow.png')} style={{width: 25, height: 25}}></Image> 
              </View>
          </View>
          </Pressable>
        </View>

        <View style={{marginVertical: 15}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Description</Text>
          </View>
          <View style={{alignItems:'center', backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 8}}> 
             
                  <TextInput
                      multiline={true}
                      numberOfLines={5}
                      value={descrtiption==null?'':descrtiption}
                      onChangeText={(text)=>{setDescrtiption(text)}}
                      style={{ height:100, width: '100%' , textAlignVertical: 'top'}}/>
             
          </View>
        </View>

        <View style={{marginVertical: 15}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Submit Your Link</Text>
          </View>
          <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 8}}> 
                <TextInput
                    placeholder="Submit Your Link"
                    underlineColorAndroid="transparent"
                    value={yourlink==null?'':yourlink}
                    onChangeText={(text)=>setYourlink(text)}
                />
          </View>
        </View>

        <View style={{marginVertical: 15}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>In which country do you want to give a job?</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 8}}> 
              <View><Text>{countryitem}</Text></View>
              <View> 
                  <TouchableOpacity onPress={()=>{setCountryVisible(true)}}> 
                      <Image source={require('../../assets/icons/down_arrow.png')} style={{width: 25, height: 25}}></Image> 
                  </TouchableOpacity>  
              </View>
          </View>
        </View>

        <View style={{marginVertical: 15}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>How many people can you want to hire?</Text>
          </View>
          <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 8}}> 
                <TextInput
                    placeholder="Example: 50 People"
                    underlineColorAndroid="transparent"
                    value={hirepeople==null?'':hirepeople}
                    onChangeText={(text)=>setHirepeople(text)}
                />
          </View>
        </View>

        <View style={{marginVertical: 15}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>How much do you want to pay each person?</Text>
          </View>
          <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 8}}> 
                <TextInput
                    placeholder="Example: $1 USD"
                    underlineColorAndroid="transparent"
                    value={payperson==null?'':payperson}
                    onChangeText={(text)=>setPayperson(text)}
                />
          </View>
        </View>

        
   
        <View style={{marginVertical: 15}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Will people submit as evidence?</Text>
          </View>
          <Pressable onPress={()=>setEvidenceVisible(true)}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', backgroundColor: '#fff', padding: 10, borderRadius: 5, marginTop: 8}}> 
              <View><Text>{evidanceitem}</Text></View>
              <View> 
                  <Image source={require('../../assets/icons/down_arrow.png')} style={{width: 25, height: 25}}></Image> 
              </View>
          </View>
          </Pressable>
        </View>

        <View style={{marginVertical: 50}}>
            <Bigbutton title="Payment" onpressed={()=>paymentProcess(payperson,hirepeople,jobcheck,yourlink,descrtiption,countrycheck,evidencecheck,imagebase64)}/>
        </View>
       

      <Modal
        transparent={true}
        visible={modalVisible}>
          <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)', flex: 1}}>
             <View style={{marginTop: 100, backgroundColor: '#fff', margin: 20, padding:10, borderRadius: 10}}>
                 
                    {
                      results.map((item,key)=>{
                        return(
                          
                          <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 6}} key={item.id}>
                                <View>
                                    <Text style={{fontSize: 15}} >{item.jobname}</Text>
                                </View> 
                                <View>
                                    {
                                      jobcheck==item.id?(
                                        <Image source={require('../../assets/icons/select_circle_active.png')} style={{height: 21, width: 21, marginRight: 5}}></Image>):
                                        ( <TouchableOpacity onPress={()=>jobchecked(item.id,item.jobname)}>
                                            <Image source={require('../../assets/icons/select_circle.png')} style={{height: 21, width: 21, marginRight: 5}}></Image>
                                        </TouchableOpacity>)
                                    }
                                </View>
                          </View>
                        )
                      })
                    }
             </View>
          </View>  
      </Modal>

        <View>
        <Modal
            transparent={true}
            visible={countryVisible}>
              <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)', flex: 1}}>
                <View style={{marginTop: 100, backgroundColor: '#fff', margin: 20, padding:10, borderRadius: 10}}>
                    
                        {
                          country.map((item,key)=>{
                            return(
                              
                              <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 6}} key={item.id}>
                                    <View>
                                        <Text style={{fontSize: 15}} >{item.country_name}</Text>
                                    </View> 
                                    <View>
                                        {
                                          countrycheck==item.id?(
                                            <Image source={require('../../assets/icons/select_circle_active.png')} style={{height: 21, width: 21, marginRight: 5}}></Image>):
                                            ( <TouchableOpacity onPress={()=>countrychecked(item.id,item.country_name)}>
                                                <Image source={require('../../assets/icons/select_circle.png')} style={{height: 21, width: 21, marginRight: 5}}></Image>
                                            </TouchableOpacity>)
                                        }
                                    </View>
                              </View>
                            )
                          })
                        }
                </View>
              </View>  
            </Modal>
        </View>    

            

      <View>
        <Modal
            transparent={true}
            visible={videnceVisible}>
              <View style={{backgroundColor: 'rgba(52, 52, 52, 0.8)', flex: 1}}>
                <View style={{marginTop: 100, backgroundColor: '#fff', margin: 20, padding:10, borderRadius: 10}}>
                    
                        {
                          evidencelist.map((item,key)=>{
                            return(
                              
                              <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 6}} key={key}>
                                    <View>
                                        <Text style={{fontSize: 15}} >{item}</Text>
                                    </View> 
                                    <View>
                                        {
                                          evidencecheck==key?(
                                            <Image source={require('../../assets/icons/select_circle_active.png')} style={{height: 21, width: 21, marginRight: 5}}></Image>):
                                            ( <TouchableOpacity onPress={()=>evidancechecked(key,item)}>
                                                <Image source={require('../../assets/icons/select_circle.png')} style={{height: 21, width: 21, marginRight: 5}}></Image>
                                            </TouchableOpacity>)
                                        }
                                    </View>
                              </View>
                            )
                          })
                        }
                </View>
              </View>  
            </Modal>
        </View>    
      

      </View> 
      </ScrollView>

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