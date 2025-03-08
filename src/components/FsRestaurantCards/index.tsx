import React, { useEffect, useState } from 'react';
import { View,Text,ScrollView,TouchableOpacity,Image, Dimensions, ImageSourcePropType } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';



// const restaurants =[

// { name: 'Neden Tantuni', location:'(Kültür)',price: 'Min. 250 TL' , time: '30-40dk', Category: 'Sokak Lezzetleri', image: require('@/assets/tantuni.png'),distance:'2.1 km' ,rating:4.7 ,review:'(850+)',},

// { name: 'Hippo French Tacos', location:'(Kültür)',price: 'Min. 150 TL' , time: '25-35dk', Category: 'Dünya Mutfağı & Cafe ', image: require('@/assets/dürüm.png'),distance:'1.8 km' ,rating:4.6 ,review:'(350+)',},

// { name: 'Dürümcü Bedir Çopur',  location:'(Kültür)', price: 'Min. 200 TL' , time: '20-30dk', Category: 'Sokak Lezzetleri', image: require('@/assets/dürüm.png'),distance:'2.1 km', yedikceindirim : true ,rating:4.4 ,review:'(150+)',},

// { name: 'Dürümcü Bedir Çopur',  location:'(Kültür)', price: 'Min. 200 TL' , time: '20-30dk', Category: 'Sokak Lezzetleri', image: require('@/assets/dürüm.png'),distance:'2.1 km', yedikceindirim : true ,rating:3.8 ,review:'(150+)',},

// { image:  require('../../../assets/gagala.png'),name: 'Gagala Döner', price: 'Min. 275 TL' ,  location:'(Kültür)', Category:'Döner', imagelogo: require('../../../assets/logo.png') ,time:'45-55dk' ,distance:'2.1 km',rating:4.9 ,review:'(560+)',},
// { image:  require('../../../assets/restaurant.png'),name: 'Komagene Etsiz Çiğ Kö...', price: 'Min. 280 TL' , Category:'Sokak Lezzetleri', imagelogo: require('../../../assets/logo.png') ,time:'45-55dk' ,distance:'2.2 km',rating:4.9 ,review:'(560+)', location:'(Kültür)',},
// { image:  require('../../../assets/alaiyepilavcısı.png'),name: 'Alaiye Pilavcısı', price: 'Min. 275 TL' , Category:'Sokak Lezzetleri', imagelogo: require('../../../assets/logo.png') ,time:'50-60dk' ,distance:'2.3 km',rating:4.9 ,review:'(560+)', location:'(Kültür)', yedikceindirim : true ,},
// { image:  require('../../../assets/öncü.png'),name: 'Öncü Döner', price: 'Min. 275 TL' , Category:'Döner', imagelogo: require('../../../assets/logo.png') ,time:'45-55dk' ,distance:'2.0 km',rating:4.3 ,review:'(560+)', location:'(Kültür)',},
// { image:  require('../../../assets/kfc.png'),name: 'KFC', price: 'Min. 90 TL' , Category:'Tavuk', imagelogo: require('../../../assets/logo.png') ,time:'25-35dk' ,distance:'0.4 km',rating:4.5 ,review:'(560+)', location:'(Kültür)',},
// { image:  require('../../../assets/mcdonalds.png'),name: 'McDonald\'s', price: 'Min. 140 TL' , Category:'Burger', imagelogo: require('../../../assets/logo.png') ,time:'25-35dk' ,distance:'2.5 km',rating:4.9 ,review:'(560+)', location:'(Kültür)', yedikceindirim : true ,},
// { image:  require('../../../assets/burgerking.jpg'),name: 'Burger King', price: 'Min. 200 TL' , Category:'Burger', imagelogo: require('../../../assets/logo.png') ,time:'30-40dk' ,distance:'1.5 km',rating:4.2 ,review:'(560+)', location:'(Kültür)', yedikceindirim : true ,},{ image:  require('../../../assets/gagala.png'),name: 'Gagala Döner', price: 'Min. 275 TL' ,  location:'(Kültür)', Category:'Döner', imagelogo: require('../../../assets/logo.png') ,time:'45-55dk' ,distance:'2.1 km',rating:4.9 ,review:'(560+)',},
// { image:  require('../../../assets/restaurant.png'),name: 'Komagene Etsiz Çiğ Kö...', price: 'Min. 280 TL' , Category:'Sokak Lezzetleri', imagelogo: require('../../../assets/logo.png') ,time:'45-55dk' ,distance:'2.2 km',rating:4.9 ,review:'(560+)', location:'(Kültür)',},
// { image:  require('../../../assets/alaiyepilavcısı.png'),name: 'Alaiye Pilavcısı', price: 'Min. 275 TL' , Category:'Sokak Lezzetleri', imagelogo: require('../../../assets/logo.png') ,time:'50-60dk' ,distance:'2.3 km',rating:4.9 ,review:'(560+)', location:'(Kültür)', yedikceindirim : true ,},
// { image:  require('../../../assets/öncü.png'),name: 'Öncü Döner', price: 'Min. 275 TL' , Category:'Döner', imagelogo: require('../../../assets/logo.png') ,time:'45-55dk' ,distance:'2.0 km',rating:4.3 ,review:'(560+)', location:'(Kültür)',},
// { image:  require('../../../assets/kfc.png'),name: 'KFC', price: 'Min. 90 TL' , Category:'Tavuk', imagelogo: require('../../../assets/logo.png') ,time:'25-35dk' ,distance:'0.4 km',rating:4.5 ,review:'(560+)', location:'(Kültür)',},
// { image:  require('../../../assets/mcdonalds.png'),name: 'McDonald\'s', price: 'Min. 140 TL' , Category:'Burger', imagelogo: require('../../../assets/logo.png') ,time:'25-35dk' ,distance:'2.5 km',rating:4.9 ,review:'(560+)', location:'(Kültür)', yedikceindirim : true ,},
// { image:  require('../../../assets/burgerking.jpg'),name: 'Burger King', price: 'Min. 200 TL' , Category:'Burger', imagelogo: require('../../../assets/logo.png') ,time:'30-40dk' ,distance:'1.5 km',rating:4.2 ,review:'(560+)', location:'(Kültür)', yedikceindirim : true ,},{ image:  require('../../../assets/gagala.png'),name: 'Gagala Döner', price: 'Min. 275 TL' ,  location:'(Kültür)', Category:'Döner', imagelogo: require('../../../assets/logo.png') ,time:'45-55dk' ,distance:'2.1 km',rating:4.9 ,review:'(560+)',},
// { image:  require('../../../assets/restaurant.png'),name: 'Komagene Etsiz Çiğ Kö...', price: 'Min. 280 TL' , Category:'Sokak Lezzetleri', imagelogo: require('../../../assets/logo.png') ,time:'45-55dk' ,distance:'2.2 km',rating:4.9 ,review:'(560+)', location:'(Kültür)',},
// { image:  require('../../../assets/alaiyepilavcısı.png'),name: 'Alaiye Pilavcısı', price: 'Min. 275 TL' , Category:'Sokak Lezzetleri', imagelogo: require('../../../assets/logo.png') ,time:'50-60dk' ,distance:'2.3 km',rating:4.9 ,review:'(560+)', location:'(Kültür)', yedikceindirim : true ,},
// { image:  require('../../../assets/öncü.png'),name: 'Öncü Döner', price: 'Min. 275 TL' , Category:'Döner', imagelogo: require('../../../assets/logo.png') ,time:'45-55dk' ,distance:'2.0 km',rating:4.3 ,review:'(560+)', location:'(Kültür)',},
// { image:  require('../../../assets/kfc.png'),name: 'KFC', price: 'Min. 90 TL' , Category:'Tavuk', imagelogo: require('../../../assets/logo.png') ,time:'25-35dk' ,distance:'0.4 km',rating:4.5 ,review:'(560+)', location:'(Kültür)',},
// { image:  require('../../../assets/mcdonalds.png'),name: 'McDonald\'s', price: 'Min. 140 TL' , Category:'Burger', imagelogo: require('../../../assets/logo.png') ,time:'25-35dk' ,distance:'2.5 km',rating:4.9 ,review:'(560+)', location:'(Kültür)', yedikceindirim : true ,},
// { image:  require('../../../assets/burgerking.jpg'),name: 'Burger King', price: 'Min. 200 TL' , Category:'Burger', imagelogo: require('../../../assets/logo.png') ,time:'30-40dk' ,distance:'1.5 km',rating:4.2 ,review:'(560+)', location:'(Kültür)', yedikceindirim : true ,},

// ]




const {width,height} = Dimensions.get('window')
const getBackgroundColor = (rating: number) => {
    if (rating > 4.5) {
      return '#02a435'; 
    } else if (rating >= 4.0 && rating <= 4.5) {
      return '#4cc63d'; 
    } else {
      return '#FF6347'; 
    }
  };
  

export default function index() {

  interface Restaurant {
    _id: string;
    name: string;
    location: string;
    price: string;
    time: string;
    Category: string;
    image: string;
    distance: string;
    rating: number;
    review: string;
    yedikceindirim?: boolean;
  }
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    axios
      .get('http://192.168.102.88:3000/restaurant') 
      .then((response) => {
        setRestaurants(response.data); 
      })
      .catch((error) => {
        console.error('Veri çekme hatası:', error);
      });
  }, []);
  

  return (

    <View>
     {/*restoranlar-görünüm-filtrele */}
    <View 
    style={{
        flexDirection:'row',
        paddingTop:10,
        alignItems:'center',
        marginHorizontal: 15, 
    }}>
        <View>
       
       
        </View>
        <Text style={{
            fontSize:17,
            fontWeight:'bold',
        }}>Restoranlar (299)</Text>
        <TouchableOpacity>
        <View style={{
            flexDirection:'row',
           alignItems:'center'
        }}>
       
       <MaterialCommunityIcons  style={{
           marginLeft:80
           
        }} name="view-day-outline" size={24} color="#ee7d1d" />
        <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color:'#ee7d1d',
                    marginLeft:4
                  }}>Görünüm</Text>
        </View>
        <View  style={{
                    height:18,
                    width:3,
                    backgroundColor:'#e3e3e3',
                    marginLeft:165,
                    marginTop:-20,
                    borderRadius:1
                }}>

        </View>         
        </TouchableOpacity>

        <TouchableOpacity>
                  <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                  
                    }}>
                  <MaterialCommunityIcons  style={{ top:10,marginLeft:2
                    }} name="filter-outline" size={24}  color="#ee7d1d" />
                  </View>
                  <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color:'#ee7d1d',
                    marginLeft:26,
                    marginTop:-10,
                    marginBottom:10
                  }}>Filtrele</Text>
        </TouchableOpacity>
    </View>



    {restaurants.map((restaurant, index) => (
        <TouchableOpacity  
        onPress={() => navigation.navigate('RestoranScreen', { _id: restaurant._id})}
        
        
        style={{
            flexGrow: 1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection:'row'

        }}>
            <View 
            key={index}
            style={{
                width: width*0.92,
                height: height*0.12,
                backgroundColor: '#ffffff',
                borderRadius:10,
                marginTop: 7,
                flexDirection:'row',
                gap:7,
                elevation: 3, 

            }}> 
         
          <Image 
            source={{ uri: restaurant.image }}
            style={{
              width: 78,
              height: 76,
              borderRadius: 5,
              marginLeft:10,
              marginTop:10,
            }} 
           
          />
          
          <View style={{
           justifyContent:'center',
           gap:4,
           marginBottom:10,
          }}>
            <View  style={{
                flexDirection:'row'

            }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 13.5,
              marginBottom: 0,
              color:'#282828'
            }}>
              {restaurant.name} ({restaurant.location})
            </Text>
           
            
            </View>
            {restaurant.yedikceindirim && (
                <View
                    style={{
                    marginLeft: 190,
                    marginTop: -24,
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
                )}

            <TouchableOpacity>
            <View style={{
                width:27,
                height:27,
                marginLeft:232,
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
            <View
            style={{flexDirection:'row',gap:5,marginTop:-4}}
            >   
            <View 
               style={{
                backgroundColor: getBackgroundColor(restaurant.rating),
                borderRadius: 4,
                padding: 2,
                flexDirection: 'row',
                gap:1
            }}>
                <Octicons style={{
                    marginTop:2
                }} name="star-fill" size={12} color="white" />
                <Text style={{
                fontWeight: 'bold',
                fontSize: 11.5,
                color: 'white',
                marginLeft:3
                }}>{restaurant.rating} </Text>
                <Text style={{
                fontWeight: 'bold',
                fontSize: 10,
                color: 'white',
                marginTop:0.8
                }}>{restaurant.review}</Text>
                </View>
                <Text style={{
                fontWeight: 'bold',
                fontSize: 10.5,
                color: '#a0a0a0',
                textAlign:'center',
                marginTop:4
                }}>
                {restaurant.Category}
                </Text>
            </View>
           
            <View style={{
                flexDirection:'row',
                gap:5
            }}>
     
            <Fontisto style={{marginTop:2.5}} name="motorcycle" size={15} color="#8a8a8a" />
            <Text style={{
              fontWeight: '500',
              fontSize: 10.5,
              color: '#585858',
              marginTop: 3,
              marginLeft:0
            }}>
              {restaurant.time} • {restaurant.distance} • {restaurant.price} 
            </Text>
            </View>
          </View>
        </View>
       </TouchableOpacity>
      ))}
   </View>
  );
}
