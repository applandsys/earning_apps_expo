import { View, Text ,ImageBackground} from 'react-native'
import React from 'react'

const Balance = () => {
  return (
    <View>
      <View style={{ backgroundColor: 'transparent', marginTop: 10, height:121, justifyContent: 'center', alignItems:'center' , borderRadius: 10}}>
            <ImageBackground source={require('../../assets/illustration/purplebackground.png')}  imageStyle={{ borderRadius: 10}} resizeMode="cover" style={{justifyContent: "center", alignItems:'center', height: '100%', width: '100%', borderRadius: 10}}>
                <View style={{flexDirection:'column'}}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#fff'}}>$ 150</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 14,  color: '#fff'}}>Available Dollar</Text>
                        </View>
                </View>
            </ImageBackground>
        </View>
    </View>
  )
}

export default Balance