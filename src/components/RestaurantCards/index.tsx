import React, {useState,useEffect } from 'react'
import { View,Text,ScrollView,TouchableOpacity,Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RestoranScreen from '@/src/screen/RestoranScreen';






export default function index() {
  interface RestaurantCards {
    _id: string ;
    name: string;
    location: string;
    price: string;
    time: string;
    category: string;
    image?: string;
    distance: string;
    rating?: number;
    review?: string;
    yedikceindirim?: boolean;
  }
  const [restaurantCards, setRestaurantCards] = useState<RestaurantCards[]>([]);
const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    axios
   .get('http://192.168.116.88:3000/restaurantcards')
    .then((response) => {
      // console.log(response.data);
      setRestaurantCards(response.data); 
    })
    .catch((error) => {
      console.error('Veri çekme hatası:', error);
    });
}, []);


  return (
    <View>
     {/* sana özel restaurantlar tümünü gör */}
    <View 
    style={{
        flexDirection:'row',
        paddingTop:10,
        alignItems:'center',
        marginHorizontal: 15, // Sağ ve sol kenardan boşluk
    }}>
        <View>
        <FontAwesome style={{marginRight:8}} name="heart" size={20} color="#d9001f" />
        </View>
        <Text style={{
            fontSize:15,
            fontWeight:'bold',
        }}>Sana Özel Restoranlar</Text>
        <TouchableOpacity>
                  <Text style={{
                    fontSize: 12,
                    fontWeight: 'bold',
                    color:'#ee7d1d',
                    marginLeft:120
                  }}>Tümünü Gör</Text>
        </TouchableOpacity>
    </View>
     <ScrollView
     horizontal
     showsHorizontalScrollIndicator={false} >
    {restaurantCards.map((restaurant, index) => (
     <TouchableOpacity onPress={() => navigation.navigate("RestoranScreen", { _id: restaurant._id })}>
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
            source={{uri : restaurant.image}}
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
              color: '#282828'
          }} numberOfLines={1} ellipsizeMode="tail">
              {restaurant.name}
          </Text>

            <Text style={{
              fontWeight: '500',
              fontSize: 10,
              color: '#585858',
            }}>
              {restaurant.price} TL • {restaurant.category}
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
