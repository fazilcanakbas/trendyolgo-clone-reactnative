import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';

const restaurants = [
    { restoranname: 'Dürümcü Bedir Çopur', price: '189 TL', time: '20-30dk', foodname: 'Adana Dürüm', image: require('@/assets/dürüm.png') },
    { restoranname: 'Dürümcü Bedir Çopur', price: '189 TL', time: '20-30dk', foodname: 'Adana Dürüm', image: require('@/assets/dürüm.png') },
    { restoranname: 'Dürümcü Bedir Çopur', price: '189 TL', time: '20-30dk', foodname: 'Adana Dürüm', image: require('@/assets/dürüm.png') },
   

]
const restaurants2 = [
    { restoranname: 'Neden Tantuni', price: '140 TL', time: '30-40dk', foodname: 'Tavuk Tantuni Ekmek ', image: require('@/assets/tantuni.png') },
    { restoranname: 'Dürümcü Bedir Çopur', price: '189 TL', time: '20-30dk', foodname: 'Adana Dürüm', image: require('@/assets/dürüm.png') },
    { restoranname: 'Dürümcü Bedir Çopur', price: '189 TL', time: '20-30dk', foodname: 'Adana Dürüm', image: require('@/assets/dürüm.png') },
   

]



export default function index() {
    return (
        <View>

            <View
                style={{
                    flexDirection: 'row',  // Yatay hizalama için
                    justifyContent: 'space-between', // İki öğe arasına boşluk koyar
                    alignItems: 'center', // Dikeyde hizalar
                    marginHorizontal: 15, // Sağ ve sol kenardan boşluk
                    marginTop: 10,         // Üst boşluk
                }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>Bugün Ne Yesem </Text>

                <View
                    style={{
                        backgroundColor: '#d60606',
                        width: 40,
                        height: 17,
                        marginTop:2,
                        marginLeft:-115,
                        borderRadius: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 11,
                            fontWeight: 'bold',
                            color: 'white',
                            marginLeft: 7
                        }}
                    >
                        YENİ
                    </Text>
                </View>


                <TouchableOpacity>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: '#ee7d1d'
                    }}>Tümünü Gör</Text>
                </TouchableOpacity>


            </View>

            {/* birinci scrollview */}
            <ScrollView
            horizontal showsHorizontalScrollIndicator={false} >
            {restaurants.map((restaurant,index) =>(
            
            <View  key={index} 
            style={{
                width: 306,
                height: 110,
                borderRadius: 10,
                backgroundColor: '#ffffff',
                margin: 10
            }}>
                <View>
                   
                    <View style={{
                        width: 67,
                        height: 20,
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: 5,  
                        left:30,  
                        transform: [{ translateX: -25 }],
                        zIndex: 1,  
                        borderRadius:10,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        paddingHorizontal:7
                    }} >
                        <View>
                        <Fontisto style={{marginRight:5}} name="motorcycle" size={15} color="#8a8a8a" />
                        </View>
                        <Text style={{
                            fontSize:10,
                            textAlign:'right',
                            marginRight:1,
                            fontWeight:'500'
                        }}>{restaurant.time}</Text>
                        </View>
                

                    <Image
                        style={{ width: 112, height: 110 }}
                        source={restaurant.image}
                    />
                </View>

                <View style={{
                    paddingLeft:120,
                    flexDirection:'row'
                }}>
                    <View style={{width:25,height:25,backgroundColor:'gray',borderRadius:15,marginTop:-102}}>
                    
                    </View>
                    <Text style={{marginTop:-98,marginLeft:3,color:'#656565',fontWeight:'500',fontSize:13}}>{restaurant.restoranname}</Text>
                 </View>
                <Text style={{marginTop:-70,marginLeft:120,fontSize:15,fontWeight:'600'}}>{restaurant.foodname}</Text>
                <Text style={{marginTop:15,marginLeft:120,fontSize:15,fontWeight:'bold',color:'#d77d2f'}}>{restaurant.price}</Text>
                
                <TouchableOpacity>
                <View style={{
                    backgroundColor:'#eb7e19',
                    width:40,
                    height:25,
                    borderRadius:5,                    marginLeft:258,
                    marginTop:-20,
                    paddingLeft:8.5
                }}>
                    <Entypo name="plus" size={24} color="white" />
                </View>
                </TouchableOpacity>
            </View>
           
          ))}
           </ScrollView>

            {/* ikinci scrollview */}
           <ScrollView
            horizontal showsHorizontalScrollIndicator={false}>
            {restaurants2.map((restaurant2,index) =>(
            
            <View  key={index} 
            style={{
                width: 306,
                height: 110,
                borderRadius: 10,
                backgroundColor: '#ffffff',
                margin: 10
            }}>
                <View>
                   
                    <View style={{
                        width: 67,
                        height: 20,
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: 5,  
                        left:30,  
                        transform: [{ translateX: -25 }],
                        zIndex: 1,  
                        borderRadius:10,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        paddingHorizontal:7
                    }} >
                        <View>
                        <Fontisto style={{marginRight:5}} name="motorcycle" size={15} color="#8a8a8a" />
                        </View>
                        <Text style={{
                            fontSize:10,
                            textAlign:'right',
                            marginRight:1,
                            fontWeight:'500'
                        }}>{restaurant2.time}</Text>
                        </View>
                

                    <Image
                        style={{ width: 112, height: 110 }}
                        source={restaurant2.image}
                    />
                </View>

                <View style={{
                    paddingLeft:120,
                    flexDirection:'row'
                }}>
                    <View style={{width:25,height:25,backgroundColor:'gray',borderRadius:15,marginTop:-102}}>
                    
                    </View>
                    <Text style={{marginTop:-98,marginLeft:3,color:'#656565',fontWeight:'500',fontSize:13}}>{restaurant2.restoranname}</Text>
                 </View>
                <Text style={{marginTop:-70,marginLeft:120,fontSize:15,fontWeight:'600'}}>{restaurant2.foodname}</Text>
                <Text style={{marginTop:15,marginLeft:120,fontSize:15,fontWeight:'bold',color:'#d77d2f'}}>{restaurant2.price}</Text>

                <TouchableOpacity>
                <View style={{
                    backgroundColor:'#eb7e19',
                    width:40,
                    height:25,
                    borderRadius:5,                    marginLeft:258,
                    marginTop:-20,
                    paddingLeft:8.5
                }}>
                    <Entypo name="plus" size={24} color="white" />
                </View>
                </TouchableOpacity>
            </View>
           
          ))}
           </ScrollView>

        </View>
    )
}
