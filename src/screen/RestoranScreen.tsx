import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text,Dimensions } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import TopBar from '../components/RestoranScreenComponent/TopBar';
import RestaurantInfoCard from '../components/RestoranScreenComponent/RestaurantInfoCard';
import RestaurantMenu from '../components/RestoranScreenComponent/RestaurantMenu';
import axios from 'axios';

const { width,height } = Dimensions.get('window');


type RootStackParamList = {
  RestoranScreen: { _id: Int32Array };
};
interface RestaurantCards {
  _id: Int32Array ;
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

export default function RestoranScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'RestoranScreen'>>();
  const { _id } = route.params; 


    const [restaurantCards, setRestaurantCards] = useState<RestaurantCards[]>([]);
      const [loading, setLoading] = useState<string | null>(null);
        const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`http://192.168.116.88:3000/restaurantcards/${_id}`)
    .then((response) => {
      setRestaurantCards(response.data); 
    })
      .catch(error => {
        console.error('Restoran verisi alınamadı:', error);
      });
  }, [_id]);

  if (!restaurantCards) {
    return <Text>Yükleniyor...</Text>;
  }
  if (loading) {
    return <View style={{ width:width*width,height:height*height,backgroundColor:'#f27a1b'}}> <Text style={{
      
    }}>Yükleniyor...</Text></View>;
  }if (error) {
      return <Text>{error}</Text>;
    }
  

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: '#f27a1b' }}>
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}>
          <TopBar  restaurantCardsId={_id} />
        </View>

        <ScrollView 
          contentContainerStyle={{ flexGrow: 1, marginTop: 122 }} 
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <RestaurantInfoCard restaurantCardsId={_id} />
          <RestaurantMenu restaurantCardsId={_id.toString()} />
        </ScrollView>
      </View>
    </View>
  );
}
