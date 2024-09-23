import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function Manhinh1() {
  return (
    <View style={{backgroundColor: '#00ccf9', flex:1}}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <View style={{height:150, width:150, borderRadius:100, borderWidth:15}}></View>
      </View>
      
      <View style={{flex:1}}>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={{fontSize:26, fontWeight:600}}>GROW</Text>
          <Text style={{fontSize:26, fontWeight:600}}>YOUR BUSSINESS</Text>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
          <Text style={{margin:25, textAlign:'center', fontWeight:500}}>We will help you to grow your bussiness using online server</Text>
        </View>
        <View style={{flex:2, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
          <Text style={{backgroundColor:'#e3c000', fontSize:22, fontWeight:600, paddingTop: 10, paddingRight: 30, paddingBottom: 10, paddingLeft: 30, borderRadius:10}}>LOGIN</Text>
          <Text style={{backgroundColor:'#e3c000', fontSize:22, fontWeight:600, paddingTop: 10, paddingRight: 30, paddingBottom: 10, paddingLeft: 30, borderRadius:10}}>SIGN UP</Text>
        </View>
      </View>
    </View>
  );
}
