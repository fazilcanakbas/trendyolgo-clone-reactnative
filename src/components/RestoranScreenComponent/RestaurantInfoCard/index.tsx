import React, { useEffect, useState } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import axios from 'axios';

interface Restaurant {
  _id: Int32Array;
  name: string;
  distance: string;
  category: string;
  image: string;
 time: string;
 workingHours: string;
 rating: number;
 price: number;
}


const {width,height} = Dimensions.get('window');

interface RestaurantInfoCardProps {
  restaurantCardsId: Int32Array; 
}

export default function index({ restaurantCardsId }: RestaurantInfoCardProps) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
    axios.get('http://192.168.102.88:3000/restaurants')
    .then((response) => {
        const restaurants = response.data; 
        const foundRestaurant = restaurants.find((r: Restaurant) => r._id === restaurantCardsId);
        setRestaurant(foundRestaurant || null);
      })
      .catch((err) => {
        setError('Veriler alınırken bir hata oluştu');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [restaurantCardsId]); 
  return (

       <View style={{flex:1,height:height*0.399,backgroundColor:'white',}}>
        <View style={{backgroundColor:'#f27a1b',height:height*0.29,alignItems:'center'}}>
          {/* Restaurant Card*/}
          <View style={{backgroundColor:'white',height:height*0.39,width:width*0.9,borderRadius:20,elevation:5,}}>
            
          <View style={{flexDirection:'row'}}> {/* 1.Bölüm Resim ve Bilgiler*/}
            <View> {/*Resim*/}
            <Image 
            style={{marginLeft:10,marginTop:10,width:100,height:100,borderRadius:10,}}
            source={{ uri: restaurant?.image }}/>
           
            </View> 
            <View style={{flexDirection:'column',marginTop:15,marginLeft:8}}> {/* 1.Bölüm Sol Taraf Bilgiler*/}
              <Text style={{
                          fontWeight: 'bold',
                          fontSize: 14.5,
                          marginBottom: 0,
                          color:'#282828'
                        }}>
                        {restaurant?.name}
                       
              </Text>
              <Text style={{
                          fontWeight: '500',
                          fontSize: 10,
                          color: '#585858',
                        }}>
                          {restaurant?.distance} • {restaurant?.category}
              </Text>
      
              {/*Kalp Butonu */}
              <TouchableOpacity>
              <View style={{
                  width:27,
                  height:27,
                  marginLeft:190,
                  marginTop:-31,
                  backgroundColor:'#ffff',
                  borderRadius:15,
                  justifyContent:'center',
                  paddingLeft:4.5,
                  paddingTop:2,
                  elevation:4
              }} >
              <AntDesign style={{
              }} name="hearto" size={18} color="black" />
              </View>
              </TouchableOpacity>
             
      
              {/* Restoran Puanları */}
              <View style={{flexDirection:'row',marginTop:24,gap:6}}>
      
                <View style={{width:40,height:40,backgroundColor:'#4fc440',borderRadius:5,justifyContent:'center',paddingTop:1}}>
                  <View  style={{flexDirection:'row',gap:3,marginLeft:3}}>
                    <Fontisto style={{marginTop:5}} name="star" size={9} color="white" />
                    <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>4.1</Text>
                </View>
                <Text style={{textAlign:'center',color:'white',fontWeight:'400',fontSize:7}}>(350+)</Text>
                </View>
      
                <View style={{width:40,height:40,backgroundColor:'#e9f9e6',borderRadius:5,paddingTop:3,flexDirection:'column'}}>
                  <Text style={{textAlign:'center',fontSize:8,fontWeight:'700',}}>Teslimat</Text>
                  <Text style={{color:'#58c84c',fontWeight:'900',textAlign:'center',fontSize:15}}>4.2</Text>
                </View>
      
                <View style={{width:40,height:40,backgroundColor:'#e9f9e6',borderRadius:5,paddingTop:3,flexDirection:'column'}}>
                  <Text style={{textAlign:'center',fontSize:8,fontWeight:'700',}}>Servis</Text>
                  <Text style={{color:'#58c84c',fontWeight:'900',textAlign:'center',fontSize:15}}>4.1</Text>
                </View>
      
                <View style={{width:40,height:40,backgroundColor:'#e9f9e6',borderRadius:5,paddingTop:3,flexDirection:'column'}}>
                  <Text style={{textAlign:'center',fontSize:8,fontWeight:'700',}}>Lezzet</Text>
                  <Text style={{color:'#58c84c',fontWeight:'900',textAlign:'center',fontSize:15}}>4.1</Text>
                </View>
              </View> {/*Restoran Puanları Bitiş */}
      
      
          </View> {/*1.Bölüm Sol Taraf Bilgiler Bitiş */}
          </View> {/*1.Bölüm Resim ve Bilgiler Bitiş */}
       
          <View>{/*Yedikçe İndirim Restoranı(Daha Sonra Restoranın Yedikçe İndirim Aktifliğine göre eklenme ve kaldırma şartı konulucak) */}              
          <View style={{width:width*0.8,height:height*0.05,backgroundColor:'#fdefe4',marginTop:10,borderRadius:10,marginLeft:20}}>
                
                <Text style={{fontSize:9.2,marginLeft:24,marginRight:7,marginTop:7,fontWeight:'500'}}>Bu restoran Yedikçe İndirim restoranıdır. Kuponlarınızı ay sonuna kadar kullanabilirsiniz.</Text>
          </View>
          <View
               style={{
                marginLeft: 1,
                marginTop: -31,
                width: 40,
                height: 21,
                backgroundColor: '#fa5c2d',
                borderRadius: 5,
                }}
            >
                <Text
                style={{
                    fontSize: 7,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#ffff',
                }}
                >
                Yedikçe İndirim
                </Text>
            </View> 
            </View>  {/*Yedikçe İndirim Restoranı Bitiş */}             
            
            <View style={{width:width*0.82,height:1,backgroundColor:'#e4e4e4',justifyContent:'center',marginTop:25,marginLeft:19,}}></View> {/*Çizgi */}
      
            {/*Ödeme Yöntemleri */}
            <View>
                <Text style={{fontSize:10,fontWeight:'bold',color:'#848484',marginLeft:13,marginTop:13,marginBottom:8}}>Ödeme Yöntemleri</Text>
                <View style={{flexDirection:'row',marginLeft:13}}>
                <FontAwesome name="credit-card-alt" size={15} color="#4576ec" />
                <Text style={{fontSize:12,fontWeight:'bold',color:'#4f4f4f',marginLeft:2}}>Banka & Kredi Kartı</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:14}}>
                <FontAwesome style={{marginTop:4}}name="maxcdn" size={15} color="#74c87b" />
                <Text style={{fontSize:12,fontWeight:'bold',color:'#4f4f4f',marginLeft:4,marginTop:4}}>Multinet Online </Text>
                <TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                <FontAwesome6 style={{marginLeft:10,marginTop:2}}name="door-open" size={17} color="#ec5c13" />
                <Text style={{fontSize:12,fontWeight:'bold',color:'#4f4f4f',marginTop:4}}> Kapıda Ödeme(10)</Text>
                <Fontisto style={{marginTop:5.5}} name="angle-right" size={14} color="#ec5c13" />
                </View>
                </TouchableOpacity>
                </View>
            </View>
            {/*Ödeme Yöntemleri Bitiş */}
      
            {/*Çalışma Saatleri-Min Tutar-Teslimat Süresi-Yorumlar */}
            <View style={{flexDirection:'row',marginTop:5}}>
               <View style={{flexDirection:'column',marginLeft:7,marginTop:10}}>
               <Text style={{fontSize:10,fontWeight:'bold',color:'#848484',marginLeft:13,}}>Çalışma Saatleri</Text>
               <Text style={{fontSize:11,fontWeight:'bold',marginLeft:15}}>{restaurant?.workingHours}</Text>
               </View>
               <View style={{flexDirection:'column',marginLeft:7,marginTop:10}}>
               <Text style={{fontSize:10,fontWeight:'bold',color:'#848484',marginLeft:13,}}>Min Tutar</Text>
               <Text style={{fontSize:11,fontWeight:'bold',marginLeft:15}}>{restaurant?.price} TL</Text>
               </View>
               <View style={{flexDirection:'column',marginLeft:7,marginTop:10}}>
               <Text style={{fontSize:10,fontWeight:'bold',color:'#848484',marginLeft:13,}}>Teslimat Süresi</Text>
               <Text style={{fontSize:11,fontWeight:'bold',marginLeft:20}}>{restaurant?.time}</Text>
               </View>
               <TouchableOpacity>
               <View style={{height:40,width:65,backgroundColor:'#fef1e8',marginLeft:17,borderRadius:5,marginTop:1}}>
               <Text style={{fontSize:10,fontWeight:'500',color:'black',marginLeft:7,marginTop:5}}>Yorumlar</Text>
               <Text style={{fontSize:12.5,fontWeight:'bold',marginLeft:7,color:'#f17829'}}>132</Text>
               <Fontisto style={{marginLeft:50,marginTop:-20}} name="angle-right" size={13} color="#ec5c13" />
               </View>
               </TouchableOpacity>
            </View>
            {/*Çalışma Saatleri-Min Tutar-Teslimat Süresi-Yorumlar Bitiş */}
      
            </View>
            </View> {/* Restaurant Card Bitiş */}
</View>
  )
}
