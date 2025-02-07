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





export default function EatScreen() {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5', // Arka plan rengi
    paddingBottom: 20, // ScrollView'un en alt kısmına biraz boşluk ekleyebilirsiniz
  },
});

