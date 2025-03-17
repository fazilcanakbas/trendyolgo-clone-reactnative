import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Image, Dimensions ,ScrollView,StatusBar} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import TopBar from "../components/RestoranScreenComponent/RestaurantProductScreenComponent/TopBar";
import colors from "@/colors";
import ProductInfo from "../components/RestoranScreenComponent/RestaurantProductScreenComponent/ProductInfo";

const { width,height } = Dimensions.get("screen");

type RootStackParamList = {
  RestaurantProductScreen: { restaurantId: Int32Array; productId: string };
};

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountedprice?: number;
  image: string;
}

export default function RestaurantProductScreen() {
  const route = useRoute<RouteProp<RootStackParamList, "RestaurantProductScreen">>();
  const { restaurantId, productId } = route.params || {};
  console.log("Route Params:", route.params);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: { display: 'none' }, 
    });
  }, [navigation]);

  useEffect(() => {
    axios
      .get(`http://192.168.102.88:3000/restaurants`) 

      .then((response) => {
        const restaurant = response.data.find((r: any) => r._id === restaurantId);
        if (restaurant) {
          const foundProduct = restaurant.products.find((p: Product) => p._id === productId);
          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            setError("Ürün bulunamadı.");
          }
        } else {
          setError("Restoran bulunamadı.");
        }
      })
      .catch(() => {
        setError("Restoran verisi alınamadı.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [restaurantId, productId]);

  if (loading) {
    return ;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
   <View>
<StatusBar barStyle="light-content" backgroundColor="#403e3c" />
    <View  style={{  }} >
   <TopBar  restaurantCardsId={restaurantId} />
   </View>
   <ScrollView>
    {/* <View style={{ flexDirection: 'row',height:height*0.2,backgroundColor:colors.turuncu}}/> */}
    <ProductInfo/>
    </ScrollView>



    
      
   </View>
  );
}
