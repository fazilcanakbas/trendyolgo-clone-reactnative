import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome6, Fontisto, Ionicons } from '@expo/vector-icons'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableOpacity, View ,Text ,Dimensions,Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import colors from '@/colors';


const { width, height } = Dimensions.get('window')

interface Restaurant {
  _id: Int32Array;
  name: string;
  distance: string;
  Category: string;
  image: string;
 time: string;
  rating: number;
  location: string;
}


interface RestaurantInfoCardProps {
  restaurantCardsId: Int32Array; 
}

export default function index({ restaurantCardsId }: RestaurantInfoCardProps) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
  
    axios.get(`http://192.168.102.88:3000/restaurants`)
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
          
      <ScrollView 
      contentContainerStyle={{ flexGrow: 1 ,backgroundColor:'white'}} 
      >
       <View style={{flex:1,backgroundColor:'white'}}>
      
          {/* Turuncu Kısım */}
          <View style={{ height:height*0.08, backgroundColor: colors.turuncu ,justifyContent:'center'}}>
      
            {/* Üst Bar [Geri Buton - Restoran Adı - Bildir] */}
            <View style={{backgroundColor:colors.turuncu,height:50,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:5}}>

            {/*Geri Butonu */}
              <View style={{marginLeft:10}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="close" size={29} color="white"/>
              </TouchableOpacity>
              </View>
            
      
            {/* Restoran Adı */}
            <View style={{}}>
                <Text style={{
                      color:'white',
                      fontSize:16,
                      fontWeight:'bold',
                     
                }}>{restaurant?.name}</Text>
              </View>
      
              {/* Hakkında-Bildir Buton */}
              <View style={{flexDirection:'row',justifyContent:'space-between',width:70,marginRight:-30}}>
               <TouchableOpacity>
               <Entypo name="warning" size={22} color="white" />
                <Text style={{color:'white',fontSize:7,fontWeight:'500',textAlign:'center'}}>Bildir</Text>
               </TouchableOpacity>
               </View>{/* Hakkında-Bildir Buton Bitiş */}
      
            </View> {/* Üst Bar Bitiş */}
      
          </View>{/* Turuncu Kısım Bitiş */}




      
          </View>{/* Ana View  Bitiş */}



       
       
      </ScrollView>
  )
}
