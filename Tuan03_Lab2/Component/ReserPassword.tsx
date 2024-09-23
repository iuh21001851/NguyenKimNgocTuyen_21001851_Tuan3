import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, Image, Linking, TouchableOpacity, TextInput } from 'react-native';

export default function ResetPassword() {
    const [valuePassword, setValuePassword] = useState('Vui long nhan tuy chon!!');
    const [includeLengthCase, setIncludeLengthCase] = useState(Number);
    const [includeLowerCase, setIncludeLowerCase] = useState(false);
    const [includeUpperCase, setIncludeUpperCase] = useState(false);
    const [includeNumberCase, setIncludeNumberCase] = useState(false);
    const [includeSymbolCase, setIncludeSymbolCase] = useState(false);
    return(
        <View style={styles.Container}>
            <View style={styles.tt}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.header_title}>PASSWORD</Text>
                        <Text style={styles.header_title}>GENERATOR</Text>
                    </View>
                    <TextInput 
                        style={styles.header_input}
                        editable={false}
                    >
                        <Text style={styles.header_input_text}>{valuePassword}</Text>
                    </TextInput>
                    
                </View>

                <View style={styles.body}>
                    <View style={styles.body_view}>
                        <Text style={styles.body_title}>Password length</Text>
                        <TextInput
                            style={styles.body_input_lenght}
                            onChangeText={text=>setIncludeLengthCase(Number(text))}
                        />
                    </View>
                    <View style={styles.body_view}>
                        <Text style={styles.body_title}>Include lower case letters</Text>
                        <TouchableOpacity
                            style={styles.body_input_checkbox}
                            onPress={() => setIncludeLowerCase(!includeLowerCase)}
                            >
                            {includeLowerCase ? (
                                <Text style={styles.body_input_checkbox_check}>✓</Text> // Hiển thị dấu check nếu chọn
                            ) : null}
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.body_view}>
                            <Text style={styles.body_title}>Include upcase letters</Text>
                            <TouchableOpacity
                                style={styles.body_input_checkbox}
                                onPress={()=>setIncludeUpperCase(!includeUpperCase)}
                                >
                                {includeUpperCase?(
                                    <Text style={styles.body_input_checkbox_check}>✓</Text>
                                ):null}
                            </TouchableOpacity>
                    </View>
                    <View style={styles.body_view}>
                            <Text style={styles.body_title}>Include number</Text>
                            <TouchableOpacity
                                style={styles.body_input_checkbox}
                                onPress={()=>setIncludeNumberCase(!includeNumberCase)}
                                >
                                {includeNumberCase?(
                                    <Text style={styles.body_input_checkbox_check}>✓</Text>
                                ):null}
                            </TouchableOpacity>
                    </View>
                    <View style={styles.body_view}>
                            <Text style={styles.body_title}>Include special symbol</Text>
                            <TouchableOpacity
                                style={styles.body_input_checkbox}
                                onPress={()=>setIncludeSymbolCase(!includeSymbolCase)}
                                >
                                {includeSymbolCase?(
                                    <Text style={styles.body_input_checkbox_check}>✓</Text>
                                ):null}
                            </TouchableOpacity>
                    </View>
                </View>
            
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.footer_button}
                    >
                        <Text style={styles.footer_button_title}>GENERATE PASSWORD </Text>
                    </TouchableOpacity>
                        
                </View>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    Container:{
        padding:30,
        flex:1,
        backgroundColor: "#9898c3"
    },
    tt:{
        flex:1,
        backgroundColor: "#23235b",
        borderRadius:25,
        padding:15,
    },
    header:{
        flex:2,
        alignItems:"center",
        justifyContent: "space-evenly"
    },
    header_title:{
        fontSize:26,
        color:"#fff",
        fontWeight:"bold"
    },
    header_input:{
        backgroundColor:"#151537",
        width:"100%",
        height:70,
        paddingLeft:15
    },
    header_input_text:{
        color:"#fff",
        fontSize:16,
        fontWeight:"bold"
    },
    body:{
        flex:2,
        justifyContent:"space-between"
    },
    footer:{
        flex:1,
        justifyContent:"center",
        paddingLeft:15,
        paddingRight:15
    },
    body_view:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    body_title:{
        fontSize:18,
        fontWeight:"bold",
        color:"#fff",
        flex:6
    },
    body_input_lenght:{
        width:"100%",
        backgroundColor:"#fff",
        height:40,
        flex:4,
        paddingLeft:10,
        fontSize:20,
        
    },
    body_input_checkbox:{
        height:30, 
        width:30, 
        backgroundColor:"#fff",
        alignItems:"center"
    },
    body_input_checkbox_check:{
        fontWeight:"bold",
        fontSize:24,
    },
    footer_button:{
        height:70,
        width:"100%",
        backgroundColor:"#3b3b98",
        color:"#fff",
        alignItems:"center",
        justifyContent:"center"
    },
    footer_button_title:{
        fontSize:18,
        fontWeight:"bold",
        color:"#fff"
    }

    
})
