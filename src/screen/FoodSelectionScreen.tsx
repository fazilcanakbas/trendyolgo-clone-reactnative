import React from 'react'
import { View ,Text,StyleSheet,ScrollView,StatusBar} from 'react-native'
import FoodSelectionTopBar from '../components/FoodSelectionTopBar'
import FsFilter from '../components/FsFilter'
import RestaurantCards from '../components/RestaurantCards';
import FsOfferCarousel from '../components/FsOfferCarousel'
import FsPointCard from '../components/FsPointCard'
import KitchenCards from '../components/KitchenCards';
import NeYesem from '../components/NeYesem'
import FsYedikceIndirim from '../components/FsYedikceIndirim'
import FsKampanya from '../components/FsKampanya'
import FsCocaCola from '../components/FsCocaCola'
import FsRestaurantCards from '../components/FsRestaurantCards'
import FoodTabNavigator from '../navigation/FoodSelectionTabNavigator';





export default function FoodSelectionScreen() {
  return (
    
    <View style={{ flex: 1 }}>
       <StatusBar barStyle="light-content" backgroundColor="#403e3c" />
      <FoodSelectionTopBar />

      
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <FsFilter />
        <View style={styles.container}>
          <RestaurantCards />
          <FsOfferCarousel/>
          <FsPointCard/>
          <KitchenCards/>
          <NeYesem/>
          <FsYedikceIndirim/>
          <FsKampanya/>
          <FsCocaCola/>
          <FsRestaurantCards/>
        </View>
       
      </ScrollView>
      <View style={styles.tabContainer}>
        <FoodTabNavigator />
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5', 
    paddingBottom: 100  ,
  },
  tabContainer: {
    position: 'absolute',
    bottom: 2,
    left: 0,
    right: 0,
    
    backgroundColor: 'white',
    height: 68,
    borderTopWidth: 0,
    borderTopColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  }
});

