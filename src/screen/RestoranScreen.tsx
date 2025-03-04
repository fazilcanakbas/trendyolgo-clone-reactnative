import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import TopBar from '../components/RestoranScreenComponent/TopBar';
import RestaurantInfoCard from '../components/RestoranScreenComponent/RestaurantInfoCard';
import RestaurantMenu from '../components/RestoranScreenComponent/RestaurantMenu';

export default function RestoranScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: '#f27a1b' }}>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}>
        <TopBar />
      </View>

    
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1, marginTop: 122 }} 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <RestaurantInfoCard />
        <RestaurantMenu />
      </ScrollView>
      </View>
    </View>
  );
}
