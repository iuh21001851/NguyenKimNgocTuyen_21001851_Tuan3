import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, Image, Linking, TouchableOpacity } from 'react-native';

export default function TiKi_Dk() {
    const [quanlity, setQuanlity] = useState<number>(1);
    const [price, setPrice] = useState<number>(141.800);
    const priceProdect=141.800;
    const handlePress = () => {
        console.log('Button pressed!');
      };
    const handleQuantityDesc=()=>{
      
            setQuanlity(quanlity=>quanlity-1)
    
            setPrice(price=>price-priceProdect)

      
    }
    const handleQuantityIsc=()=>{
        setQuanlity(quanlity=>quanlity+1);
        setPrice(price=>price+priceProdect)
        }

    // console.log(quanlity)
    // console.log(price)

  return (
   <View style={styles.Container}>
    <View style={styles.header}>
        <View style={{flex:3, flexDirection:"row"}}>
            <View style={{flex:2, backgroundColor:"black",justifyContent: 'center',alignItems: 'center'}}>
                <Image source={require('../assets/anh1.png')}
                style={styles.imgHeader}
                    resizeMode="cover"
                 />
            </View>
            <View style={styles.header_column2}>
                <Text style={styles.header_column2_title}>Nguyên hàm tích phân và ứng dụng</Text>
                <Text style={styles.header_column2_title}>Cung cấp bởi TiKi Trading</Text>
                <Text style={{fontSize:20, fontWeight: 'bold', color:'red'}}>{priceProdect.toFixed(3)} đ</Text>
                <Text style={{fontSize:15, fontWeight: 'bold', color:'#c4c4c4', textDecorationLine:'line-through'}}>{priceProdect.toFixed(3)} đ</Text>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <View  style={{flexDirection:"row", alignItems:'center'}}>
                        <TouchableOpacity disabled={quanlity<=1} style={styles.header_button} onPress={handleQuantityDesc}>
                            <Text style={styles.header_column2_title}>-</Text>
                        </TouchableOpacity>
                        <Text style={{fontWeight:"bold", paddingLeft:8, paddingRight:8}}>{quanlity}</Text>
                        <TouchableOpacity style={styles.header_button} onPress={handleQuantityIsc}>
                            <Text style={styles.header_column2_title}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{}} onPress={handlePress}>
                        <Text style={{color:"#3065ee", fontWeight:"bold"}}>Mua sau</Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        </View>

        <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
            <Text style={styles.header_column2_title}>Mã giảm giá đã lưu</Text>
            <TouchableOpacity style={{marginLeft:15}} onPress={handlePress}>
                <Text style={{color:"#3065ee", fontWeight:"bold"}}>Xem tại đây</Text>
            </TouchableOpacity>
        </View>

        <View style={{flex:1,flexDirection:"row", justifyContent:"space-between", paddingTop:20, paddingBottom:20}}>
            <TouchableOpacity style={{flexDirection:"row", borderWidth:1, alignItems:"center", padding:10, paddingRight:40, borderRadius:5}} onPress={handlePress}>
                <View style={{backgroundColor:"#f2dd1b", height:20, width:40, marginRight:15}}></View>
                <Text style={{fontWeight:"bold", fontSize:20}}>Mã giảm giá</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:"#3065ee", padding:10, justifyContent:'center', borderRadius:5}} onPress={handlePress}>
                <Text style={{color:"#fff", fontWeight:"bold", fontSize:20}}>Áp dụng</Text>
            </TouchableOpacity>
        </View>

    </View>
    
    <View style={styles.center}>
        <View style={styles.center_view}>
            <View style={{flexDirection:"row"}}>
                <Text style={{fontWeight:"bold", marginRight:5}}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
                <TouchableOpacity style={{}} onPress={handlePress}>
                    <Text style={{color:"#3065ee", fontWeight:"bold"}}>Nhập tại đây</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        <View style={styles.center_view}>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={{fontWeight:"bold", fontSize:20}}>Tạm tính</Text>
                <Text style={{fontSize:20, fontWeight: 'bold', color:'red'}}>{price.toFixed(3)} đ</Text>
            </View>
        </View>

    </View>

    <View style={styles.footer}>
        <View  style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={{fontSize:20, fontWeight:"bold", opacity:0.5}}>Thành tiền</Text>
            <Text style={{fontSize:20, fontWeight: 'bold', color:'red'}}>{price.toFixed(3)} đ</Text>
        </View>
        <View style={{backgroundColor:"#e53935", alignItems:"center", paddingTop:15, paddingBottom:15, borderRadius:5}}>
            <Text style={{color:'#fff', fontSize:22, fontWeight:"bold"}}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </View>
    </View>
   </View> 
  );
}

const styles = StyleSheet.create({
    Container:{
        paddingBottom:30,
        paddingTop: 30,
        flex:1,
        backgroundColor: "#fff"
    },
    header:{
        padding:15,
        flex:3
    },
    header_column2:{
        paddingLeft:10,
        flex:3, 
        justifyContent:"space-between"
    },
    header_button:{
        backgroundColor:"#c4c4c4",
        paddingLeft:8,
        paddingRight:8
    },
    header_column2_title:{
        fontWeight:'bold',
    },
    center:{
        flex:2,
        backgroundColor: "#c4c4c4"
    },
    footer:{
        flex:1,
        paddingLeft:15,
        paddingRight:15,
        justifyContent:"space-around"
    },
    imgHeader:{
        width:"100%",
        height:"100%",
    },
    center_view:{
        height:50,
        marginTop:15,
        backgroundColor:"#fff",
        paddingLeft:15,
        justifyContent:"center",
        paddingRight:15
    }
})
