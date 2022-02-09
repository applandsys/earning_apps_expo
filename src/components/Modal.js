import { View, Text } from 'react-native'
import React from 'react'

const Modal = (text) => {
  return (
    <Modal
    transparent={true}
    visible={modalVisible}
  >
      <View style={{backgroundColor: '#000', flex: 1}}>
         <View style={{marginTop: 100, backgroundColor: '#fff', height: 200, margin: 20, borderTopEndRadius: 10}}>
              <View>
                  <Text>Modal text</Text>
              </View>  
         </View>
      </View>  
  </Modal>
  )
}

export default Modal