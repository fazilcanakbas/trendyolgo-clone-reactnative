import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';

function index() {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} // Kaydırma çubuğunu gizler
      
      >
        <Image
          style={styles.image}
          source={require('../../../assets/WhatsApp Görsel 2024-12-15 saat 03.19.21_655104dc.jpg')}
        />
        <Image
          style={styles.image}
          source={require('../../../assets/WhatsApp Görsel 2024-12-15 saat 03.16.00_f0ef6e3f.jpg')}
        />
        <Image
          style={styles.image}
          source={require('../../../assets/WhatsApp Görsel 2024-12-15 saat 03.19.21_90209dd8.jpg')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:250,
    position:'absolute',
   backgroundColor:'#f5f5f5'

  },
  image: {
   
    width: 337,
    height: 135,
    marginHorizontal: 5, // Resimler arasında boşluk bırakır
    borderRadius: 10, // Kenarları yuvarlatır
  },
});

export default index;

