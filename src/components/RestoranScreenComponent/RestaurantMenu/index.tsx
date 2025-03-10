import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text, FlatList, Image } from 'react-native';
import axios from 'axios';
import { AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';

interface RestaurantMenu {
  discountedprice: React.JSX.Element;
  _id: string;
  name: string;
  description: string;
  price: number;
  categoryname: string;
  image: string;
  like?: string;
  command?: number;
  products: {
    categoryname: string;
    name: string;
    description: string;
    discountedprice: number;
    price: number;
    image: string;
    _id: string;
  }[];
}

interface RestaurantMenuProps {
  restaurantCardsId: string; // Gelen ID'yi alacak prop
}

export default function Index({ restaurantCardsId }: RestaurantMenuProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [restaurant, setRestaurant] = useState<RestaurantMenu | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // başlangıçta ilk kategori aktif

  useEffect(() => {
    axios
      .get('http://192.168.102.88:3000/restaurants')
      .then((response) => {
        const restaurants = response.data;
        const foundRestaurant = restaurants.find(
          (r: RestaurantMenu) => r._id === restaurantCardsId
        );
        setRestaurant(foundRestaurant || null);
      })
      .catch((err) => {
        setError('Veriler alınırken bir hata oluştu');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [restaurantCardsId]);

  // Ekran ilk açıldığında aktif olan kategoriye index atamak için
  useEffect(() => {
    if (restaurant && restaurant.products.length > 0) {
      setActiveIndex(0); // İlk ürün kategorisini aktif 
    }
  }, [restaurant]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  if (!restaurant) {
    return <Text>Restaurant not found.</Text>;
  }

  // Benzersiz kategorileri almak için
  const uniqueCategories = Array.from(new Set(restaurant.products.map(product => product.categoryname)));

  // Aktif kategoriye ait ürünleri filtreleme
  const activeCategory = restaurant.products.filter(
    (product) => product.categoryname === uniqueCategories[activeIndex]
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ top: 2,  }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 10,
            marginLeft: 15,
            borderBottomWidth: 2,
            borderBottomColor: '#e4e4e4',
            marginBottom: 10,
            gap:40,
           



          }}
        >
          {uniqueCategories.map((category, index) => (
            <TouchableOpacity
              key={category}
              onPress={() => {
                setActiveIndex(index);
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginRight: 15,
                  color: activeIndex === index ? '#d2762b' : '#959595',
                }}
              >
                {category}
              </Text>
              {activeIndex === index && (
                <View
                  style={{
                    marginTop: 10,
                    alignItems: 'center',
                    height: 3,
                    width: '85%',
                    backgroundColor: '#F18700',
                    borderRadius: 2,
                  }}
                />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Aktif kategoriye ait ürünleri listeleyin */}
        <FlatList
          style={{ marginBottom: 110 }}
          data={activeCategory}
          keyExtractor={(_, index) => index.toString()}
          keyboardShouldPersistTaps="handled"
          renderItem={({ item }) => (
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#ddd',
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginBottom: 20 }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '600',
                      marginTop: 8,
                      marginBottom: 3,
                      marginLeft: 12,
                    }}
                  >
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      color: '#959595',
                      marginLeft: 14,
                      fontWeight: '500',
                      flexWrap: 'wrap',
                      width: 250,
                    }}
                    numberOfLines={2}
                  >
                    {item.description}
                  </Text>

                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        width: 45,
                        height: 30,
                        marginLeft: 12,
                        marginTop: 10,
                        backgroundColor: '#f27a1b',
                        borderRadius: 7,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <FontAwesome5 name="plus" size={16} color="white" />
                    </View>

                    {restaurant?.discountedprice && (
                      <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                          <Ionicons
                            style={{ marginTop: 5, marginLeft: 7 }}
                            name="megaphone"
                            size={15}
                            color="#b60428"
                          />
                          <Text
                            style={{
                              fontSize: 10.7,
                              fontWeight: 'bold',
                              marginLeft: 3,
                              color: '#b60428',
                              marginTop: 5,
                            }}
                          >
                            En Düşük Fiyat(7 Gün)
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <Text
                            style={{
                              textDecorationLine: 'line-through',
                              fontSize: 14.5,
                              fontWeight: 'bold',
                              color: '#959595',
                              marginTop: -1,
                              marginLeft: 7,
                            }}
                          >
                            {item?.discountedprice} TL
                          </Text>
                          <Text
                            style={{
                              fontSize: 14.5,
                              fontWeight: 'bold',
                              color: '#b60428',
                              marginTop: -1,
                              marginLeft: 5,
                            }}
                          >
                            {item.price} TL
                          </Text>
                        </View>
                      </View>
                    )}

                    {!item.discountedprice && (
                      <Text
                        style={{
                          fontSize: 14.5,
                          fontWeight: 'bold',
                          color: '#f27a1b',
                          marginTop: 15,
                          marginLeft: 5,
                        }}
                      >
                        {item.price} TL
                      </Text>
                    )}
                  </View>
                  <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 12 }}>
                    <AntDesign name="like1" size={18} color="#0cc158" />
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '700',
                        color: '#0cc158',
                        marginLeft: 3,
                        marginTop: 1,
                      }}
                    >
                      {restaurant?.like} Beğenildi
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#676767',
                        fontSize: 12,
                        marginLeft: 3,
                        marginTop: 3,
                      }}
                    >
                      ({restaurant?.command} Değerlendirme)
                    </Text>
                  </View>
                </View>

                {item.image && (
                  <Image
                    source={typeof item.image === 'string' ? { uri: item.image } : item?.image}
                    style={{ width: 100, height: 90, marginLeft: 20, marginTop: 15 }}
                  />
                )}
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
