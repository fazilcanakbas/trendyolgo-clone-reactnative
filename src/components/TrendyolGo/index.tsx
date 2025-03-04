import React, { useState ,useEffect} from 'react'
import { View,Text,ScrollView,TouchableOpacity,Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import axios from 'axios';



// const restaurants =[
//     { image:  require('../../../assets/komagene.png'),name: 'Komagene Etsiz Çiğ Kö...', price: 'Min. 280 TL' , Category:'Sokak Lezzetleri', imagelogo: require('../../../assets/logo.png') ,time:'45-55dk' ,distance:'2.2 km'},
//     { image:  require('../../../assets/alaiyepilavcısı.png'),name: 'Alaiye Pilavcısı', price: 'Min. 275 TL' , Category:'Sokak Lezzetleri', imagelogo: require('../../../assets/logo.png') ,time:'50-60dk' ,distance:'2.3 km'},
//     { image:  require('../../../assets/öncü.png'),name: 'Öncü Döner', price: 'Min. 275 TL' , Category:'Döner', imagelogo: require('../../../assets/logo.png') ,time:'45-55dk' ,distance:'2.0 km'},
//     { image:  require('../../../assets/kfc.png'),name: 'KFC', price: 'Min. 90 TL' , Category:'Tavuk', imagelogo: require('../../../assets/logo.png') ,time:'25-35dk' ,distance:'0.4 km'},
//     { image:  require('../../../assets/mcdonalds.png'),name: 'McDonald\'s  ', price: 'Min. 140 TL' , Category:'Burger', imagelogo: require('../../../assets/logo.png') ,time:'25-35dk' ,distance:'2.5 km'},
//     { image:  require('../../../assets/burgerking.jpg'),name: 'Burger King', price: 'Min. 200 TL' , Category:'Burger', imagelogo: require('../../../assets/logo.png') ,time:'30-40dk' ,distance:'1.5 km'},
//    { image:  require('../../../assets/gagala.png'),name: 'Gagala Döner', price: 'Min. 275 TL' , Category:'Döner', imagelogo: require('../../../assets/logo.png') ,time:'45-55dk' ,distance:'2.1 km'},
  
  
   
 
  


// ]
interface TrendyolGo {
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



export default function index() {

  const [restaurants, setRestaurants] = useState<TrendyolGo[]>([]);

  useEffect(() => {
    axios
    .get('http://192.168.116.88:3000/trendyolGo')
    .then((response) =>
    setRestaurants(response.data)
    )
},[]);


  return (



    <View>
     {/*trenyolgo hızıyla  tümünü gör */}
    <View 
    style={{
        flexDirection:'row',
        paddingTop:10,
        alignItems:'center',
        marginHorizontal: 15, // Sağ ve sol kenardan boşluk
    }}>
        <View>
       
        <Fontisto style={{marginTop:3, marginRight:8}} name="motorcycle" size={20} color="#8a8a8a" />
        </View>
        <Text style={{
            fontSize:15,
            fontWeight:'bold',
        }}>Trendyol Go Hızıyla</Text>
        <TouchableOpacity>
                  <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color:'#ee7d1d',
                    marginLeft:143.5
                  }}>Tümünü Gör</Text>
        </TouchableOpacity>
    </View>



    
     <ScrollView
     horizontal
     showsHorizontalScrollIndicator={false} >
    {restaurants.map((restaurant, index) => (
      <TouchableOpacity>
        <View 
          key={index}
          style={{
            width: 150,
            height: 203,
            backgroundColor: 'white',
           borderRadius:10,
            marginTop: 10,
            marginLeft: 7,
            marginRight:3
          }}> 
         
          <Image 
            // source={restaurant.image}
            source={{ uri: restaurant.image }}
            style={{
              width: 152,
              height: 147,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }} 
            resizeMode="cover"
          />
          
          <View style={{
            padding: 4,
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 12.2,
              marginBottom: 0,
              color:'#282828',
            }} numberOfLines={1} /*textin 1 satırda bitmesi*/ >
              {restaurant.name}
            </Text>
            <Text style={{
              fontWeight: '500',
              fontSize: 10,
              color: '#585858',
            }}>
              {restaurant.price} • {restaurant.Category}
            </Text>
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
              {restaurant.time} • {restaurant.distance}
            </Text>
            </View>
          </View>
        </View>
       </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );
}
