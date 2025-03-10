import React from 'react';
import { StatusBar, ScrollView, View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; // React Navigation'dan StackNavigationProp import edin
import TopBar from '../components/TopBar';
import CartItem from '../components/CartItem';
import BannerCarousel from '../components/BannerCarousel';
import PointCard from '../components/PointCard';
import KitchenCards from '../components/KitchenCards';
import RestaurantCards from '../components/RestaurantCards';
import TrendyolGo from '../components/TrendyolGo';
import OfferCards from '../components/OfferCards';


function HomeScreen() {
  return (
    <>
     <StatusBar barStyle="light-content" backgroundColor="#f87d1d" />
      <View style={styles.container}>
        <TopBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <CartItem /> 
          <BannerCarousel />
          <PointCard />
          <KitchenCards />
          <RestaurantCards />
          <TrendyolGo />
          <OfferCards />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Arka plan rengi
  },
});

export default HomeScreen;
