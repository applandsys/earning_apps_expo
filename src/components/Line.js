import { View, Text, Image } from 'react-native'
import React from 'react'

const Line = () => {
  return (
    <View>
       <Image
            source={require('../../assets/illustration/line.png')} //Change your icon image here
            style={{width: '100%', height: 1}}
        />
    </View>
  )
}

export default Line