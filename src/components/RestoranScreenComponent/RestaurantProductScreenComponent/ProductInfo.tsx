import React, { useEffect, useState } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity, FlatList, Animated, StyleSheet, ScrollView, Modal ,ActivityIndicator} from 'react-native'
import { AntDesign, Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import colors from '@/colors';
import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  RestaurantProductScreen: { restaurantId: string; productId: string };
};

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountedprice?: number;
  image: string;
}

const { width, height } = Dimensions.get('window');

export default function RestaurantProductScreen() {
  const route = useRoute<RouteProp<RootStackParamList, "RestaurantProductScreen">>();
  const { restaurantId, productId } = route.params;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isOpen, setIsOpen] = useState(false); 
  const [selectedQuantity, setSelectedQuantity] = useState(1); 
  const [slideAnim] = useState(new Animated.Value(height));

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      Animated.timing(slideAnim, {
        toValue: height * 0.5, 
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {

        Animated.timing(slideAnim, {
        toValue: height,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const selectQuantity = (quantity: number) => {
    setSelectedQuantity(quantity);
    toggleDropdown();
  };

  const renderItem = ({ item }: { item: number }) => (
    <TouchableOpacity onPress={() => selectQuantity(item)}>
      <View style={styles.option}>
        <Text style={styles.optionText}>{item}</Text>
      </View>
    </TouchableOpacity>
  );


  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5', height: height * 1, alignItems: 'center' }}>
      <View style={{ position: 'absolute', width: width, height: height * 0.2, backgroundColor: colors.turuncu }} />
      <View style={{
        backgroundColor: 'white',
        height: height * 0.54,
        width: width * 0.9,
        borderRadius: 10,
        elevation: 5,
      }}>
        {product &&
          <>
            <View style={{ alignItems: 'center', marginTop: 16 }}>
              <Image
                source={{ uri: product.image }}
                style={{ width: 200, height: 200, borderRadius: 10 }}
              />
              <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 16 }}>{product.name}</Text>
              <Text style={{ fontSize: 14, marginTop: 15 }}>{product.description}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
              <TouchableOpacity onPress={toggleDropdown}>
                <View style={styles.button}>
                  <Text style={styles.text}>Adet: {selectedQuantity}</Text>
                  <Entypo name="chevron-small-down" style={{ marginLeft: 10 }} size={24} color="black" />
                </View>
              </TouchableOpacity>

              {product.discountedprice && (
                <View style={{ flexDirection: 'column' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Ionicons style={{ marginTop: 5, marginLeft: 7 }} name="megaphone" size={15} color="#b60428" />
                    <Text style={{ fontSize: 10.7, fontWeight: 'bold', marginLeft: 3, color: '#b60428', marginTop: 5 }}>
                      En Düşük Fiyat(7 Gün)
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                      textDecorationLine: 'line-through',
                      fontSize: 14.5,
                      fontWeight: 'bold',
                      color: '#959595',
                      marginTop: -1,
                      marginLeft: 7
                    }}>
                      {product?.discountedprice} TL
                    </Text>
                    <Text style={{
                      fontSize: 14.5,
                      fontWeight: 'bold',
                      color: '#b60428',
                      marginTop: -1,
                      marginLeft: 5
                    }}>
                      {product.price} TL
                    </Text>
                  </View>
                </View>
              )}
              {!product.discountedprice && (
                <Text style={{ fontSize: 14.5, fontWeight: 'bold', color: '#f27a1b' }}>
                  {product.price} TL
                </Text>
              )}
            </View>
          </>
        }
        <View style={{alignItems:'center'}}>

   
        <TouchableOpacity>
            <View style={{width:width*0.8,height:30,borderWidth:1.8 ,borderColor:colors.turuncu,borderRadius:20,flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                <AntDesign name="message1" size={17} color={colors.turuncu} />
                <Text style={{textAlign:'center',marginTop:3,color:colors.turuncu,fontWeight:'bold'}}>  Ürün Yorumlarını Gör</Text>
            </View>
        </TouchableOpacity>  
 



        </View>


      </View>
      <View style={{flexDirection:'row',marginTop:230,gap:30,backgroundColor:'white',width:width,height:height*0.1,justifyContent:'center',alignItems:'center',borderRadius:20}} >
        <View>
      <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#f27a1b', marginLeft:7 }}>
                  {product?.price} TL
      </Text>
      </View>
      <View  style={{flexDirection:'row',gap:10}} >
      <TouchableOpacity>
            <View style={{width:width*0.35,height:50,borderWidth:1.8 ,borderColor:colors.turuncu,borderRadius:30,justifyContent:'center'}}>
               <Text style={{textAlign:'center',marginTop:3,color:colors.turuncu,fontWeight:'bold'}}>Hızlı Sipariş Ver</Text>
            </View>
        </TouchableOpacity> 
        <TouchableOpacity>
            <View style={{width:width*0.35,height:50,backgroundColor:colors.turuncu,borderRadius:30,justifyContent:'center'}}>
               <Text style={{textAlign:'center',marginTop:3,color:
                'white',fontWeight:'bold'}}>Sepete Ekle</Text>
            </View>
        </TouchableOpacity> 
        </View>
        </View>
      
      {isOpen && (
        <TouchableOpacity 
          style={styles.backdrop}
          onPress={toggleDropdown}
          activeOpacity={1}
        >
          <Animated.View 
            style={[
              styles.bottomSheet,
              {
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <TouchableOpacity activeOpacity={1}>
            
                
                <View style={styles.bottomSheetHeader}>
                  <Text style={styles.bottomSheetTitle}>Adet seçiniz:</Text>
                  <TouchableOpacity onPress={toggleDropdown}>
                    <AntDesign name="close" size={24} color="#959595" />
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomSheetContent}>
                
               
                
              
                <FlatList
                  data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.toString()}
                  contentContainerStyle={styles.listContainer}
                />
              </View>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      )}


  
    
     

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 30,
    width: 90,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e7e7e7',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: height * 0.549,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  bottomSheetContent: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  bottomSheetHeader: {
    flexDirection: 'row',
    paddingHorizontal:15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor:'#f5f5f5',
    height:60,
  },
  bottomSheetTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#959595',
  },

  listContainer: {
   marginTop:-10,
   gap:12,
   marginBottom:15
},
  option: {
    height: 40,
    justifyContent: 'center',
    marginLeft:10,

  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});