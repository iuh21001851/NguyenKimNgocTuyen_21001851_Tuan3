import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from '@expo/vector-icons/Fontisto';
export default function Manhinh1b() {
  return (
    <View style={{backgroundColor: '#00ccf9', flex:1, paddingLeft:25, paddingRight:25}}>
      <View style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}>
      <Fontisto name="locked" size={150} color="black"/>
      </View>
      
      <View style={{flex:2}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:26, fontWeight:600}}>FORGET</Text>
          <Text style={{fontSize:26, fontWeight:600}}>PASSWORD</Text>
        </View>
        <View style={{flex:1, justifyContent:'space-around', paddingBottom:25}}>
          <Text style={{ textAlign:'center', fontWeight:500}}>Provide your account's email for which you want to reset your password</Text>
          <View style={{flexDirection:'row', backgroundColor:"#c4c4c4", height:50, alignItems:'center'}}>
            <Fontisto name="email" size={24} color="black" style={{marginLeft:15, marginRight:15}} />
            <TextInput
                placeholder="Email"
                keyboardType="email-address"
            />

          </View>
        </View>
        <View style={{flex:1}}>
          <Text style={{backgroundColor:'#e3c000', fontSize:22, fontWeight:600, textAlign:'center', paddingTop:10, paddingBottom:10}}>NEXT</Text>
          
        </View>
      </View>
    </View>
  );
}
