import React, { useState } from 'react'
import { View ,Text, TouchableOpacity,Dimensions,ScrollView} from 'react-native'
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '@/colors';


const {width,height} = Dimensions.get('window');

const orders = [
    {
      id: 1,
      restaurant: 'Komagene Etsiz Çiğ Köfte (Akkuyu)',
      date: '26 Şubat 2025 / 23:08',
      total: '295 TL',
      deliveredItems: 3,
      products: 'Komagene Şuşi - Doritoslu (1 Adet), Mega Çiğköfte Dürüm',
    },
    {
      id: 2,
      restaurant: 'Burger King (Konyaaltı)',
      date: '15 Mart 2025 / 19:45',
      total: '185 TL',
      deliveredItems: 2,
      products: 'Whopper Menü, Soğan Halkası',
    },
    {
      id: 3,
      restaurant: 'Dominos Pizza (Lara)',
      date: '8 Nisan 2025 / 21:30',
      total: '220 TL',
      deliveredItems: 1,
      products: 'Bol Malzemos Pizza',
    }
  ];


export default function index() {
    const [selected, setSelected] = useState(false);
  return (
       <>
       // TopBar
       <View style={{flexDirection:'column',height:height*0.205,backgroundColor:'#f9f9f9',elevation:2}}>

       {/* Şiparişlerim */}
       <View style={{alignItems:'center',paddingTop:19,padding:10}}>
        <Text style={{fontSize:17,fontWeight:'bold'}}>Şiparişlerim</Text>
       </View>

        {/* Yemek ve Hızlı Market alanı */}
        <View style={{
        flexDirection: 'row',
        paddingTop:5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 15,
        gap: 13, 
    }}>  
         {/* sırala/sort */}
        <TouchableOpacity>
        <View style={{
            width: 170,
            height: 36,
            borderRadius: 50,
            borderWidth: 1.4,
            borderColor: '#e3e3e3',
            flexDirection: 'row',
            justifyContent: 'center',  // Yatayda ortalama
            alignItems: 'center',      // Dikeyde ortalama
            paddingHorizontal: 5,      // İkon ve yazı arasındaki mesafeyi kontrol eder
        }}>
          
            <Text style={{ marginLeft: 5 ,color:'#353535',fontSize:15,fontWeight:'400'}}>Yemek</Text>  
        </View>
        </TouchableOpacity>

         {/* filtrele/filter */}
        <TouchableOpacity>
        <View style={{
            width:170,
            height:36,
            borderRadius:50,
            borderWidth:1.4,
            borderColor:'#e3e3e3',
            flexDirection: 'row',
            justifyContent: 'center',  // Yatayda ortalama
            alignItems: 'center',      // Dikeyde ortalama
            paddingHorizontal: 5,   
        }}>
         
          <Text style={{ marginLeft: 5 ,color:'#353535',fontSize:15,fontWeight:'400'}}>Hızlı Market</Text>  
        </View>
        </TouchableOpacity>

        </View>
    
        {/* Search Button */}
        <View>
            <TouchableOpacity>
            <View style={{
            backgroundColor: '#edecec',
            width: width*0.91,
            height: 41,
            borderRadius: 50,
            marginHorizontal: 23,
            marginTop: 0,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            marginLeft:20,
            marginBottom:10
            }}>
            <Feather name="search" size={24} color="#f27a1b" />
            <Text style={{
                marginLeft: 15,
                fontSize: 16,
                fontWeight: '600',
                color: '#959595'
            }}>Siparişlerimde ara</Text>
            </View>
        </TouchableOpacity>
        </View>

        </View>

        {/* Sipariş Kartları */}
        <ScrollView style={{height:height*0.9,}}>
        {orders.map((order) => (
          <View key={order.id} style={{width:width*0.9,height:height*0.27,backgroundColor:'white',borderRadius:10,marginLeft:'auto',marginRight:'auto',marginTop:20,elevation:2,flexDirection:'column',}}>

            {/* Restaurant name ve kalp buton */}
            <View style={{flexDirection: 'row', position: 'relative'}}>
            <Text style={{fontWeight: 'bold', padding: 15, fontSize: 14}}>{order.restaurant}</Text>
            <TouchableOpacity onPress={() => setSelected(!selected)} style={{position: 'absolute', right: 15, top: 15}}>
                <View
                style={{
                    width: 27,
                    height: 27,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 4,
                }}
                >
                <AntDesign name={selected ? 'heart' : 'hearto'} size={18} color={selected ? 'red' : 'black'} />
                </View>
            </TouchableOpacity>
            </View>

            {/* sipariş tarihi */}
            <View style={{paddingLeft:15}}>
                <Text style={{fontWeight:'bold',fontSize:11.5,}}>{order.date}</Text>
            </View>

            {/* Total Toplam ve detaylar */}
            <View style={{flexDirection:'row',}}>
                <Text style={{fontWeight:'bold',fontSize:11,marginLeft:15,marginTop:10,color:'#646464'}}>Total:</Text>
                <Text style={{fontWeight:'bold',fontSize:11,marginLeft:2,marginTop:10,color:colors.turuncu}}>{order.total}</Text>
                <Text style={{fontWeight:'bold',fontSize:11,marginLeft:200,marginTop:10,color:colors.turuncu}}>Detaylar</Text>
                <TouchableOpacity>
                <AntDesign style={{marginLeft:2,marginTop:10}} name="right" size={15} color={colors.turuncu} />
                </TouchableOpacity>
            </View>

            {/* Çıbık */}
            <View style={{borderWidth:1,borderColor:'#e4e4e4',width:'92%',marginLeft:'auto',marginRight:'auto',borderRadius:5,marginTop:15}}></View>

            {/* Teslimat Durumu */}     
            <View style={{flexDirection:'row',marginTop:10,marginLeft:15}}>
            <Feather name="check" style={{marginTop:-3}} size={22} color="#29b167" />
            <Text style={{fontSize:11,fontWeight:'bold',color:'#29b167'}}> {order.deliveredItems} Ürün Teslim Edildi</Text>
            </View>


            {/* Tekrarla */}
            <View style={{flexDirection:'row',width:90,height:29,borderWidth:1,borderColor:'#d18642',borderRadius:3,marginLeft:15,marginTop:10,alignItems:'center'}}>
                <MaterialCommunityIcons name="refresh" size={18} color="#d18642" style={{marginLeft:9}} />
                <Text style={{fontSize:11,fontWeight:'bold',color:'black',marginLeft:5}}>Tekrarla</Text>  
            </View>

            {/*Ürün Bilgileri*/}
            <View>
                <Text style={{fontSize:10,fontWeight:'500',color:'#646464',marginLeft:15,marginTop:15}}>{order.products}</Text>
            </View>


          </View>
          ))}


        </ScrollView>

        </>



  )
}
