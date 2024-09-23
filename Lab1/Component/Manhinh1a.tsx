import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function Manhinh1a() {
  return (
    <LinearGradient colors={["#c8f3f6","#fff","#00ccf9"]} locations={[0,0.85,0.99]}style={{flex:1}}>
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
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
          <Text style={{backgroundColor:'#e3c000', fontSize:22, fontWeight:600, paddingTop: 10, paddingRight: 30, paddingBottom: 10, paddingLeft: 30}}>LOGIN</Text>
          <Text style={{backgroundColor:'#e3c000', fontSize:22, fontWeight:600, paddingTop: 10, paddingRight: 30, paddingBottom: 10, paddingLeft: 30}}>SIGN UP</Text>
        </View>
        <View style={{flex:1, alignItems:"center", justifyContent:"flex-start"}}>
        <Text style={{fontSize:22, fontWeight:600}}>HOW WE WORK?</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
