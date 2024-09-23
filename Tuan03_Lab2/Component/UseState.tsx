import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const randomDiceRoll = () => Math.floor(Math.random()*6)+1;
export default function UseState() {
    const [diceRolls, setDiceRolls] = useState<number[]>([]);
  return (
   <View style={{flex:1, justifyContent: "center"}}>
        <Button title="Roll dice!"
        onPress={()=>{
            setDiceRolls([...diceRolls, randomDiceRoll()])
        }}
        />
        {diceRolls.map((diceRoll, index)=>(
            <Text style={{fontSize:24}} key={index}>
                {diceRoll}
            </Text>
        ))}
   </View> 
  );
}
