import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function Manhinh1c() {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);


  const handleChangeText = (text:string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    // Tự động chuyển sang ô tiếp theo
    if (text && index < 5) {
      const inputElement = inputs.current[index+1] as HTMLInputElement
      inputElement.focus();
    }
  };

  return (
    <View style={{ backgroundColor: '#00ccf9', flex: 1, paddingLeft: 25, paddingRight: 25 }}>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        <Fontisto name="locked" size={150} color="black" />
      </View>

      <View style={{ flex: 2 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 26, fontWeight: '600' }}>FORGET</Text>
          <Text style={{ fontSize: 26, fontWeight: '600' }}>PASSWORD</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'space-around', paddingBottom: 25 }}>
          <Text style={{ textAlign: 'center', fontWeight: '500' }}>
            Provide your account's email for which you want to reset your password
          </Text>
          <View style={{ flexDirection: 'row', backgroundColor: "#c4c4c4", height: 50, alignItems: 'center', justifyContent:"space-evenly" }}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.input}
                value={digit}
                onChangeText={(text) => handleChangeText(text, index)}
                keyboardType="numeric"
                maxLength={1}
                ref={(input:never) => (inputs.current[index] = input)}
                accessible={true}
                accessibilityLabel={`Digit ${index + 1}`}
              />
            ))}
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ backgroundColor: '#e3c000', fontSize: 22, fontWeight: '600', textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>
            NEXT
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});
